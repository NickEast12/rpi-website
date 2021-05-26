import React from 'react';
import styled from 'styled-components';
import SingleBlog from './singleBlog';

const RelatedBlogsStyles = styled.section`
  width: 100%;
  .related {
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0;
    h4 {
      text-align: center;
    }
    &__wrapper {
      margin-top: 2rem;
    }
  }
`;
const RelatedBlogs = ({ data }) => {
  const relatedBlogs = data.nodes;
  return (
    <RelatedBlogsStyles>
      <div className={relatedBlogs.length === 0 || null ? 'empty' : 'related'}>
        <h4>Related Articles</h4>
        <div className="related__wrapper">
          {relatedBlogs.map((e) => (
            <SingleBlog key={e.id} blog={e} />
          ))}
        </div>
      </div>
    </RelatedBlogsStyles>
  );
};

export default RelatedBlogs;
