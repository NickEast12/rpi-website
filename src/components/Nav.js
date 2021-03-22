import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import NutrackerLogo from '../assets/images/nutcracker-logo.png';

const NavStyles = styled.nav`
  @keyframes menu {
    to {
      opacity: 1;
      visibility: visible;
    }
  }
  @keyframes menuOut {
    to {
      opacity: 0;
      visibility: hidden;
      z-index: -9999;
    }
  }

  width: 100%;
  position: fixed;
  .nav {
    position: relative;
    width: 90%;
    margin: 0 auto;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    &--logo {
      width: 185px;
      img {
        width: 100%;
      }
    }
    &--menu {
      position: absolute;
      width: 100%;
      margin-top: 3rem;
      transition: all 0.35s linear;
      /* animation: ${({ open }) => (open ? 'menuOut' : 'menu')} 0.35s both; */
      z-index: ${({ open }) => (open ? '9999' : '-99999')};
      opacity: ${({ open }) => (open ? '1' : '0')};
      visibility: ${({ open }) => (open ? 'visable' : 'hidden')};

      .desktop--menu {
        display: none;
        list-style: none;
        padding: 1rem;
        li {
          color: #ffffff;
        }
        .dropdown {
          ul {
            display: none;
          }
        }
      }
      .mobile--menu {
        padding: 1rem;
        position: relative;
        z-index: 999;
        background-color: rgba(0, 0, 0, 0.85);
        border-radius: 5px;
        /* display: ${({ open }) => (open ? 'block' : 'none')}; */
        /* opacity: ${({ open }) => (open ? '1' : '0')}; */

        &--top,
        &--lower {
          list-style: none;
          li {
            color: #ffffff;
            padding: 0.3rem 0;
            font-weight: 500;
            font-size: var(--titleExtraSmall);
          }
        }
        &--top {
        }
        &--lower {
          li {
            border-top: solid rgba(255, 255, 255, 0.95) 2px;
            padding-bottom: 8px;
            button {
              width: 75%;
              margin: 0 auto;
              text-align: center;
              padding: 0.75rem 0;
              background-color: var(--mainColour);
              border: none;
              border-radius: 30px;
              margin-top: 0.5rem;
              span {
                color: #ffffff;
                font-weight: 700;
              }
            }
          }
          .menu-btn {
            text-align: center;
          }
        }
      }
    }
    &--hamburger {
      width: 30px;
      height: 100%;
      padding-top: 5.5px;
      transition: all 0.35s linear;
      div {
        width: 100%;
        height: 3px;
        background-color: #ffffff;
        content: '';
        border-radius: 3px;
        margin-bottom: 5px;
        transition: all 0.25s linear;
        transform-origin: 3px;
        &:nth-child(1) {
          transform: ${({ open }) => (open ? 'rotate(40deg)' : 'rotate(0deg)')};
        }
        &:nth-child(2) {
          transform: ${({ open }) =>
            open ? 'translateX(50px)' : 'translateX(0)'};
          opacity: ${({ open }) => (open ? '0' : '1')};
        }
        &:nth-child(3) {
          transform: ${({ open }) =>
            open ? 'rotate(-40deg)' : 'rotate(0deg)'};
        }
      }
    }
  }
`;
const Nav = () => {
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
  return (
    <NavStyles className={scroll ? 'nav nav-active' : 'nav'} open={open}>
      <div className="nav">
        <div className="nav--logo">
          {/* <StaticImage
            src="../assets/images/nutcracker-logo.png"
            alt="Nutracker Logo"
          /> */}
          <img src={NutrackerLogo} alt="Nutracker Logo" />
        </div>
        <div className="nav--menu">
          <ul className="desktop--menu">
            <li className="dropdown">
              What we do
              <ul>
                <li>Marketing</li>
                <li>Content</li>
                <li>Social media</li>
                <li>Design</li>
                <li>Lead generation</li>
                <li>PR</li>
              </ul>
            </li>
            <li>The team</li>
            <li>News &amp; views</li>
            <li>
              <button type="button">
                <span>Contact us now</span>
              </button>
            </li>
          </ul>
          <div className="mobile--menu" open={open}>
            <ul className="mobile--menu--top">
              <li>Marketing</li>
              <li>Content</li>
              <li>Social media</li>
              <li>Design</li>
              <li>Lead generation</li>
              <li>PR</li>
            </ul>
            <ul className="mobile--menu--lower">
              <li>The team</li>
              <li>Blogs</li>
              <li>Podcasts</li>
              <li className="menu-btn">
                <button type="button">
                  <span>Contact us</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="nav--hamburger"
          onClick={() => setOpen(!open)}
          onKeyDown={() => setOpen(!open)}
          role="button"
          tabIndex={0}
          open={open}
        >
          <div />
          <div />
          <div />
        </div>
      </div>
    </NavStyles>
  );
};

export default Nav;
