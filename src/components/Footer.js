import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
//* Local imports
import RPILogo from '../svgs/rpi-logo.svg';
import LinkedinIcon from '../svgs/linkedin.svg';
import TwitterIcon from '../svgs/twitter.svg';

const FooterStyles = styled.footer`
  width: 100%;
  background: var(--background);
  padding-bottom: 1.5rem;
  .footer {
    width: 90%;
    padding: 3rem 0 0 0;
    margin: var(--auto);
    &__left {
      &__logo {
        width: 80px;
        height: auto;
        svg {
          .st0 {
            fill: var(--white);
          }
        }
      }
      &__links {
        display: flex;
        justify-content: space-between;
        width: 95%;
        section {
          margin-top: 2rem;
          h6 {
            color: var(--white);
            font-weight: 700;
            font-size: var(--titleSmall);
          }
          ul {
            list-style: none;
            li {
              color: var(--white);
              margin: 0.5rem 0;
              font-size: 0.9rem;
            }
          }
        }
      }
    }
    &__right {
      margin-top: 2rem;
      &__signup {
        p {
          color: var(--white);
          font-weight: 700;
          font-size: var(--titleSmall);
          margin-bottom: 1rem;
        }
        form {
          input {
            width: 100%;
            padding: 1rem;
            border-radius: 5px;
            border: none;
          }
          button {
            width: 100%;
            padding: 1rem;
            background: var(--mainColour);
            border: none;
            border-radius: 5px;
            margin-top: 0.75rem;
            span {
              color: var(--white);
              font-weight: 700;
            }
          }
        }
      }
      &__featured {
        margin-top: 1.5rem;
        color: var(--white);
        > p {
          color: var(--white);
          font-weight: 700;
          font-size: var(--titleSmall);
          margin-bottom: 1rem;
        }
        section {
          margin: 1rem 0;
          p {
            span {
            }
          }
          h6 {
            margin: 0.25rem 0;
          }
        }
      }
    }
  }
  .legal {
    width: 90%;
    margin: var(--auto);
    margin-top: 2rem;
    &__icons {
      width: 80px;
      margin: var(--auto);
      text-align: center;
      display: flex;
      justify-content: space-between;
      svg {
        fill: var(--white);
        width: 25px;
        height: 25px;
      }
    }
    &__links {
      margin-top: 2rem;
      margin: 2rem auto 0 auto;
      text-align: center;
      width: 90%;
      ul {
        list-style: none;
        display: flex;
        justify-content: center;
        align-self: center;
        gap: 1rem;
        li {
          color: var(--white);
          font-size: 0.85rem;
        }
      }
    }
  }
  .copy {
    width: 90%;
    margin: var(--auto);
    text-align: center;
    color: var(--white);
    margin-top: 1rem;
    p {
      font-size: 0.85rem;
    }
  }
`;

const Footer = () => {
  const i = true;
  return (
    <FooterStyles>
      <section className="footer">
        <div className="footer__left">
          <div className="footer__left__logo">
            <RPILogo />
          </div>
          <div className="footer__left__links">
            <section>
              <h6>Services</h6>
              <ul>
                <li>Leadership</li>
                <li>Communications</li>
                <li>Architecture</li>
                <li>ERP</li>
                <li>BI, Data &amp; Analytics</li>
                <li>Software Engineering &amp; DevOps</li>
                <li>Infrastructure &amp; Cloud Services</li>
                <li>Cybersecurity</li>
              </ul>
            </section>
            <section>
              <h6>Company</h6>
              <ul>
                <li>About us</li>
                <li>Our Team</li>
                <li>Join the team</li>
              </ul>
            </section>
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__right__signup">
            <p>Subscribe for our latest news</p>
            <form action="">
              <input type="text" name="" id="" placeholder="Email address" />
              <button type="button">
                <span>Subscribe</span>
              </button>
            </form>
          </div>
          <div className="footer__right__featured">
            <p>Featured articles</p>
            <section>
              <p>Article category</p>
              <h6>Article title</h6>
              <p>
                <span>5 min read time</span>
              </p>
            </section>
            <section>
              <p>Article category</p>
              <h6>Article title</h6>
              <p>
                <span>5 min read time</span>
              </p>
            </section>
          </div>
        </div>
      </section>
      <section className="legal">
        <div className="legal__icons">
          <LinkedinIcon />
          <TwitterIcon />
        </div>
        <div className="legal__links">
          <ul>
            <li>Terms</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </section>
      <section className="copy">
        <p>&copy; {new Date().getFullYear()} RPInt</p>
      </section>
    </FooterStyles>
  );
};

export default Footer;
