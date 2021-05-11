import React from 'react';
import styled from 'styled-components';

const BlogStyles = styled.section`
  width: 100%;
  padding: 3rem 0;
  .blog {
    max-width: var(--maxWidth);
    width: 90%;
    margin: 0 auto;
    text-align: center;
    h4 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
  }
`;
const Blog = () => (
  <BlogStyles>
    <div className="blog">
      <h4>Blog</h4>
      <p>Coming soon!</p>
    </div>
  </BlogStyles>
);

export default Blog;
