import React from 'react';
import styled from 'styled-components';
//* Local imports
import Illustration from '../../svgs/diversity.svg';

const DiversityStyles = styled.section`
  width: 100%;
  padding: 2rem 0;
  @media only screen and (min-width: 768px) {
    padding: 3rem 0 1rem 0;
  }
  .diversity {
    width: 90%;
    margin: var(--auto);
    max-width: var(--maxWidth);

    &__left {
      width: 90%;
      margin: var(--auto);
    }
    &__right {
      text-align: center;
      margin-top: 2.5rem;
      h4 {
        font-size: 2.35rem;
        margin: 0.25rem 0 0.5rem 0;
      }
    }
    @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      &__left,
      &__right {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      &__left {
        width: 100%;
        padding: 2rem;
        svg {
          width: 100%;
          height: 100%;
          max-width: 450px;
        }
      }
      &__right {
        text-align: left;
        margin-top: 0;
        h4,
        p {
        }
      }
    }
    @media only screen and (min-width: 1024px) {
      display: grid;
      grid-template-columns: 45% 1fr;
      grid-gap: 1rem;
      grid-template-areas: 'a b';
      &__left {
        width: 100%;
        margin: var(--auto);
      }
      &__right {
      }
    }
    @media only screen and (min-width: 1280px) {
      padding-bottom: 2rem;
    }
  }
`;
const Diversity = () => {
  const i = true;
  return (
    <DiversityStyles>
      <div className="diversity">
        <div className="diversity__left">
          <Illustration />
        </div>
        <div className="diversity__right">
          <h4>Diversity</h4>
          <p>
            At RPI, diversity, equity, and inclusion are at the core of who we
            are. Our commitment to these values is unwavering – across all of
            our work around the world. They are central to our mission and to
            our impact. We know that having varied perspectives helps generate
            better ideas to solve the complex problems of a changing—and
            increasingly diverse—world.
          </p>
        </div>
      </div>
    </DiversityStyles>
  );
};

export default Diversity;
