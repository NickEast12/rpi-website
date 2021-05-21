import React from 'react';
import styled from 'styled-components';
//* Local imports
import Illustration from '../../svgs/template-1.svg';

const UVPStyles = styled.section`
  width: 100%;
  padding: 3rem 0;
  .uvp {
    width: 90%;
    margin: var(--auto);
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
  }
`;
const UVP = () => {
  const i = true;
  return (
    <UVPStyles>
      <div className="uvp">
        <div className="uvp__text">
          <h6 className="sbt">Intro to section</h6>
          <h2>Section title</h2>
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
