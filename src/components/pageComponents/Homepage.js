import React from 'react';
import styled from 'styled-components';
// local imports
import TreeIcon from '../icons/TreeIcon';

const HomepageStyled = styled.section`
  width: 100%;
  .homepage {
    width: 95%;
    margin: 0 auto;
    padding: 3rem 0;
    &--icon {
      padding: 3rem 0;
      svg {
        width: 100%;
      }
    }
    &--content {
      color: #fff;
      width: 95%;
      margin: 0 auto;
      h1 {
        span {
          font-weight: 700;
          color: var(--mainColour);
        }
      }

      &--btns {
        margin: 1.5rem auto 1.5rem 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        button {
          width: 48%;
          margin-bottom: 0.85rem;
          span {
            color: #fff;
          }
        }
      }
      h3 {
        color: var(--mainColour);
        font-weight: 700;
        span {
          color: var(--yellow);
        }
      }
    }
  }
`;
const Homepage = () => {
  const i = true;
  return (
    <HomepageStyled>
      <div className="homepage">
        <div className="homepage--icon">
          <TreeIcon />
        </div>
        <div className="homepage--content">
          <h1>
            Marking that <span>transforms</span> your business
          </h1>
          <div className="homepage--content--btns">
            <button type="button" className="btn btn--main">
              <span>Find out more</span>
            </button>
            <button type="button" className="btn btn--alt">
              <span>Contact us</span>
            </button>
          </div>
          <h3>
            Stand <span>out</span> from the crowd
          </h3>
        </div>
      </div>
    </HomepageStyled>
  );
};

export default Homepage;
