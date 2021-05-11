import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import Image from '../functional/Image';
import UCtelLogo from '../../svgs/uctel-logo.svg';
import NutcrackerLogo from '../../svgs/nutcracker-logo.svg';
import SortedLogo from '../../svgs/sorted.svg';
import ZanoLogo from '../../svgs/zano-logo.svg';
import VSLogo from '../../svgs/vs-logo.svg';
import Github from '../../svgs/github.svg';
import LinkIcon from '../../svgs/link.svg';
import LashBaseIcon from '../../svgs/lashbase.svg';

const WorkStyles = styled.section`
  width: 100%;
  padding-bottom: 2rem;
  /* background: rgba(222, 222, 222, 0.25); */
  .work {
    width: 90%;
    margin: 0 auto;
    text-align: center;
    max-width: var(--maxWidth);
    h4 {
      font-size: 2rem;
      font-weight: 600;
    }
    > p {
      width: 90%;
      margin: 1rem auto 1.5rem auto;
      span {
        a {
          color: var(--mainColour) !important;
          font-weight: 800;
        }
      }
    }
    &__boxes {
      margin-top: 2rem;
      width: 90%;
      margin: 2rem auto 0 auto;
      section {
        border-radius: 20px;
        height: 12rem;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        &:nth-child(2) {
          .gatsby-image-wrapper {
            &::after {
              background: rgba(22, 34, 42, 0.75);
            }
          }
        }
        @media only screen and (min-width: 375px) {
          height: 14rem;
        }
        position: relative;
        /* transition: all 0.35s ease-in-out; */
        transition: inherit;
        margin-bottom: 1.5rem;
        &:hover {
          .overlay {
            opacity: 1;
          }
        }
        .gatsby-image-wrapper {
          border-radius: 20px;
          height: 100%;
          width: 100%;
          &::after {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(22, 33, 42, 0.5);
            content: '';
          }
        }
        .box--logo {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          svg {
            position: relative;
            width: 190px;
          }
        }
        .overlay {
          transition: all 0.35s ease-in-out;
          border-radius: 20px;
          opacity: 0;
          width: 100%;
          height: 100%;
          position: absolute;
          padding: 1.6rem 1.25rem 1.25rem 1.25rem;
          top: 0;
          left: 0;
          background: #16212a;
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          div {
            width: 60px;
            justify-content: space-between;
            margin: 1rem auto 0 auto;
            display: flex;
            text-align: center;
            svg {
              text-align: center;
              width: 22.5px;
              height: 22.5px;
              fill: #fff;
            }
          }
        }
      }
      @media only screen and (min-width: 768px) {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 0.25rem;
        section {
          height: 15rem;
          margin-bottom: 0;
        }
      }
      @media only screen and (min-width: 1280px) {
        width: 100%;
        grid-gap: 1rem;
        section {
          height: 14rem;
        }
      }
    }
  }
`;
const Work = () => {
  const workRef = useRef(null);
  const contactIntersection = useIntersection(workRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });
  const contactFadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 0,
      ease: 'power1.out',
      delay: 1.2,
      stagger: {
        amount: 1.15,
      },
    });
  };
  useEffect(() => {
    if (contactIntersection && contactIntersection.isIntersecting) {
      contactFadeIn('.workFade');
    }
  });
  return (
    <WorkStyles>
      <div className="work">
        <h4 className="willFade expFade" ref={workRef}>
          Recent work
        </h4>
        <p className="willFade expFade">
          A selection of my most recent projects to date for a full overview of
          all my projects, check out my
          <span>
            {' '}
            <a
              href="https://github.com/NickEast12"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>{' '}
          </span>
        </p>
        <div className="work__boxes">
          <section className="willFade workFade">
            <Image filename="uctel.jpeg" alt="UCtel" />
            <div className="box--logo">
              <UCtelLogo />
            </div>
            <div className="overlay">
              <p>5G communication specialists keeping businesses connected.</p>
              <div>
                <a
                  href="https://github.com/NickEast12/UCtel-website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
                <a
                  href="https://www.uctel.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon />
                </a>
              </div>
            </div>
          </section>
          <section className="willFade workFade">
            <Image filename="nutcracker.jpeg" alt="Nutcracker Agency" />
            <div className="box--logo">
              <NutcrackerLogo />
            </div>
            <div className="overlay">
              <p>Multi-award winning digital marketing agency</p>
              <div>
                <a
                  href="https://github.com/NickEast12/nutcracker-website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
                <a
                  href="https://www.nutcrackeragency.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon />
                </a>
              </div>
            </div>
          </section>
          <section className="willFade workFade">
            <Image filename="vs.png" alt="Vine Street Solutions" />
            <div className="box--logo">
              <VSLogo />
            </div>
            <div className="overlay">
              <p>
                Bespoke print solution provider based in the heart of Mayfair,
                London
              </p>
              <div>
                <a
                  href="http://www.vinestreet.solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon />
                </a>
              </div>
            </div>
          </section>
          <section className="willFade workFade">
            <Image filename="sorted.jpeg" alt="Sorted Property Services" />
            <div className="box--logo">
              <SortedLogo />
            </div>
            <div className="overlay">
              <p>Southeast London's property maintenance experts.</p>
              <div>
                <a
                  href="https://github.com/NickEast12/sorted-property-services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
                <a
                  href="https://www.sortedpropertyservices.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon />
                </a>
              </div>
            </div>
          </section>
          <section className="willFade workFade">
            <Image filename="lashbase.jpg" alt="LashBase" />
            <div className="box--logo">
              <LashBaseIcon />
            </div>
            <div className="overlay">
              <p>
                Personal project for booking freelance eyelash technicians in
                your local area.
              </p>
              <div>
                <a
                  href="https://github.com/NickEast12/Lash-Base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
                <a
                  href="https://lashbase.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon />
                </a>
              </div>
            </div>
          </section>
          <section className="willFade workFade" id="blog">
            <Image filename="zano.jpeg" alt="Zano Controls" />
            <div className="box--logo">
              <ZanoLogo />
            </div>
            <div className="overlay">
              <p>
                Leading manufacturer of revolutionary LED dimming technology
              </p>
              <div>
                <a
                  href="https://github.com/NickEast12/zano-microsite"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
                <a
                  href="https://www.zanotechnology.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </WorkStyles>
  );
};

export default Work;
