import React from 'react';
import styled from 'styled-components';
//* Local imports
import Illustration from '../../svgs/uvp.svg';

const UVPStyles = styled.section`
  width: 100%;
  padding: 3rem 0;
  .uvp {
    width: 90%;
    margin: var(--auto);
    max-width: var(--maxWidth);
    &__text {
      h2 {
        margin: 0.5rem 0;
        font-size: 2.35rem;
      }
      p {
        margin: 0.5rem 0;
      }
    }
    &__img {
      margin: var(--auto);
      width: 80%;
      svg {
        margin-top: 1.5rem;
        width: 100%;
        height: auto;
      }
    }
    @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas: 'a b';
      /* display: flex;
      flex-direction: row-reverse;
      gap: 1rem;
      justify-content: center;
      align-items: center; */
      padding: 2rem 0;
      &__text {
        grid-area: b;
      }
      &__img {
        grid-area: a;

        svg {
          margin-top: 0;
        }
      }
    }
    @media only screen and (min-width: 1024px) {
      &__text {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    @media only screen and (min-width: 1280px) {
      &__img {
        width: 70%;
      }
    }
  }
`;
const UVP = () => {
  const i = true;
  return (
    <UVPStyles>
      <div className="uvp">
        <div className="uvp__text">
          <h6 className="sbt">Why RPI?</h6>
          <h2>UVP what makes us stand out from the competition?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            aliquam expedita adipisci quia itaque facilis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            aliquam expedita adipisci quia itaque facilis.
          </p>
        </div>
        <div className="uvp__img">
          <Illustration />
        </div>
      </div>
    </UVPStyles>
  );
};

export default UVP;
