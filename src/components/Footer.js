import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
//* Local imports
import Logo from '../svgs/logo.svg';
import GithubIcon from '../svgs/github.svg';
import LinkedinIcon from '../svgs/linkedin.svg';
import SpotifyIcon from '../svgs/spotify.svg';

const FooterStyles = styled.footer`
  width: 100%;
  background: #16222a;
  .footer {
    padding: 2.5rem 0 1rem 0;
    width: 90%;
    margin: 0 auto;
    &__wrapper {
      padding-top: 16rem;
      text-align: center;
      > svg {
        width: 110px;
      }
      &__icons {
        display: flex;
        justify-content: space-between;
        width: 120px;
        margin: 2rem auto 0 auto;
        svg {
          fill: rgba(255, 255, 255, 0.7);
          width: 25px;
          height: 25px;
          transition: fill 0.35s ease-in-out;
          &:hover {
            fill: var(--mainColour);
          }
        }
      }
      .built {
        color: rgba(255, 255, 255, 0.7);
        margin-top: 2rem;
        font-family: var(--roboto);
        font-size: 0.85rem;
      }
      .legal {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        p {
          color: rgba(255, 255, 255, 0.7);
          font-family: var(--roboto);
          font-size: 0.75rem;
          transition: color 0.35s ease-in-out;
          &:hover {
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }
`;

const Footer = () => {
  const i = true;
  return (
    <FooterStyles>
      <FooterCTA />
      <div className="footer">
        <div className="footer__wrapper">
          <Logo />
          <div className="footer__wrapper__icons">
            <GithubIcon />
            <LinkedinIcon />
            <SpotifyIcon />
          </div>
          <p className="built">Designed &amp; Built by Nick East</p>
          <div className="legal">
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;

const FooterCTAStyles = styled.section`
  width: 100%;
  position: relative;
  .cta {
    top: -3rem;
    left: 0;
    position: absolute;
    box-shadow: rgba(17, 12, 46, 0.95) 0px 48px 100px 0px;
    /* background: #4e94fc; */
    background: #fff;

    border-radius: 5px;
    padding: 2.5rem 1.85rem;
    width: 85%;
    margin: 0 calc(7.5%);
    text-align: center;
    h4 {
      font-weight: 600;
    }
    p {
      margin-top: 1rem;
    }
    button {
      margin-top: 1rem;
      width: 80%;
    }
  }
`;
const FooterCTA = () => (
  <FooterCTAStyles>
    <div className="cta">
      <h4>Some words about getting in contact</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magni totam
        dolores deleniti repellat quidem?
      </p>
      <button type="button" className="btn btn--main">
        <span>Let's go</span>
      </button>
    </div>
  </FooterCTAStyles>
);

// ['#16222A', '#3A6073'],
// ['#0A1A2E', '#093637'],
