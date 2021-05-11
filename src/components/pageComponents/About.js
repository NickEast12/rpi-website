import React, { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import styled from 'styled-components';
import DesignIcon from '../../svgs/design.svg';
import CodeIcon from '../../svgs/code.svg';
import ProblemSolverIcon from '../../svgs/code-error.svg';

const AboutStyles = styled.section`
  width: 100%;
  /* background-color: var(--secondaryColour); */
  background-color: #fff;
  padding: 5rem 0;
  .about {
    width: 90%;
    margin: 0 auto;
    max-width: var(--maxWidth);
    &--me {
      text-align: center;
      h2 {
        font-family: var(--title);
        font-size: 2.15rem;
        font-weight: 600;
      }
      p {
        margin: 1.5rem 0;
        @media only screen and (min-width: 1280px) {
          width: 80%;
          margin: 1.5rem auto;
        }
      }
    }
    @media only screen and (min-width: 600px) {
      width: 80%;
    }
  }
  .boxes {
    width: 90%;
    margin: 2rem auto 0 auto;
    max-width: var(--maxWidth);
    .box {
      margin: 1rem auto 2rem auto;
      background-color: #fff;
      padding: 1.85rem 1rem;
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
      width: 100%;
      text-align: center;
      svg {
        width: 80px;
      }
      h3 {
        font-size: 1.65rem;
        font-weight: 600;
        margin: 0.85rem 0;
      }
    }
    @media only screen and (min-width: 600px) {
      width: 80%;
      display: grid;
    }
    @media only screen and (min-width: 768px) {
      width: 90%;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 0.75rem;
    }
    @media only screen and (min-width: 1280px) {
      width: 100%;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1.5rem;
    }
  }
`;
const About = () => {
  const aboutRef = useRef(null);
  const contactIntersection = useIntersection(aboutRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  });
  const contactFadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 0,
      ease: 'power2.out',
      delay: 0.5,
      stagger: {
        amount: 0.45,
      },
    });
  };
  useEffect(() => {
    if (contactIntersection && contactIntersection.isIntersecting) {
      contactFadeIn('.aboutFade');
    }
  });
  return (
    <AboutStyles id="about">
      <div className="about" ref={aboutRef}>
        <div className="about--me">
          <h2 className="willFade aboutFade">
            <span>A nice catchy title to introduce me</span>
          </h2>
          <p className="willFade aboutFade">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lobortis nisl ac risus facilisis aliquet. Curabitur blandit pulvinar
            sodales. Etiam at elit et elit ultricies aliquet. Donec leo nibh,
            egestas eu metus a, suscipit laoreet erat. Maecenas egestas sed ante
            a lacinia. Nulla nec nunc nisl.
          </p>
        </div>
      </div>
      <div className="boxes">
        <div className="box willFade aboutFade ">
          <DesignIcon />
          <h3>Designer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, ex?
            Et beatae dicta cumque laudantium.
          </p>
        </div>
        <div className="box willFade aboutFade">
          <CodeIcon />
          <h3>Front-end Developer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, ex?
            Et beatae dicta cumque laudantium.
          </p>
        </div>
        <div className="box willFade aboutFade">
          <ProblemSolverIcon />
          <h3>Problem solver</h3>
          <p id="experience">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, ex?
            Et beatae dicta cumque laudantium.
          </p>
        </div>
      </div>
    </AboutStyles>
  );
};

export default About;
