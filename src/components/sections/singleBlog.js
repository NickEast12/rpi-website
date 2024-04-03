import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';
//* Local imports
import BookIcon from '../../svgs/open-book.svg';
import GetImage from '../functional/getImage';

const SingleBlogStyles = styled.article`
  width: 100%;
  margin-bottom: 2rem;
  border-bottom: solid 4px var(--background);
  padding-bottom: 1rem;
  text-align: left;
  transition: opacity 0.35s ease;
  &:hover,
  &:active {
    opacity: 1 !important;
  }
  .b-img {
    width: 100%;
    height: auto;
    position: relative;
    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
      max-height: 210px;
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
    margin: 0.5rem 0 0 0;
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
    .author {
      color: var(--background);
    }
  }
  .b-title {
    h5 {
      font-size: 1.85rem;
      margin: 0.5rem 0;
    }
  }
`;
const SingleBlog = ({ blog }) => {
  return (
    <SingleBlogStyles>
      <Link to={`/blog/${blog.slug.current}`}>
        <div className="b-img">
          {/* <GatsbyImage
            image={blog.mainImage.childImageSharp.gatsbyImageData}
            alt={blog.mainImage.alt} /> */}
            {blog.mainImage.asset && (
              <GetImage data={blog.mainImage.asset} alt={blog.mainImage.alt} />
            )}
          <div className="b-img__overlay">
            <p>{`${blog.readingTimeInMinutes} min read`}</p>
          </div>
        </div>
        <div className="b-meta">
          <span className="b-meta">
            <BookIcon />
            <p>Article</p>
            <p className="author">• {blog.authors[0].name}</p>
          </span>
        </div>
        <div className="b-title">
          <h5>{blog.title}</h5>
          <p>{blog.excerpt}</p>
        </div>
      </Link>
    </SingleBlogStyles>
  );
};

export default SingleBlog;
