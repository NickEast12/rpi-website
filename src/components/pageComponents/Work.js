import React from 'react';
import styled from 'styled-components';
import Image from '../functional/Image';
import UCtelLogo from '../../svgs/uctel-logo.svg';
import NutcrackerLogo from '../../svgs/nutcracker-logo.svg';
import SortedLogo from '../../svgs/sorted.svg';
import ZanoLogo from '../../svgs/zano-logo.svg';
import VSLogo from '../../svgs/vs-logo.svg';
import Github from '../../svgs/github.svg';
import LinkIcon from '../../svgs/link.svg';

const WorkStyles = styled.section`
  width: 100%;
  padding-bottom: 7rem;
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
      width: 80%;
      margin: 1rem auto 0 auto;
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
        transition: all 0.35s ease-in-out;
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
            svg {
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
  const i = true;
  return (
    <WorkStyles>
      <div className="work">
        <h4>Recent work</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque hic
          voluptatem quas consectetur, quis natus!
        </p>
        <div className="work__boxes">
          <section>
            <Image filename="uctel.jpeg" alt="UCtel" />
            <div className="box--logo">
              <UCtelLogo />
            </div>
            <div className="overlay">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, commodi!
              </p>
              <div>
                <Github />
                <LinkIcon />
              </div>
            </div>
          </section>
          <section>
            <Image filename="nutcracker.jpeg" alt="Nutcracker Agency" />
            <div className="box--logo">
              <NutcrackerLogo />
            </div>
            <div className="overlay">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, commodi!
              </p>
              <div>
                <Github />
                <LinkIcon />
              </div>
            </div>
          </section>
          <section>
            <Image filename="vs.png" alt="Vine Street Solutions" />
            <div className="box--logo">
              <VSLogo />
            </div>
            <div className="overlay">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, commodi!
              </p>
              <div>
                <Github />
                <LinkIcon />
              </div>
            </div>
          </section>
          <section>
            <Image filename="sorted.jpeg" alt="Sorted Property Services" />
            <div className="box--logo">
              <SortedLogo />
            </div>
            <div className="overlay">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, commodi!
              </p>
              <div>
                <Github />
                <LinkIcon />
              </div>
            </div>
          </section>
          <section>
            <Image filename="zano.jpeg" alt="Zano Controls" />
            <div className="box--logo">
              <ZanoLogo />
            </div>
            <div className="overlay">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, commodi!
              </p>
              <div>
                <Github />
                <LinkIcon />
              </div>
            </div>
          </section>
        </div>
      </div>
    </WorkStyles>
  );
};

export default Work;
