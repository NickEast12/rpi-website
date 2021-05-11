import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';
import gsap from 'gsap';

const LowerAboutStyles = styled.section`
  width: 100%;
  padding: 0 0 2rem 0;
  .la {
    width: 90%;
    margin: 0 auto;
    max-width: var(--maxWidth);
    @media only screen and (min-width: 600px) {
      width: 80%;
    }
    @media only screen and (min-width: 768px) {
      width: 90%;
      display: flex;
      gap: 2rem;
      justify-content: space-between;
    }
    @media only screen and (min-width: 1280px) {
      width: 70%;
      padding: 3rem 0;
    }
    div {
      margin-bottom: 4rem;
      h4 {
        font-size: 2rem;
        font-weight: 700;
        span {
          color: #4e94fb;
          font-weight: 900;
        }
      }
      p {
        margin-top: 1rem;
      }
      ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        margin-top: 1rem;
        gap: 5px;
        li {
          padding: 5px 8px;
          border-radius: 5px;
          &:nth-child(1n) {
            background: #4e94fb;
          }
          &:nth-child(2n) {
            background: #69ffb7;
          }
          &:nth-child(3n) {
            background: #ef5e93;
          }
        }
      }
    }
  }
`;
const LowerAbout = () => {
  const expRef = useRef(null);
  const contactIntersection = useIntersection(expRef, {
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
        amount: 1.5,
      },
    });
  };
  useEffect(() => {
    if (contactIntersection && contactIntersection.isIntersecting) {
      contactFadeIn('.expFade');
    }
  });
  return (
    <LowerAboutStyles>
      <div className="la" ref={expRef}>
        <div className="la__tech">
          <h4 className="willFade expFade">My current tech stack</h4>
          <p className="willFade expFade">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            perspiciatis explicabo impedit! Quo, quisquam libero.
          </p>
          <ul>
            <li className="willFade expFade">JSX</li>
            <li className="willFade expFade">Styled Components</li>
            <li className="willFade expFade">React.js</li>
            <li className="willFade expFade">Gatsby.js</li>
            <li className="willFade expFade">Next.js</li>
            <li className="willFade expFade">GraphQL</li>
            <li className="willFade expFade">Sanity.io</li>
            <li className="willFade expFade">Netlify</li>
            <li className="willFade expFade">Vercel</li>
          </ul>
        </div>
        <div className="la__work">
          <h4 className="willFade expFade">
            Currently working @ <span>Nutcracker Agency</span>
          </h4>
          <p className="willFade expFade">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            perspiciatis explicabo impedit! Quo, quisquam libero.
          </p>
          <p className="willFade expFade">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, ad!
          </p>
        </div>
      </div>
    </LowerAboutStyles>
  );
};

export default LowerAbout;
