import React from 'react';
import styled from 'styled-components';
import Image from '../functional/Image';
import UCtelLogo from '../../svgs/uctel-logo.svg';
import Github from '../../svgs/github.svg';
import LinkIcon from '../../svgs/link.svg';

const WorkStyles = styled.section`
  width: 100%;
  padding-bottom: 5rem;
  .work {
    width: 90%;
    margin: 0 auto;
    text-align: center;
    h4 {
      font-size: 2rem;
      font-weight: 600;
    }
    > p {
      margin-top: 1rem;
    }
    &__boxes {
      margin-top: 2rem;
      section {
        border-radius: 5px;
        position: relative;
        background: red;
        transition: all 0.35s ease-in-out;
        margin-bottom: 1.5rem;
        &:hover {
          .overlay {
            opacity: 1;
          }
        }
        .gatsby-image-wrapper {
          border-radius: 4.5px;
          height: auto;
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
          border-radius: 5px;
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
              fill: #fff;
            }
          }
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
        </div>
      </div>
    </WorkStyles>
  );
};

export default Work;
