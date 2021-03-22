import React from 'react';
import styled from 'styled-components';

const ContentStyles = styled.section`
  width: 100%;
  background: #fff;
  padding: 2rem 0 0 0;
  .content {
    &--img {
    }
    &--wrapper {
      background: var(--yellow);
      padding: 3rem 0;
      &--content {
        color: var(--backgroundColour);
        width: 90%;
        margin: 0 auto;
        h3 {
          margin-bottom: 1.5rem;
          span {
            color: var(--accentColour);
            font-weight: 700;
          }
        }
        p {
          font-size: var(--text);
        }
        &--btn {
          width: 50%;
          margin-top: 1.5rem;
          button {
            background: var(--accentColour);
            border: none;
          }
        }
      }
    }
  }
`;
const Content = () => {
  const i = true;
  return (
    <ContentStyles>
      <div className="content">
        <div className="content--img" />
        <div className="content--wrapper">
          <div className="content--wrapper--content">
            <h3>
              There is power in <span>content.</span> We know how to unlock it
            </h3>
            <p>
              Our content creation and strategy are designed to engage, inspire
              and influence your audience – with measurable results.
            </p>
            <div className="content--wrapper--content--btn">
              <button type="button" className="btn">
                <span>Find out more</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </ContentStyles>
  );
};

export default Content;
