import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';
//* Local imports
import RPILogo from '../svgs/rpi-logo--white.svg';
import LinkedinIcon from '../svgs/linkedin.svg';
import TwitterIcon from '../svgs/twitter.svg';
import ArrowIcon from '../svgs/right-arrow.svg';

const FooterStyles = styled.footer`
  width: 100%;
  background: var(--background);
  padding-bottom: 1.5rem;
  .footer {
    max-width: var(--maxWidth);
    width: 90%;
    padding: 3rem 0 0 0;
    margin: var(--auto);
    &__left {
      &__logo {
        width: 80px;
        height: auto;
        svg {
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
            will-change: opacity;
            transition: opacity 0.25s ease;
            &:hover {
              li a {
                opacity: 0.5;
              }
            }
            li {
              color: var(--white);
              margin: 0.5rem 0;
              font-size: 0.9rem;

              a {
                will-change: opacity;
                transition: opacity 0.25s ease;
                &:hover {
                  opacity: 1 !important;
                }
                color: var(--white);
              }
            }
          }
        }
        @media only screen and (min-width: 1024px) {
          justify-content: left;
          gap: 1.5rem;
        }
      }
    }
    &__right {
      margin-top: 2rem;
      @media only screen and (min-width: 1024px) {
        margin-top: 0;
      }
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
            background: #66c2ab;
            border: none;
            border-radius: 5px;
            margin-top: 0.75rem;
            span {
              color: var(--white);
              font-weight: 700;
            }
          }
          @media only screen and (min-width: 1024px) {
            display: flex;
            input {
              border-radius: 5px 0 0 5px;
            }
            button {
              margin-top: 0;
              width: 35%;
              border-radius: 0 5px 5px 0;
              cursor: pointer;
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
          border: rgba(255, 255, 255, 0.25) 1px solid;
          border-radius: 3px;
          padding: 1rem;
          margin: 1rem 0;
          &:hover {
            border: rgba(255, 255, 255, 1) 1px solid;
            span {
              svg {
                fill: #fff;
              }
            }
          }
          div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            p {
              color: var(--offWhite);
              font-size: 0.9rem;
              span {
                font-weight: 700;
              }
            }
            > span {
              svg {
                fill: rgba(255, 255, 255, 0.75);
                width: 15px;
                height: 15px;
              }
            }
          }
          h6 {
            margin: 0.25rem 0;
            color: var(--offWhite);
          }
        }
      }
    }
    @media only screen and (min-width: 1024px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 5rem;
    }
  }
  .legal {
    width: 90%;
    margin: var(--auto);
    margin-top: 2rem;
    max-width: var(--maxWidth);
    &__icons {
      width: 80px;
      margin: var(--auto);
      text-align: center;
      display: flex;
      justify-content: space-between;
      will-change: opacity;
      transition: opacity 0.25s ease;
      &:hover {
        svg {
          opacity: 0.5;
        }
      }
      svg {
        fill: var(--white);
        width: 25px;
        height: 25px;
        will-change: opacity;
        transition: opacity 0.25s ease;
        &:hover {
          opacity: 1;
        }
      }
    }
    &__links {
      margin-top: 2rem;
      margin: 2rem auto 0 auto;
      text-align: center;
      width: 100%;
      ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-self: center;
        gap: 1rem;
        will-change: opacity;
        transition: opacity 0.25s ease;
        &:hover {
          li a {
            opacity: 0.5;
          }
        }
        li {
          color: var(--white);
          font-size: 0.85rem;

          a {
            will-change: opacity;
            transition: opacity 0.25s ease;
            &:hover {
              opacity: 1;
            }
            color: var(--white);
          }
        }
      }
    }
    @media only screen and (min-width: 1024px) {
      display: flex;
      justify-content: space-between;
      &__links {
        ul {
          justify-content: flex-end;
        }
        margin: 0 0 0 auto;
      }
    }
  }
  .copy {
    width: 90%;
    margin: var(--auto);
    text-align: center;
    margin-top: 1rem;
    max-width: var(--maxWidth);
    p {
      color: var(--white);
      font-size: 0.85rem;
    }
    @media only screen and (min-width: 1024px) {
      text-align: left;
    }
  }
`;

const Footer = () => {
  const { featured } = useStaticQuery(graphql`
    query FeaturedQuery {
      featured: allSanityPost(
        limit: 3
        sort: { fields: publishedAt, order: DESC }
      ) {
        nodes {
          title
          publishedAt
          id
          slug {
            current
          }
        }
      }
    }
  `);
  return (
    <FooterStyles>
      <section className="footer">
        <div className="footer__left">
          <div className="footer__left__logo">
            <RPILogo />
          </div>
          <div className="footer__left__links">
            <section>
              <h6>Specialisms</h6>
              <ul>
                <li>
                  <Link to="/specialisms/leadership">Leadership</Link>
                </li>
                <li>
                  <Link to="/specialisms/communications">Communications</Link>
                </li>
                <li>
                  <Link to="/specialisms/architecture">Architecture</Link>
                </li>
                <li>
                  <Link to="/specialisms/erp">ERP</Link>
                </li>
                <li>
                  <Link to="/specialisms/bi-data-analytics">
                    BI, Data &amp; Analytics
                  </Link>
                </li>
                <li>
                  <Link to="/specialisms/software-engineering-devops">
                    Software Engineering &amp; DevOps
                  </Link>
                </li>
                <li>
                  <Link to="/specialisms/infrastructure-cloud-services">
                    Infrastructure &amp; Cloud Services
                  </Link>
                </li>
                <li>
                  <Link to="/specialisms/cyber-security">Cyber Security</Link>
                </li>
              </ul>
            </section>
            <section>
              <h6>Company</h6>
              <ul>
                <li>
                  <Link to="/about-us">About us</Link>
                </li>

                <li>
                  <Link to="/our-team">Our Team</Link>
                </li>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div className="footer__right">
          {/* <div className="footer__right__signup">
            <p>Subscribe for our latest news</p>
            <form
              name="email_signup"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/thank-you"
            >
              <input type="hidden" name="form-name" value="email_signup" />
              <p className="hidden">
                <label htmlFor="bot-field">
                  Don???t fill this out if you???re human:{' '}
                  <input name="bot-field" />
                </label>
              </p>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email address"
                required
              />
              <button type="submit">
                <span>Subscribe</span>
              </button>
            </form>
          </div> */}
          <div className="footer__right__featured">
            <p>Featured articles</p>
            {featured.nodes.map((x) => (
              <Link to={`/blog/${x.slug.current}`} key={x.id}>
                <section>
                  <div>
                    <p>
                      <span>Article</span> : {x.title}
                    </p>
                    <span>
                      <ArrowIcon />
                    </span>
                  </div>
                </section>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="legal">
        <div className="legal__icons">
          <a
            href="https://www.linkedin.com/company/rp-international/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://twitter.com/RPInsight"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
        </div>
        <div className="legal__links">
          <ul>
            <li>
              <Link to="/terms">Terms</Link>
            </li>
            <li>
              <Link to="/modern-slavery">Modern Slavery</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/cookie-policy">Cookie Policy</Link>
            </li>
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
