import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from "gatsby-plugin-image";
import PortableText from '@sanity/block-content-to-react';
import urlBuilder from '@sanity/image-url';
import getYouTubeId from 'get-youtube-id';
import { window } from 'browser-monads';
import YouTube from 'react-youtube';
import {
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton,
  FacebookShareButton,
} from 'react-share';
//* Local imports
import CTA from '../components/CTA';
import Layout from '../components/Layout';
import BookIcon from '../svgs/open-book.svg';
import FacebookIcon from '../svgs/facebook.svg';
import TwitterIcon from '../svgs/twitter.svg';
import LinkedInIcon from '../svgs/linkedin.svg';
import EmailIcon from '../svgs/paper-plane.svg';
import RelatedBlogs from '../components/sections/relatedBlogs';
import SEO from '../components/functional/SEO';
import LogoIcon from '../svgs/favicon.svg';
import GetImage from '../components/functional/getImage';

const BlogStyles = styled.article`
  width: 100%;
  .bb {
    width: 90%;
    margin: var(--auto);
    padding: 2rem 0;
    max-width: 1100px;
    &__left {
      color: var(--background);
      h2 {
        font-size: 1.25rem;
        line-height: 1.5;
      }
      /* h3 {
        font-size: 1.2rem;
      } */
      h4 {
        font-size: 1.3rem;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 1rem 0;
      }

      p {
        line-height: 1.45;
        font-size: 1.1rem;
        margin: 0 0 1.2rem 0;
      }
      ul {
        list-style: inside;
      }
      ol {
        list-style-position: inside;
      }
      li {
        margin: 0.5rem 0;
        line-height: 1.45;
        font-size: 1.1rem;
      }
      a {
        color: var(--newCyan);
        font-weight: 800;
      }
      .image {
        img {
          width: 100%;
          height: auto;
        }
      }
      iframe {
        width: 100%;
      }
    }
    &__right {
      .author {
        background-color: var(--offWhite);
        padding: 1rem;
        display: flex;
        align-items: center;
        .gatsby-image-wrapper,
        svg {
          width: 80px;
          height: 80px;
          min-height: 80px;
          min-width: 80px;
          border-radius: 100%;
          border: solid 4px var(--newCyan);
        }
        svg {
          padding: 0.5rem;
        }
        section {
          padding-left: 10px;
          padding-top: 2px;
          p {
            font-size: 0.85rem;
          }
        }
      }
      .share {
        margin-top: 1rem;
        padding-top: 0.5rem;
        border-top: solid 1px rgb(238, 238, 238);
        display: flex;
        justify-content: space-between;
        p {
          font-weight: 800;
        }
        div {
          display: flex;
          gap: 1rem;
          svg {
            width: 18px;
            height: 18px;
            fill: var(--newBlue);
          }
        }
      }
    }
    @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 35%;
      grid-gap: 2rem;
      &__right {
        position: sticky;
        top: 5rem;
        width: 100%;
        height: 5rem;
      }
    }
    @media only screen and (min-width: 1024px) {
      grid-template-columns: 1fr 30%;
    }
  }
`;

const urlFor = (source) =>
  urlBuilder({
    projectId: process.env.GATSBY_SANITY_PROJECT_ID,
    dataset: 'production',
  }).image(source);

const Blog = ({ data }) => {
  const blog = data.Blog;
  const relatedData = data.Related;
  // console.log(blog.authors[0].image.asset)
  const serializers = {
    types: {
      mainImage: (props) => (
        <div className="image">
          <img
            src={`${urlFor(props.node.asset)
              // .width('100%')
              // .height('100%')
              .fit('crop')
              .auto('format')}`}
            alt={`${blog.title} | RPI`}
          />
        </div>
      ),
      videoEmbed: ({ node }) => {
        const { url } = node;
        const id = getYouTubeId(url);
        return <YouTube videoId={id} className="video" />;
      },
    },
  };
  return (
    <Layout>
      <SEO
        title={`${blog.title} | RPI`}
        description={blog.excerpt}
        img={blog.mainImage.asset.url}
      />
      <BlogHeader blog={blog} />
      <BlogStyles>
        <div className="bb">
          <div className="bb__left">
            <PortableText blocks={blog._rawBody} serializers={serializers} />
          </div>
          <aside className="bb__right">
            <div className="author">
              {blog.authors[0].image ? (
                // <GatsbyImage image={blog.authors[0].image.childImageSharp.gatsbyImageData} />
                <GetImage data={blog.authors[0].image.asset} />
              ) : (
                <LogoIcon />
              )}

              <section>
                <h6>{blog.authors[0].name}</h6>
                <p>{blog.authors[0].position}</p>
              </section>
            </div>
            <div className="share">
              <p>Share this: </p>
              <div>
                <EmailShareButton
                  url={window.location.href}
                  subject={blog.title}
                >
                  <div className="share--box email">
                    <EmailIcon />
                  </div>
                </EmailShareButton>
                <TwitterShareButton
                  url={window.location.href}
                  title={blog.title}
                >
                  <div className="share--box twitter">
                    <TwitterIcon />
                  </div>
                </TwitterShareButton>
                <LinkedinShareButton
                  url={window.location.href}
                  summary={blog.excerpt}
                  source="UCtel Blog"
                >
                  <div className="share--box linkedin">
                    <LinkedInIcon />
                  </div>
                </LinkedinShareButton>
                <FacebookShareButton
                  url={window.location.href}
                  quote={blog.title}
                >
                  <div className="share--box facebook">
                    <FacebookIcon />
                  </div>
                </FacebookShareButton>
              </div>
            </div>
          </aside>
        </div>
      </BlogStyles>
      <RelatedBlogs data={relatedData} />
      <CTA />
    </Layout>
  );
};

