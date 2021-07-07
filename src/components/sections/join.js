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
            Focused on leadership and technology recruitment, RPI sources the
            talent that ignites transformation for our clients.
          </p>
          <p>
            We have 8 defined specialisms: Leadership, Communications,
            Architecture, ERP, BI Data &amp; Analytics, Software Engineering and
            DevOps, Infrastructure and Cloud Services, and Cyber Security.
          </p>
          <p>
            Operating from offices across UK, Europe, Middle East, Asia, USA and
            ANZ &amp; Pacific we bring a very unique perspective to the global
            talent market – and a one-of-a-kind career experience to our people.
          </p>
          <p>
            We work as a collaborative organization, often working together
            globally to ensure we deliver maximum value for our clients. We
            value global mobility and actively encourage career development.
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
