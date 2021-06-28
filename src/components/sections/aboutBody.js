import React from 'react';
import styled from 'styled-components';
//* Local imports
import Illustration from '../../svgs/about-lower.svg';

const AboutBodyStyles = styled.section`
  width: 100%;
  padding-bottom: 3rem;
  @media only screen and (min-width: 1024px) {
    padding: 2rem 0 4rem 0;
  }
  .abody {
    width: 90%;
    margin: var(--auto);
    max-width: var(--maxWidth);
    &__img {
      width: 90%;
      margin: var(--auto);
    }
    &__text {
      margin-top: 2rem;
      h3 {
        margin: 0.25rem 0 0.5rem 0;
        font-size: 2.35rem;
        span {
          color: var(--newCyan);
          font-size: inherit;
        }
      }
      p {
        margin-bottom: 0.75rem;
      }
    }
    @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
      grid-template-areas: 'a b';
      &__text {
        grid-area: a;
      }
      &__img,
      &__text {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    @media only screen and (min-width: 1024px) {
      &__img {
        width: 80%;
        margin: var(--auto);
      }
    }
  }
`;
const AboutBody = () => {
  const i = true;
  return (
    <AboutBodyStyles>
      <div className="abody">
        <div className="abody__img">
          <Illustration />
        </div>
        <div className="abody__text">
          <h3>
            <span>23 years </span> of inspiring careers in digital
            transformation
          </h3>
          <p>
            Founded in 1988, our heritage in telecoms has evolved into talent
            solutions across multiple sectors. We understand the latest trends
            in technology and recruitment and challenge and lead the debate.
          </p>
          <p>
            We understand the latest trends in technology and recruitment,
            challenging and leading the debate.
          </p>
          <p>
            Our specialist recruiters deliver the people part of
            technology-enabled transformation, developing unparalleled networks
            within their chosen niche by investing in that community. Connecting
            people, identifying talent, supporting strategy, driving change and
            challenging culture, to advance transformational change for some of
            the world’s biggest businesses.
          </p>
        </div>
      </div>
    </AboutBodyStyles>
  );
};

export default AboutBody;
