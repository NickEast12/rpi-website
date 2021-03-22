import React from 'react';
import styled from 'styled-components';

const SocialMediaStyles = styled.section`
  width: 100%;
  padding: 3rem 0;
  .media {
    width: 90%;
    margin: 0 auto;
    color: #fff;

    &--img {
    }
    &--wrapper {
      h3 {
        margin-bottom: 1.5rem;
        span {
          color: var(--yellow);
          font-weight: 700;
        }
      }
      p {
      }
      &--btn {
        width: 50%;
        margin-top: 1.5rem;
        button {
          background: var(--yellow);
          border: none;
          span {
            color: var(--backgroundColour);
          }
        }
      }
    }
  }
`;

const SocialMedia = () => {
  const i = true;
  return (
    <SocialMediaStyles>
      <div className="media">
        <div className="media--img" />
        <div className="media--wrapper">
          <h3>
            <span>Social media</span> connects with your customers
          </h3>
          <p>
            Join the online conversation, build your brand and unlock new
            relationships.
          </p>
          <div className="media--wrapper--btn">
            <button type="button" className="btn">
              <span>Find out more</span>
            </button>
          </div>
        </div>
      </div>
    </SocialMediaStyles>
  );
};

export default SocialMedia;
