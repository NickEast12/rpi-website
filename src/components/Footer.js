import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
//* Local imports
import LinkedInIcon from '../svgs/linkedin.svg';
import TwitterIcon from '../svgs/twitter.svg';
import InstagramIcon from '../svgs/instagram.svg';

const FooterStyles = styled.footer`
  width: 100%;
  padding: 2.5rem 0 1.5rem 0;
  .footer {
    width: 95%;
    margin: 0 auto;
    &__content {
      color: #fff;
      &--links {
        display: flex;
        width: 100%;
        justify-content: space-between;
        .ft--img {
          flex: 1 0 auto;
          .gatsby-image-wrapper {
            width: 170px;
          }
        }
        .ft--icons {
          flex: 1 0 auto;
          display: flex;
          justify-content: space-evenly;
          svg {
            fill: var(--mainColour);
            width: 25px;
          }
        }
      }
      h3 {
        margin: 2rem 0;
        font-weight: 700;
        span {
          color: var(--yellow);
        }
      }
      p {
        font-size: var(--textMedium);
        line-height: 1.5;
      }
      address {
        font-style: inherit;
        font-size: var(--textMedium);
        margin-top: 1rem;
      }
    }
    &__img {
      margin-top: 2rem;
      .gatsby-image-wrapper {
        height: auto;
        width: 100%;
      }
    }
  }
`;

const Footer = () => {
  const i = true;
  return (
    <FooterStyles>
      <div className="footer">
        <div className="footer__content">
          <div className="footer__content--links">
            <div className="ft--img">
              <StaticImage
                src="../assets/images/nutcracker-logo.png"
                alt="Nutcracker logo"
              />
            </div>
            <div className="ft--icons">
              <TwitterIcon />
              <LinkedInIcon />
              <InstagramIcon />
            </div>
          </div>
          <h3>
            Stand <span className="title--bold">out</span> from the crowd
          </h3>
          <p>
            Marketing | Content | Social media | Design | Lead generation | PR |
            The team | Blog | Contact us
          </p>
          <address>
            Nutcracker Agency, Salatin House, 19 Cedar Road, Sutton, SM2 5DA
          </address>
        </div>
        <div className="footer__img">
          <StaticImage
            src="../assets/images/footer-awards.png"
            alt="Nutracker awards"
          />
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
