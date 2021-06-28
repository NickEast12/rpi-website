import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
//* Local imports
import Illustration from '../../svgs/template-1.svg';

const AboutUsHeaderStyles = styled.header`
  width: 100%;
  background-color: var(--offWhite);
  padding: 5rem 0 3rem 0;
  @media only screen and (min-width: 1024px) {
    padding: 6rem 0 4rem 0;
  }
  .a-h {
    max-width: var(--maxWidth);
    width: 90%;
    margin: var(--auto);
    &__left {
      h1 {
        margin: 0.5rem 0;
        font-size: 2.25rem;
      }
      button {
        width: 200px;
        margin-top: 1rem;
      }
    }
    &__right {
      margin-top: 2.5rem;
      /* max-width: 450px; */
    }
    @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
      &__left,
      &__right {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    @media only screen and (min-width: 1024px) {
      grid-gap: 2rem;
      padding: 1.5rem 0;
      &__right {
        width: 80%;
        margin: var(--auto);
      }
    }
  }
`;
const MainHeader = ({ page, title, text, children }) => {
  const i = true;
  return (
    <AboutUsHeaderStyles>
      <div className="a-h">
        <div className="a-h__left">
          <h6 className="sbt">{page}</h6>
          <h1>{title}</h1>
          <p>{text}</p>
          <button type="button" className="btn btn--main">
            <Link to="/contact">
              <span>Get started</span>
            </Link>
          </button>
        </div>
        <div className="a-h__right">{children}</div>
      </div>
    </AboutUsHeaderStyles>
  );
};

export default MainHeader;
