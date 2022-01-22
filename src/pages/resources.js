import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
//* Local imports
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import CTA from '../components/CTA';
import BookIcon from '../svgs/open-book.svg';
import ArrowIcon from '../svgs/right-arrow.svg';
import AllBlogs from '../components/sections/allBlogs';
import SEO from '../components/functional/SEO';
import DownloadLinks from '../components/resources/downloadLinks';

const WidgetWrapper = styled.section`
  width: 100%;
  padding: 2rem 0;
  h4 {
    text-align: center;
    padding-bottom: 0.5rem;
  }
  > div {
    border-top: solid 4px var(--background);
    max-width: var(--maxWidth);
    margin: var(--auto);
  }
`;

const Resources = ({ data }) => {
  const headerData = data.BlogQuery.nodes;
  const allBlogs = data.AllQuery.nodes;
  const downloads = data.Downloads.nodes;
  return (
    <Layout>
      <SEO
        title="Discover News &amp; Articles from our Thought Leaders | RPI"
        description="Take a look at what we've been up to at RPI and what's happening within the industry as we keep up with the latest news."
      />
      <Helmet>
        <script
          src="https://www.sociablekit.com/app/embed/linkedin-page-post/widget.js"
          async
          defer
        />
      </Helmet>
      <ResourcesHeader blogs={headerData} downloads={downloads} />
      <AllBlogs blogs={allBlogs} />
      <WidgetWrapper>
        <h4>Recent Posts</h4>
        <div className="sk-ww-linkedin-page-post" data-embed-id="54509" />
      </WidgetWrapper>
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
        color: var(--newCyan);
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
        background-color: #fff;

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

        .b--img--wrapper {
          padding: 0.75rem;
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
            h3 {
              font-size: 1.85rem;
              margin: 0.5rem 0;
            }
          }
        }

        @media only screen and (min-width: 768px) {
          position: relative;
          background-color: transparent;
          a {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 1rem;
            .b-img {
              width: 100%;
              height: 100%;

              &__overlay {
                top: 1rem;
                left: 1rem;
                right: inherit;
                bottom: inherit;
              }
            }
            .b--img--wrapper {
              padding: 0;
              section {
                background-color: #fff;
                padding: 1rem;
                border-radius: 4.5px;
                box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
              }
              background-color: none;
              width: 90%;
              display: flex;
              flex-direction: column;
              justify-content: center;

              padding-top: 0;
              .b-meta {
                margin-top: 0;
              }
            }
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
              background-color: var(--newCyan);
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
      /* @media only screen and (min-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        &__right {
          margin-top: 0;
        }
      } */
    }
  }
`;
const ResourcesHeader = ({ blogs, downloads }) => {
  const [x, y, z] = blogs;
  const secondary = [];
  secondary.push(y, z);
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
                <section>
                  <span className="b-meta">
                    <BookIcon />
                    <p>Article</p>
                  </span>
                  <div className="b-title">
                    <h3>{x.title}</h3>
                    <p>{x.excerpt}</p>
                  </div>
                </section>
              </div>
            </Link>
          </div>
        </div>
        <DownloadLinks data={downloads} />
      </div>
    </ResourcesHeaderStyles>
  );
};
export const resourcesQuery = graphql`
  query HeaderQuery {
    Downloads: allDownloadsJson {
      nodes {
        title
        url
      }
    }
    BlogQuery: allSanityPost(
      limit: 3
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
          name
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
          name
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
