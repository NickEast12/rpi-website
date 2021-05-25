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
    width: 90%;
    margin: var(--auto);
  }
`;
const PageBlogs = ({ Blogs }) => {
  console.log('🫐');
  return (
    <PageBlogsStyles>
      <h4>Introducing blogs</h4>
      <div className="blogs">
        {Blogs.map((blog) => (
          <SingleBlog key={blog.id} blog={blog} />
        ))}
      </div>
    </PageBlogsStyles>
  );
};

export default PageBlogs;
