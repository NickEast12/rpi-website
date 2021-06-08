import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
//* Local imports
import BookIcon from '../../svgs/open-book.svg';

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
`;
const SingleBlog = ({ blog }) => {
  const colors = ['#923879', 'rgb(0, 54, 80)', '#48b481', 'rgb(247, 173, 79)'];
  const num = Math.floor(Math.random() * 4);
  const pick = colors[num];
  return (
    <SingleBlogStyles style={{ borderBottom: `${pick} 4px solid` }}>
      <Link to="/">
        <div className="b-img">
          <Img fluid={blog.mainImage.asset.fluid} alt={blog.mainImage.alt} />
          <div className="b-img__overlay">
            <p>{`${blog.readingTimeInMinutes} min read`}</p>
          </div>
        </div>
        <div className="b-meta">
          <p>{`${blog.categories[0].title}`}</p>
          <p>{`• ${blog.authors[0].author.name}`}</p>
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
