import React from 'react';
import styled from 'styled-components';
//* Local imports
import RPIElementIcon from '../../svgs/logo-element.svg';
import TemplateSVG from '../../svgs/template.svg';

const HeroStyles = styled.header`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: var(--offWhite);
  .hero {
    width: 90%;
    margin: 0 auto;
    padding: 5.5rem 0 0 0;
    &__title {
      h1 {
        color: var(--background);
        font-size: 2.5rem;
        line-height: 1.2;
        font-weight: 600;
        span {
          font-size: inherit;
          background-image: linear-gradient(
            to top,
            rgb(190, 26, 38),
            rgba(152, 30, 30, 0.85)
          );
          background-position: 0px 90%;
          background-repeat: repeat-x;
          background-size: 10% 10%;
          border-bottom: 0px;
          color: inherit;
        }
      }
      p {
        margin: 0.85rem 0;
        color: var(--background);
      }
      &__btn {
        margin-top: 1.25rem;
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        button {
          margin-bottom: 0.75rem;
          width: 100%;
        }
      }
    }
    &__img {
      padding: 2rem 0;
      svg {
        height: auto;
        width: 100%;
        .st0 {
          fill: none;
        }
      }
    }
  }
`;
const Hero = () => {
  const i = true;
  return (
    <HeroStyles>
      {/* <RPIElementIcon /> */}
      <div className="hero">
        <div className="hero__title">
          <h1>
            Sourcing the <span>talent</span> that ignites{' '}
            <span>transformation</span> in your business
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis optio aspernatur facilis repellat ipsa quos!
          </p>
          <div className="hero__title__btn">
            <button type="button" className="btn btn--main">
              <span>Find out more</span>
            </button>
            <button type="button" className="btn btn--alt">
              <span>Get started</span>
            </button>
          </div>
        </div>
        <div className="hero__img">
          <TemplateSVG />
        </div>
      </div>
    </HeroStyles>
  );
};

export default Hero;
