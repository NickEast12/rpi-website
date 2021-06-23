import React from 'react';
import styled from 'styled-components';
//* Local imports
import SingleBlog from './singleBlog';

const PageBlogsStyles = styled.section`
  width: 100%;
  padding: 0 0 2rem 0;
  h4 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .blogs {
    max-width: var(--maxWidth);
    width: 85%;
    margin: var(--auto);
    position: relative;
    @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1rem;
    }
    @media only screen and (min-width: 1280px) {
      grid-gap: 1.5rem;
    }
    &:hover article {
      opacity: 0.6;
    }
  }
`;
const PageBlogs = ({ Blogs }) => {
  const i = true;
  return (
    <PageBlogsStyles>
      <h4>Introducing blogs</h4>
      <div className="blogs">
        {Blogs.map((blog) => (
          <SingleBlog key={blog.id} blog={blog} />
        ))}
        <div className="blogs--cover" />
      </div>
    </PageBlogsStyles>
  );
};

export default PageBlogs;
