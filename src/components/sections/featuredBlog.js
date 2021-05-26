import React from 'react';
import styled from 'styled-components';

const FeaturedBlogStyles = styled.section`
  width: 100%;
`;
const FeaturedBlog = () => {
  const i = true;
  return (
    <FeaturedBlogStyles>
      <div className="featured">
        <h1>Featured blogs</h1>
      </div>
    </FeaturedBlogStyles>
  );
};

export default FeaturedBlog;
