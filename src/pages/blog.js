import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
//* Local imports
import Layout from '../components/Layout';
import CTA from '../components/CTA';
import ArrowIcon from '../svgs/right-arrow.svg';
import BookIcon from '../svgs/open-book.svg';
import SingleBlog from '../components/sections/singleBlog';
import { EmailSignUp } from '../components/EmailSignUp';

const Blogsheader = styled.header`
  width: 100%;
  .bheader {
    padding: 6rem 0 0 0;
    width: 90%;
    margin: var(--auto);
    max-width: var(--maxWidth);
    span {
      display: inline-block;
      > div {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition: transform 0.35s ease;
        &:hover {
          transform: translateX(-10%);
        }
      }
      span {
        display: flex;
        svg {
          width: 20px;
          height: 20px;
          transform: rotate(180deg);
          fill: var(--newCyan);
        }
      }
      p {
        font-weight: 700;
        padding-left: 5px;
        color: var(--background);
      }
    }
    h1 {
      margin-top: 0.5rem;
      color: var(--background);
    }
  }
`;
const BlogBodyStyles = styled.div`
  width: 100%;
  .b--wrappper {
    width: 90%;
    margin: var(--auto);
    padding: 2rem 0;
    max-width: var(--maxWidth);

    @media only screen and (min-width: 600px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1.5rem;
    }
    @media only screen and (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      &:hover {
        article {
          opacity: 0.5;
        }
      }
    }
  }
`;
const Blogs = ({ data }) => {
  const allBlog = data.BlogQuery.nodes;

  return (
    <Layout>
      <Blogsheader>
        <div className="bheader">
          <Link to="/resources">
            <span>
              <div>
                <span>
                  <ArrowIcon />
                </span>
                <p>Back to resources</p>
              </div>
            </span>
          </Link>
          <h1>RPI Blogs</h1>
        </div>
      </Blogsheader>
      <BlogBodyStyles>
        <div className="b--wrappper">
          {allBlog.map((blog) => (
            <SingleBlog key={blog.title} blog={blog} />
          ))}
        </div>
      </BlogBodyStyles>
      <EmailSignUp />
    </Layout>
  );
};

export default Blogs;

const LargeBlogStyles = styled.article`
  width: 100%;
  padding-bottom: 2rem;
  .largeblog {
    max-width: var(--maxWidth);
    padding: 3rem 0 1rem 0;
    width: 90%;
    margin: var(--auto);
    &__img {
      width: 100%;
      height: auto;
      position: relative;
      .overlay {
        position: absolute;
        bottom: 0.5rem;
        right: 0.5rem;
        background-color: var(--background);
        border-radius: 1.5px;
        padding: 0.25rem 0.5rem;
        p {
          color: var(--offWhite);
          font-weight: 600;
        }
      }
    }
    &__content {
      &__date {
        display: flex;
        margin: 1rem 0;
        justify-content: space-between;
        .type {
          display: flex;
          align-self: center;
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
        .date {
          font-weight: 800;
          font-size: 0.9rem;
        }
      }
      h3 {
      }
      > p {
        margin-top: 0.75rem;
      }
      button {
        margin-top: 1rem;
        padding: 0.5rem;
        max-width: 150px;
      }
    }
    @media only screen and (min-width: 600px) {
      /* display: grid;
      grid-gap: 2rem;
      grid-template-columns: 50% 1fr;
      position: relative; */
      &__img {
        width: 100%;
        height: 100%;
        .gatsby-image-wrapper {
          width: 100%;
          height: 100%;
        }
      }
      &__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    @media only screen and (min-width: 1024px) {
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: 50% 1fr;
      position: relative;
      &__img {
        width: 100%;
        height: 100%;
        .gatsby-image-wrapper {
          width: 100%;
          height: 100%;
        }
      }
      &__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
`;
const LargeBlog = ({ blog }) => (
  <LargeBlogStyles>
    <Link to={`/blog/${blog.slug.current}`}>
      <div className="largeblog">
        <div className="largeblog__img">
          <Img fluid={blog.mainImage.asset.fluid} alt={blog.mainImage.alt} />
          <div className="overlay">
            <p>{`${blog.readingTimeInMinutes} min read`}</p>
          </div>
        </div>
        <div className="largeblog__content">
          <section className="largeblog__content__date">
            <span className="type">
              <BookIcon /> <p>Article</p>
            </span>
            <span className="date">{blog.publishedAt}</span>
          </section>
          <h3>{blog.title}</h3>
          <p>{blog.excerpt}</p>
        </div>
      </div>
    </Link>
  </LargeBlogStyles>
);

export const blogQuery = graphql`
  query AllBlogQuery {
    BlogQuery: allSanityPost(sort: { fields: publishedAt, order: DESC }) {
      nodes {
        publishedAt(formatString: "MMM DD YYYY")
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
