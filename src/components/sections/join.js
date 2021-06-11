import React from 'react';
import styled from 'styled-components';
//* Local imports
import Illustration from '../../svgs/template-1.svg';

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
          <h6 className="sbt">Intro</h6>
          <h2>Join our team subtitle</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            rerum doloremque sunt quaerat possimus voluptates tempora a ratione
            adipisci odio.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, labore
            aut natus nemo quod ipsa rem et dolorum asperiores nam!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab,
            molestiae cupiditate unde assumenda ad nesciunt.
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
