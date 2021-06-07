import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
//* Local imports
import Layout from '../components/Layout';
import CTA from '../components/CTA';
import BookIcon from '../svgs/open-book.svg';
import ArrowIcon from '../svgs/right-arrow.svg';
import AllBlogs from '../components/sections/allBlogs';

const Resources = ({ data }) => {
  const headerData = data.BlogQuery.nodes;
  const allBlogs = data.AllQuery.nodes;
  return (
    <Layout>
      <ResourcesHeader blogs={headerData} />
      <AllBlogs blogs={allBlogs} />
      <CTA />
    </Layout>
  );
};

export default Resources;

const ResourcesHeaderStyles = styled.header`
  width: 100%;
  background-color: var(--offWhite);
  .resources {
    padding: 6rem 0 3rem 0;
    width: 90%;
    margin: var(--auto);
    h1 {
      span {
        color: var(--mainColour);
        font-size: inherit;
      }
    }
    &__wrapper {
      margin-top: 1.5rem;
      &__left {
        .b-img {
          width: 100%;
          height: auto;
          position: relative;
          .gatsby-image-wrapper {
            width: 100%;
            height: 100%;
          }
          &__overlay {
            position: absolute;
            bottom: 0.5rem;
            right: 0.25rem;
            background-color: var(--background);
            border-radius: 1.5px;
            padding: 0.25rem 0.5rem;
            p {
              color: var(--offWhite);
              font-weight: 600;
            }
          }
        }
        .b-meta {
          display: flex;
          margin-top: 0.75rem;
          svg {
            width: 20px;
            fill: var(--mainColour);
          }
          p {
            &:nth-child(1) {
              font-weight: 700;
              color: var(--mainColour);
            }
            &:nth-child(2) {
              margin-left: 5px;
            }
          }
        }
        .b-title {
          h5 {
            font-size: 1.85rem;
            margin: 0.5rem 0;
          }
        }
      }
      &__right {
        margin-top: 1.5rem;
        h4 {
          margin-bottom: 1rem;
        }
        &__fea {
          margin: 1.75rem 0;
          span {
            display: flex;
            svg {
              width: 20px;
              fill: var(--lightTeal);
            }
            p {
              font-weight: 700;
              text-transform: uppercase;
              font-size: var(--textMedium);
              color: var(--lightTeal);
              padding-left: 7.5px;
            }
          }
          h5 {
            margin-top: 0.25rem;
          }
        }
        &__signup {
          margin-top: 2rem;
          background-color: var(--white);
          padding: 1.5rem 1rem;
          h5 {
          }
          form {
            display: flex;
            margin-top: 1rem;
            input {
              padding: 0.75rem;
              border: none;
              background-color: var(--background);
              color: var(--white);
              &::placeholder {
                color: var(--white);
              }
            }
            button {
              padding: 0.75rem;
              border: none;
              width: 100%;
              span {
                svg {
                  width: 15px;
                }
              }
            }
          }
        }
      }
    }
  }
`;
const ResourcesHeader = ({ blogs }) => {
  const [x, y, z, i] = blogs;
  const secondary = [];
  secondary.push(y, z, i);
  console.log(secondary);
  return (
    <ResourcesHeaderStyles>
      <div className="resources">
        <h1>
          The latest from <span>RPI</span>
        </h1>
        <div className="resources__wrapper">
          <div className="resources__wrapper__left">
            <Link to="/">
              <div className="b-img">
                <Img fluid={x.mainImage.asset.fluid} alt={x.mainImage.alt} />
                <div className="b-img__overlay">
                  <p>{`${x.readingTimeInMinutes} min read`}</p>
                </div>
              </div>
              <div className="b-meta">
                <p>{`${x.categories[0].title}`}</p>
                <p>{`• ${x.authors[0].author.name}`}</p>
              </div>
              <div className="b-title">
                <h3>{x.title}</h3>
                <p>{x.excerpt}</p>
              </div>
            </Link>
          </div>
          <div className="resources__wrapper__right">
            <h4>Featured articles</h4>
            {secondary.map((blog) => (
              <Link to="/" key={blog.title}>
                <div className="resources__wrapper__right__fea">
                  <span>
                    <BookIcon />
                    <p>Article</p>
                  </span>
                  <h5>{blog.title}</h5>
                </div>
              </Link>
            ))}
            <div className="resources__wrapper__right__signup">
              <h5>Get the latest from RPI</h5>
              <form action="">
                <input type="email" placeholder="Email" />
                <button type="submit">
                  <span>
                    <ArrowIcon />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ResourcesHeaderStyles>
  );
};
export const resourcesQuery = graphql`
  query HeaderQuery {
    BlogQuery: allSanityPost(
      limit: 4
      sort: { fields: publishedAt, order: DESC }
    ) {
      nodes {
        publishedAt
        mainImage {
          alt
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
        title
        slug {
          current
        }
        readingTimeInMinutes
        id
        authors {
          author {
            name
          }
        }
        excerpt
        categories {
          title
          slug {
            current
          }
        }
      }
    }
    AllQuery: allSanityPost(
      limit: 5
      skip: 1
      sort: { fields: publishedAt, order: DESC }
    ) {
      nodes {
        publishedAt
        mainImage {
          alt
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
        title
        slug {
          current
        }
        readingTimeInMinutes
        id
        authors {
          author {
            name
          }
        }
        excerpt
        categories {
          title
          slug {
            current
          }
        }
      }
    }
  }
`;
