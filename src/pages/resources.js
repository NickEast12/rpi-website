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
    max-width: var(--maxWidth);
    @media only screen and (min-width: 600px) {
      padding-bottom: 4rem;
    }
    h1 {
      span {
        color: var(--mainColour);
        font-size: inherit;
      }
      @media only screen and (min-width: 600px) {
        padding: 1rem 0;
      }
    }
    &__wrapper {
      margin-top: 1.5rem;
      &__left {
        cursor: pointer;
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
          margin: 1rem 0 0 0;
          display: flex;
          svg {
            width: 20px;
            height: 20px;
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
        .b-title {
          h5 {
            font-size: 1.85rem;
            margin: 0.5rem 0;
          }
        }
        @media only screen and (min-width: 600px) {
          position: relative;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          will-change: box-shadow;
          transition: box-shadow 0.35s ease;
          &:hover {
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 10px;
          }
          .b-img {
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 0;
            position: absolute;
            &__overlay {
              top: 1rem;
              left: 1rem;
              right: inherit;
              bottom: inherit;
            }
          }
          .b--img--wrapper {
            position: absolute;
            z-index: 2;
            background-color: white;
            border-radius: 4.5px;
            padding: 0.7rem 1rem;
            width: 80%;
            top: 4rem;
            left: 1rem;
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
              height: 20px;
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
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          border-radius: 4.5px;
          h5 {
          }
          form {
            display: flex;
            margin-top: 1rem;
            input {
              padding: 0.75rem;
              border: none;
              border-radius: 0;
              background-color: var(--background);
              color: var(--white);
              &::placeholder {
                color: var(--white);
              }
              @media only screen and (min-width: 600px) {
                width: 100%;
              }
            }
            button {
              cursor: pointer;
              padding: 0.75rem;
              border: none;
              width: 100%;
              background-color: var(--mainColour);
              span {
                svg {
                  width: 15px;
                  fill: var(--offWhite);
                }
              }
              @media only screen and (min-width: 600px) {
                width: 30%;
              }
            }
          }
        }
      }
      @media only screen and (min-width: 600px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        &__right {
          margin-top: 0;
        }
      }
    }
  }
`;
const ResourcesHeader = ({ blogs }) => {
  const [x, y, z, i] = blogs;
  const secondary = [];
  secondary.push(y, z, i);
  return (
    <ResourcesHeaderStyles>
      <div className="resources">
        <h1>
          The latest from <span>RPI</span>
        </h1>
        <div className="resources__wrapper">
          <div className="resources__wrapper__left">
            <Link to={`/blog/${x.slug.current}`}>
              <div className="b-img">
                <Img fluid={x.mainImage.asset.fluid} alt={x.mainImage.alt} />
                <div className="b-img__overlay">
                  <p>{`${x.readingTimeInMinutes} min read`}</p>
                </div>
              </div>
              <div className="b--img--wrapper">
                <span className="b-meta">
                  <BookIcon />
                  <p>Article</p>
                </span>
                <div className="b-title">
                  <h3>{x.title}</h3>
                  <p>{x.excerpt}</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="resources__wrapper__right">
            <h4>Featured articles</h4>
            {secondary.map((blog) => (
              <Link to={`/blog/${blog.slug.current}`} key={blog.title}>
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
