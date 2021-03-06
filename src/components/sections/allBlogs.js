import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
//* Local Imports
import SingleBlog from './singleBlog';

const AllBlogsStyles = styled.section`
  width: 100%;
  .allblogs {
    width: 90%;
    padding: 1rem 0 2rem 0;
    margin: var(--auto);
    text-align: center;
    max-width: var(--maxWidth);
    h2 {
      text-align: center;
      margin-bottom: 1.25rem;
    }
    > a {
      span {
        cursor: pointer;
        margin: var(--auto);
        text-align: center;
        margin-top: 1rem;
        color: var(--offWhite);
        font-weight: 700;
        padding: 0.25rem 0.5rem;
        background-color: var(--background);
      }
    }
    &__wrapper {
      margin-top: 2rem;
      @media only screen and (min-width: 600px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
        &:hover {
          article {
            opacity: 0.5;
          }
        }
      }
    }
  }
`;
const AllBlogs = ({ blogs }) => (
  <AllBlogsStyles>
    <div className="allblogs">
      <h2>All Blogs</h2>
      <Link to="/blog">
        <span>See all blogs</span>
      </Link>
      <div className="allblogs__wrapper">
        {blogs.map((blog) => (
          <SingleBlog key={blog.title} blog={blog} />
        ))}
      </div>
    </div>
  </AllBlogsStyles>
);

export default AllBlogs;