export default Blog;

const BlogHeaderStyles = styled.header`
  width: 100%;
  padding-top: 4.25rem;
  @media only screen and (min-width: 1024px) {
    padding-top: 4.5rem;
  }
  .b-header {
    width: 100%;
    padding: 7.5rem 0 3rem 0;
    position: relative;
    max-width: var(--maxWidth);
    margin: var(--auto);

    &__img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -2;
      .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
    }
    &__text {
      background-color: var(--offWhite);
      width: 90%;
      margin: 0 auto;
      border-radius: 4.5px;
      padding: 2rem 1.25rem;
      max-width: var(--maxWidth);
      &__meta {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        span {
          display: flex;
          align-self: center;
          align-items: center;
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
            font-size: 0.85rem;
          }
        }
        > p {
          font-weight: 800;
          font-size: 0.9rem;
          line-height: 1;
          padding-left: 10px;
        }
      }
      h1 {
        font-size: 2.25rem;
        margin-top: 0.5rem;
      }
      &__time {
        margin-top: 1rem;
        span {
          background-color: var(--background);
          padding: 0.4rem 0.5rem;
          color: var(--offWhite);
          font-weight: 700;
        }
      }
      @media only screen and (min-width: 768px) {
        width: 55%;
        margin: 0 auto 0 calc(0% + 5%);
      }
      @media only screen and (min-width: 1280px) {
        width: 55%;
        margin: 0 auto 0 calc(0% + 4%);
      }
    }
    @media only screen and (min-width: 1024px) {
      padding: 14rem 0 2rem 0;
    }
  }
`;
const BlogHeader = ({ blog }) => (
  <BlogHeaderStyles>
    <div className="b-header">
      <div className="b-header__img">
        {/* <GatsbyImage
          image={blog.mainImage.childImageSharp.gatsbyImageData}
          alt={blog.mainImage.alt} /> */}
          <GetImage data={blog.mainImage.asset} alt={blog.mainImage.alt} />
      </div>
      <div className="b-header__text">
        <div className="b-header__text__meta">
          <span>
            <BookIcon />
            <p>Article</p>
          </span>
          {blog.publishedAt && (
            <p>{`• ${blog.publishedAt}`}</p>
          )}
        </div>
        <h1>{blog.title}</h1>
        <div className="b-header__text__time">
          <p>
            <span>{`${blog.readingTimeInMinutes} min read`}</span>
          </p>
        </div>
      </div>
    </div>
  </BlogHeaderStyles>
);

export const query = graphql`
  query SingleBlogQuery($slug: String!) {
    Blog: sanityPost(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
      publishedAt(formatString: "MMM DD YYYY")
      readingTimeInMinutes
      id
      excerpt
      categories {
        title
      }
      _rawBody
      authors {
        name
        id
        position
        image {
          alt
          asset {
            gatsbyImageData(formats: AUTO, width: 250) 
          }
        }
      }
      mainImage {
        alt
        asset {
          gatsbyImageData(formats: AUTO, width: 1500)
          url
        }
      }
    }
    Related: allSanityPost(
      filter: { slug: { current: { ne: $slug } } }
      limit: 3
    ) {
      nodes {
        title
        slug {
          current
        }
        publishedAt(formatString: "MMM DD YYYY")
        readingTimeInMinutes
        id
        excerpt
        categories {
          title
        }
        authors {
          name
          id
          image {
            alt
            asset {
              gatsbyImageData(formats: AUTO, width: 100)
            }
          }
        }
        mainImage {
          asset {
            gatsbyImageData(formats: AUTO, width: 410)
          }
        }
      }
    }
  }
`;
