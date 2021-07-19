import React from 'react';
import styled from 'styled-components';
import SingleBlog from './singleBlog';

const RelatedBlogsStyles = styled.section`
  width: 100%;
  .related {
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0;
    max-width: var(--maxWidth);
    h4 {
      text-align: center;
    }
    &__wrapper {
      margin-top: 2rem;
      @media only screen and (min-width: 600px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 0.5rem;
      }
      @media only screen and (min-width: 768px) {
        grid-gap: 1rem;
        grid-template-columns: repeat(3, 1fr);
        &:hover {
          article {
            opacity: 0.5;
          }
        }
      }
    }
  }
`;
const RelatedBlogs = ({ data }) => {
  const relatedBlogs = data.nodes;
  console.log(relatedBlogs);
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
