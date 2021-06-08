import { Link } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import { window } from 'browser-monads';
import styled from 'styled-components';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
//* Local imports
import RPILogo from '../svgs/rpi-logo.svg';

const NavStyles = styled.nav`
  z-index: 999;

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
  width: 100%;
  position: fixed;

  transition: all 0.35s ease;
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
        transform-origin: 26px center;
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
        ul {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 2rem;
          li {
            font-weight: 700;
          }
        }
        button {
          padding: 0.75rem 1.2rem;
        }
      }
    }
  }
  .menu {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.35s linear;
    background-color: var(--background);
    max-height: ${({ open }) => (open ? '1000rem' : '0')};
    height: ${({ open }) => (open ? '100vh' : '0')};
    ul {
      display: ${({ open }) => (open ? 'block' : 'none')};
      width: 100%;
      margin: 6rem auto;
      text-align: center;
      list-style: none;
      padding: 2rem 0;
      @media only screen and (min-width: 375px) {
        margin-top: 9.5rem;
      }
      @media only screen and (min-width: 414px) {
        margin-top: 10.5rem;
      }
      a {
        li {
          padding: 0.85rem 0;
          /* border-bottom: solid var(--offWhite) 1px; */
          border-top: solid var(--offWhite) 1px;
          /* margin-bottom: 1rem; */
          color: var(--white);
          transition: all 0.35s ease;
          opacity: 0;
          transform: translateY(-10px);
          .nav-button {
            width: 70%;
          }
        }
        .menu--button {
          border: none;
          margin-top: 1.5rem;
        }
      }
      a:nth-child(1) li {
        animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.65s 0.5s
          forwards;
      }
      a:nth-child(2) li {
        animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.65s 0.7s
          forwards;
      }
      a:nth-child(3) li {
        animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.65s 0.9s
          forwards;
      }
      a:nth-child(4) li {
        animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.55s 1.1s
          forwards;
        border-bottom: solid var(--offWhite) 1px;
      }
      a:nth-child(5) li {
        animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.55s 1.3s
          forwards;
      }
      a:nth-child(6) li {
        animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.55s 1.5s
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
    <NavStyles open={open}>
      <div className={scroll ? 'active nav__wrapper' : 'nav__wrapper'}>
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
              <li className="willFade navFade">
                <Link to="/#about">Services</Link>
              </li>
              <li className="willFade navFade">
                <Link to="/#experience">Specialisms</Link>
              </li>
              <li className="willFade navFade">
                <Link to="/#work">Company</Link>
              </li>
              <li className="willFade navFade">
                <Link to="/#blog">Resources</Link>
              </li>
              <button type="button" className="btn btn--main">
                <span>Get started</span>
              </button>
            </ul>
          </div>
        </div>
        <div className="menu" open={open}>
          <ul>
            <Link to="/services" onClick={() => setOpen(!open)}>
              <li>Services</li>
            </Link>
            <Link to="/specialisms" onClick={() => setOpen(!open)}>
              <li>Specialisms</li>
            </Link>
            <Link to="/company" onClick={() => setOpen(!open)}>
              <li>Company</li>
            </Link>
            <Link to="/resources" onClick={() => setOpen(!open)}>
              <li>Resources</li>
            </Link>
            <a
              href="mailto:contact@nick-east.com?subject=Request Resume"
              onClick={() => setOpen(!open)}
            >
              <li className="menu--button">
                <button type="button" className="btn btn--main nav-button">
                  <span>Get started</span>
                </button>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </NavStyles>
  );
};

export default Nav;
