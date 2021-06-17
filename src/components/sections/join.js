import React from 'react';
import styled from 'styled-components';
//* Local imports
import Illustration from '../../svgs/uvp.svg';

const JoinStyles = styled.section`
  width: 100%;
  padding: 3rem 0;
  .join {
    width: 90%;
    margin: var(--auto);
    max-width: var(--maxWidth);

    &__left {
      h2 {
        margin: 0.5rem 0;
        font-size: 2.35rem;
      }
      p {
        margin-bottom: 0.5rem;
      }
    }
    &__right {
      padding-top: 1.5rem;
      width: 90%;
      margin: var(--auto);
    }
    @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
      grid-template-areas: 'a b';
      &__right {
        grid-area: a;
      }
      &__left,
      &__right {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    @media only screen and (min-width: 1024px) {
      &__right {
        width: 70%;
        margin: var(--auto);
      }
    }
  }
`;
const Join = () => {
  const i = true;
  return (
    <JoinStyles>
      <div className="join">
        <div className="join__left">
          <h2>Our areas of expertise</h2>
          <p>
            With a focus on emerging technologies, we specialise in sourcing the
            leaders and skilled professionals to drive transformation
            incorporating 5G, AI, RPA, cyber security and all things digital.
            Our insight enables our clients around the world to embrace digital
            transformation and build solutions for a better future.
          </p>
          <p>
            Operating from offices in London, Singapore, Hong Kong, Dubai, Kuala
            Lumpur and Auckland, we bring a unique perspective to the global
            talent market – and a one-of-a-kind career experience to our team
            members.
          </p>
          <p>
            It’s a dynamic, international environment – fast-paced,
            target-driven and ultimately rewarding.
          </p>
        </div>
        <div className="join__right">
          <Illustration />
        </div>
      </div>
    </JoinStyles>
  );
};

export default Join;
