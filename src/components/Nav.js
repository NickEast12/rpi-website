import { Link } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import { window } from 'browser-monads';
import styled from 'styled-components';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
//* Local imports
import RPILogo from '../svgs/rpi-logo.svg';
import LeaderShipIcon from '../svgs/leadership.svg';

const NavStyles = styled.nav`
  z-index: 999;
  .nav__wrapper {
    background: ${({ open }) => (open ? 'var(--background)' : 'none')};
    /* transition: all 1s ease; */
  }
  @keyframes liAnimation {
    to {
      opacity: 1;
      transform: translateY(0px);
      z-index: 50;
    }
  }
  @keyframes iconAnimation {
    to {
      opacity: 1;
      transform: translateY(0px);
      z-index: 50;
    }
  }
  @keyframes desktopMenuIn {
    to {
      opacity: 1;
      visibility: visible;
      z-index: 99999;
    }
  }
  width: 100%;
  position: fixed;
  /* transition: all 0.5s ease; */
  .nav-bkg {
    background-color: ${({ open }) => (open ? 'var(--background)' : 'none')};
    position: relative;
    z-index: 999;
    transition: all 0.6s ease;
  }
  .nav {
    padding: 1.05rem 0;
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    position: relative;
    max-width: var(--maxWidth);
    transition: all 0.35s ease;
    z-index: 9999;
    &--logo {
      svg {
        width: 80px;
        height: auto;
        transition: all 10s ease;
        fill: black;
        path {
          .st0 {
            fill: black;
          }
        }
        .st0 {
          fill: ${({ open }) => (open ? 'white' : 'black')};
        }
      }
      @media only screen and (min-width: 1024px) {
        display: flex;
        align-items: center;
      }
    }
    &--menu {
      width: 30px;
      /* margin-top: 4px; */
      display: flex;
      flex-direction: column;
      outline: none;
      align-self: center;
      div {
        width: 100%;
        height: 3px;
        margin-bottom: 0.3rem;
        transition: all 0.25s ease 0s;
        transform-origin: 26.5px center;
        background-color: var(--background);
        &:nth-child(1) {
          transform: ${({ open }) =>
            open ? 'rotate(-45deg)' : 'rotate(0deg)'};
          width: ${({ open }) => (open ? '100%' : '75%')};
          margin: 0 0 0.3rem auto;
          background-color: ${({ open }) =>
            open ? 'white' : 'var(--background)'};
        }
        &:nth-child(2) {
          opacity: ${({ open }) => (open ? '0' : '1')};
          background-color: ${({ open }) =>
            open ? 'white' : 'var(--background)'};
        }
        &:nth-child(3) {
          transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0deg)')};
          width: ${({ open }) => (open ? '100%' : '75%')};
          margin: 0 0 0 auto;
          background-color: ${({ open }) =>
            open ? 'white' : 'var(--background)'};
        }
      }
      @media only screen and (min-width: 1024px) {
        display: none;
      }
    }
    &--desktop {
      display: none;
      @media only screen and (min-width: 1024px) {
        display: block;
        > ul {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 2rem;
          > li {
            font-weight: 700;
          }
          .submenu {
            position: relative;
            &:hover {
              .dropdown {
                animation: desktopMenuIn 0.35s ease-in-out forwards;
              }
            }
            .dropdown {
              width: 38rem;
              left: -16.5rem;
              top: 0;
              position: absolute;
              padding-top: 2rem;
              visibility: hidden;
              z-index: -40;
              opacity: 0;
              transition: all 0.55s ease;
              &__wrapper {
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                border-radius: 4.5px;
                list-style: none;
                background-color: #fff;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 0.25rem 2rem;
                padding: 1rem;
                li {
                  padding: 0.75rem 0.5rem;
                  border-bottom: solid 1px rgba(100, 100, 111, 0.2);
                  &:nth-child(8) {
                    border: none;
                  }
                  &:hover {
                    a {
                      p {
                        color: var(--mainColour);
                      }
                    }
                  }
                  a {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    svg {
                      width: 25px;
                      height: 25px;
                    }
                  }
                }
              }
            }
          }
          .submenu-c {
            position: relative;
            &:hover {
              .dropdown {
                animation: desktopMenuIn 0.35s ease-in-out forwards;
              }
            }
            .dropdown {
              width: 7.5rem;
              left: -1.5rem;
              top: 0;
              position: absolute;
              padding-top: 2rem;
              visibility: hidden;
              z-index: -40;
              opacity: 0;
              transition: all 0.55s ease;
              &__wrapper {
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                border-radius: 4.5px;
                list-style: none;
                background-color: #fff;

                padding: 0.5rem 1rem;
                li {
                  padding: 0.75rem 0.5rem;
                  border-bottom: solid 1px rgba(100, 100, 111, 0.2);

                  &:nth-child(3) {
                    border: none;
                  }
                  &:hover {
                    a {
                      p {
                        color: var(--mainColour);
                      }
                    }
                  }
                  a {
                    text-align: center;
                  }
                }
              }
            }
          }
        }
        button {
          padding: 0.75rem 1.2rem;
        }
      }
    }
  }
  .menu {
    @media only screen and (min-width: 1024px) {
      display: none;
    }
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s linear;
    background-color: var(--background);
    max-height: ${({ open }) => (open ? '1000rem' : '0')};
    height: ${({ open }) => (open ? '100vh' : '0')};
    overflow: ${({ open }) => (open ? 'scroll' : 'hidden')};
    > ul {
      display: ${({ open }) => (open ? 'block' : 'none')};
      width: 100%;
      margin: 5rem auto;
      text-align: left;
      list-style: none;
      @media only screen and (min-width: 375px) {
        margin-top: 5rem;
      }
      @media only screen and (min-width: 414px) {
        margin-top: 7rem;
      }
      > li {
        font-size: 1.4rem;
        color: var(--offWhite);
        transform: translateY(-10px);
        opacity: 0;
        a {
          padding: 0.85rem 0.85rem;
          display: block;
          color: var(--white);
        }
      }
      .menu--button {
        width: 90%;
        margin: var(--auto);
        text-align: center;
        @media only screen and (min-width: 414px) {
          width: 60%;
        }
        button {
          margin: 1.5rem auto 0 auto;
          width: 100%;
          text-align: center;
          background-color: var(--mainColour);
          span {
            font-size: 1.2rem;
          }
        }
        border: none;
      }
      .s-submenu {
        padding: 0;
        .s-dropdown {
          list-style: none;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          width: 100%;
          max-height: ${({ secondactive }) => (secondactive ? '99rem' : '0')};
          overflow: hidden;
          transition: all 0.75s ease;
          padding: 0;
          li {
            padding: 0;
            margin: 0 0 2px 0;
            background-color: rgb(45, 56, 75);
            a {
              display: flex;
              align-items: center;
              gap: 0.85rem;
              svg {
                width: 20px;
                height: 20px;
                fill: var(--offWhite);
              }
              p {
                color: var(--offWhite);
              }
            }
          }
        }
      }
      .submenu {
        padding: 0;
        .dropdown {
          list-style: none;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          width: 100%;
          max-height: ${({ active }) => (active ? '99rem' : '0')};
          overflow: hidden;
          transition: all 0.75s ease;
          padding: 0;
          li {
            padding: 0;
            margin: 0 0 2px 0;
            background-color: rgb(45, 56, 75);
            a {
              display: flex;
              align-items: center;
              gap: 0.85rem;
              svg {
                width: 20px;
                height: 20px;
                fill: var(--offWhite);
              }
              p {
                color: var(--offWhite);
              }
            }
          }
        }
      }

      > li:nth-child(1) {
        animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.65s 0.5s
          forwards;
      }
      > li:nth-child(2) {
        animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.65s 0.7s
          forwards;
      }
      > li:nth-child(3) {
        animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.65s 0.9s
          forwards;
      }
      > li:nth-child(4) {
        animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.55s 1.1s
          forwards;
      }
      > li:nth-child(5) {
        animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.55s 1.3s
          forwards;
      }
      .nav__icons {
        display: flex;
        width: 110px;
        margin: 6rem auto 0 auto;
        justify-content: space-between;
        a {
          opacity: 0;
          transform: translateY(20px);
          &:nth-child(1) {
            animation: ${({ open }) => (open ? 'iconAnimation' : '')} 0.55s 2s
              forwards;
          }
          &:nth-child(2) {
            animation: ${({ open }) => (open ? 'iconAnimation' : '')} 0.55s 2.2s
              forwards;
          }
          &:nth-child(3) {
            animation: ${({ open }) => (open ? 'iconAnimation' : '')} 0.55s 2.4s
              forwards;
          }
          svg {
            transition: all 0.35s ease;
            width: 22px;
            fill: rgba(255, 255, 255, 0.5);
            &:hover {
              fill: var(--mainColour);
            }
          }
        }
      }
    }
  }
`;
const Nav = ({ alt }) => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState(false);
  const [secondactive, setSecondActive] = useState(false);

  const changeNavScroll = () => {
    if (window.scrollY >= 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener('scroll', changeNavScroll);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    if (!open) {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  const navRef = useRef(null);
  const contactIntersection = useIntersection(navRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  });
  const contactFadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 0,
      ease: 'power2.out',
      delay: 1.25,
      stagger: {
        amount: 0.45,
      },
    });
  };
  useEffect(() => {
    if (contactIntersection && contactIntersection.isIntersecting) {
      contactFadeIn('.navFade');
    }
  });
  return (
    <NavStyles open={open} active={active} secondactive={secondactive}>
      <div className={scroll ? 'active nav__wrapper' : 'nav__wrapper'}>
        <div className="nav-bkg">
          <div className="nav" ref={navRef}>
            <div className={alt ? ' alt--logo' : 'nav--logo'}>
              <Link to="/">
                <RPILogo />
              </Link>
            </div>
            <div
              className={alt ? 'alt--menu' : 'nav--menu'}
              onClick={() => setOpen(!open)}
              onKeyDown={() => setOpen(!open)}
              role="button"
              tabIndex={0}
            >
              <div />
              <div />
              <div />
            </div>
            <div className="nav--desktop">
              <ul>
                <li className="willFade navFade submenu">
                  Services
                  <div className="dropdown">
                    <ul className="dropdown__wrapper">
                      <li>
                        <Link to="/services/leadership">
                          <LeaderShipIcon />
                          <p>Leadership</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/communications">
                          <LeaderShipIcon />
                          <p>Communications</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/architecture">
                          <LeaderShipIcon />
                          <p>Architecture</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/erp">
                          <LeaderShipIcon />
                          <p>ERP</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/big-data-analytics">
                          <LeaderShipIcon />
                          <p>Big Data &amp; Analytics</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/software-engineering-devops">
                          <LeaderShipIcon />
                          <p>Software Engineering &amp; DevOps</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/infrastructure-cloud-services">
                          <LeaderShipIcon />
                          <p>Infrastructure &amp; Cloud Services</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/cybersecurity">
                          <LeaderShipIcon />
                          <p>Cybersecurity</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="willFade navFade">
                  <Link to="/specialisms">Specialisms</Link>
                </li>
                <li className="willFade navFade submenu-c">
                  Company
                  <div className="dropdown">
                    <ul className="dropdown__wrapper">
                      <li>
                        <Link to="/about-us">
                          <p>About us</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/our-team">
                          <p>Our team</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/careers">
                          <p>Careers</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="willFade navFade">
                  <Link to="/resources">Resources</Link>
                </li>
                <button type="button" className="btn">
                  <Link to="/contact">
                    <span>Get started</span>
                  </Link>
                </button>
              </ul>
            </div>
          </div>
        </div>
        <div className="menu" open={open}>
          <ul>
            <li
              className="submenu"
              onClick={() => setActive(!active)}
              onKeyDown={() => setActive(!active)}
              role="button"
              tabIndex={0}
            >
              <a>Services</a>
              <ul className="dropdown">
                <li>
                  <Link to="/services/leadership">
                    <LeaderShipIcon />
                    <p>Leadership</p>
                  </Link>
                </li>
                <li>
                  <Link to="/services/communications">
                    <LeaderShipIcon />
                    <p>Communications</p>
                  </Link>
                </li>
                <li>
                  <Link to="/services/architecture">
                    <LeaderShipIcon />
                    <p>Architecture</p>
                  </Link>
                </li>
                <li>
                  <Link to="/services/erp">
                    <LeaderShipIcon />
                    <p>ERP</p>
                  </Link>
                </li>
                <li>
                  <Link to="/services/big-data-analytics">
                    <LeaderShipIcon />
                    <p>Big Data &amp; Analytics</p>
                  </Link>
                </li>
                <li>
                  <Link to="/services/software-engineering-devops">
                    <LeaderShipIcon />
                    <p>Software Engineering &amp; DevOps</p>
                  </Link>
                </li>
                <li>
                  <Link to="/services/infrastructure-cloud-services">
                    <LeaderShipIcon />
                    <p>Infrastructure &amp; Cloud Services</p>
                  </Link>
                </li>
                <li>
                  <Link to="/services/cybersecurity">
                    <LeaderShipIcon />
                    <p>Cybersecurity</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/specialisms" onClick={() => setOpen(!open)}>
                Specialisms
              </Link>
            </li>
            <li
              className="s-submenu"
              onClick={() => setSecondActive(!secondactive)}
              onKeyDown={() => setSecondActive(!secondactive)}
              role="button"
              tabIndex={0}
            >
              <a>Company</a>
              <ul className="s-dropdown">
                <li>
                  <Link to="/about-us">
                    <p>About us</p>
                  </Link>
                </li>
                <li>
                  <Link to="/our-team">
                    <p>Our team</p>
                  </Link>
                </li>
                <li>
                  <Link to="/careers">
                    <p>Careers</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/resources" onClick={() => setOpen(!open)}>
                Resources
              </Link>
            </li>
            <li className="menu--button">
              <Link
                to="/contact"
                href="mailto:contact@nick-east.com?subject=Request Resume"
                onClick={() => setOpen(!open)}
              >
                <button type="button" className="btn  nav-button">
                  <span>Get started</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </NavStyles>
  );
};

export default Nav;
