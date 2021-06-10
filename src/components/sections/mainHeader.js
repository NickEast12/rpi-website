import React from 'react';
import styled from 'styled-components';
//* Local imports
import Illustration from '../../svgs/template-1.svg';

const MainHeaderStyles = styled.header`
  width: 100%;
  background-color: var(--offWhite);
  padding-bottom: 2rem;
  .head {
    width: 90%;
    margin: var(--auto);
    padding-top: 5rem;
    max-width: var(--maxWidth);
    &__title {
      h1 {
        font-size: 3rem;
        margin-top: 0.5rem;
      }
      p {
        margin: 0.85rem 0;
      }
      button {
        margin-top: 0.5rem;
        width: 100%;
        max-width: 200px;
      }
    }
    &__img {
      width: 90%;
      margin: 2.5rem auto;
      max-width: 450px;
      svg {
      }
    }
    @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
      &__title,
      &__img {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    @media only screen and (min-width: 1024px) {
      grid-template-columns: 52% 1fr;
      grid-gap: 2rem;

      &__title,
      &__img {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
`;
const MainHeader = () => {
  const i = true;
  return (
    <MainHeaderStyles>
      <div className="head">
        <div className="head__title">
          <h6 className="sbt">Specialisms</h6>
          <h1>Specialisms header title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            facilis quo deleniti. Doloribus, reiciendis dolorum.
          </p>
          <button type="button" className="btn btn--main">
            <span>Get started</span>
          </button>
        </div>
        <div className="head__img">
          <Illustration />
        </div>
      </div>
    </MainHeaderStyles>
  );
};

export default MainHeader;
