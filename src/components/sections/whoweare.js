import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
//* Local imports
import Illustration from '../../svgs/who.svg';
import LearnMore from './learnMore';

const WhoweareStyles = styled.section`
  width: 100%;
  padding: 4rem 0;
  /* background-color: var(--darkBlue); */
  background-color: var(--background);
  @media only screen and (min-width: 414px) {
    padding: 5rem 0;
  }
  .wwa {
    max-width: var(--maxWidth);
    color: var(--offWhite);
    width: 90%;
    margin: var(--auto);

    &__text {
      text-align: center;
      @media only screen and (min-width: 768px) {
        text-align: left;
      }
      h6 {
        /* color: var(--offWhite); */
      }
      h3 {
        margin: 0.25rem 0;
        font-size: 2.35rem;
        color: var(--offWhite);
      }
      p {
        margin: 0.5rem 0;
        color: var(--offWhite);
      }
    }
    &__img {
      width: 90%;
      margin: 3rem auto 0 auto;
      @media only screen and (min-width: 600px) {
        display: flex;
        flex-direction: column;
      }
      @media only screen and (min-width: 768px) {
        width: 100%;
        margin: 0;
      }
      @media only screen and (min-width: 1024px) {
        width: 90%;
      }
      svg {
        width: 100%;
        height: auto;
      }
    }
    @media only screen and (min-width: 768px) {
      /* display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem; */
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
      &__text {
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
    }
  }
`;
const Whoweare = () => {
  const i = true;
  return (
    <WhoweareStyles>
      <div className="wwa">
        <div className="wwa__text">
          <h6 className="sbt">Who we are subtitle</h6>
          <h3>Who we are title</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            voluptate possimus pariatur perferendis dolore ab porro itaque
            incidunt consequuntur eaque? Magni exercitationem unde iste et.
          </p>
          <LearnMore />
        </div>
        <div className="wwa__img">
          <Illustration />
        </div>
      </div>
    </WhoweareStyles>
  );
};

export default Whoweare;
