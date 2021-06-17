import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const AllSpecialismsStyles = styled.section`
  width: 100%;
  .specialisms {
    padding: 3rem 0;
    width: 90%;
    margin: var(--auto);
    text-align: center;
    max-width: var(--maxWidth);
    @media only screen and (min-width: 1280px) {
      padding-bottom: 4rem;
    }
    h2 {
      font-size: 2.25rem;

      margin: var(--auto);
    }
    p {
      margin: 0.85rem auto;
      max-width: 750px;
    }
    &__boxes {
      margin-top: 1.5rem;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 1.25rem;
      @media only screen and (min-width: 375px) {
        width: 80%;
        margin: var(--auto);
        padding-top: 2rem;
      }
      &__inner {
        cursor: pointer;
        padding: 2rem 0.5rem;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        svg {
          width: 60px;
          height: 60px;
        }
        h4 {
          margin-top: 1rem;
          font-size: 1.5rem;
        }

        &:nth-child(even) {
          border-top: solid #66c2ab 8px;
        }
        &:nth-child(odd) {
          border-top: solid #73d0d9 8px;
        }
      }
      @media only screen and (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
      }
      @media only screen and (min-width: 765px) {
        grid-template-columns: repeat(3, 1fr);
        width: 100%;
        will-change: opacity;
        transition: opacity 0.35s ease;
        &:hover {
          .specialisms__boxes__inner {
            opacity: 0.5;
          }
        }
        &__inner {
          padding: 1rem;
          will-change: opacity;
          transition: opacity 0.35s ease;
          &:hover {
            opacity: 1 !important;
          }
        }
      }
      @media only screen and (min-width: 1024px) {
        width: 80%;
        &__inner {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
      @media only screen and (min-width: 1280px) {
        width: 80%;
        grid-gap: 0.5rem;
        &__inner {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1.5rem 0.5rem;
          h4 {
            font-size: 1.25rem;
          }
        }
      }
    }
  }
`;
const AllSpecialisms = ({ title, text }) => {
  const boxes = [
    {
      name: 'Retained Search',
      link: '/specialisms#retained-search',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="prefix__Layer_1"
          x={0}
          y={0}
          viewBox="0 0 372.2 358.5"
          xmlSpace="preserve"
        >
          <style>
            {
              '.prefix__st3{fill:#ffd131}.prefix__st6{fill:none;stroke:#88f5ff;stroke-width:12;stroke-linecap:round;stroke-miterlimit:10}'
            }
          </style>
          <path
            d="M58.6 80.1C120.9 18.3 229 3 301.9 59.6c75.2 58.3 90.6 175.6 43.7 232.6-24.8 30.2-61.5 36.7-111.4 45.5-65.3 11.5-155.9 27.4-204.1-26.7-50.4-56.6-35.2-167.7 28.5-230.9z"
            fill="#b5e3df"
          />
          <path
            fill="none"
            stroke="#519399"
            strokeWidth={25}
            strokeMiterlimit={10}
            d="M211.4 208.4l33.9 33.9"
          />
          <circle
            cx={126.7}
            cy={123.9}
            r={115.9}
            fill="#edf8f1"
            stroke="#071841"
            strokeWidth={16}
            strokeMiterlimit={10}
          />
          <path
            className="prefix__st3"
            d="M151.2 92.4h-48.5c-4.1 0-7.5 3.4-7.5 7.5l.2 46.7c0 4.1 3.4 7.5 7.5 7.5 2.3 0 4.4-1.2 5.8-2.8l2.7 45.6c.3 4.1 3.6 7.1 7.7 7.1h15.4c4.1 0 7.4-3.1 7.7-7.1l2.9-45.6c1.4 1.8 3.4 3 5.8 3 4.1 0 7.4-3.5 7.5-7.6l.2-46.7c0-4.1-3.3-7.6-7.4-7.6zM126.9 87.4c11.4 0 20.7-9.3 20.7-20.7S138.3 46 126.9 46s-20.7 9.3-20.7 20.7c0 11.5 9.2 20.7 20.7 20.7z"
          />
          <path
            d="M359.7 329.5l-27.8 27.8c-1.6 1.6-4.1 1.6-5.7 0l-99.8-99.8c-1.6-1.6-1.6-4.1 0-5.7l27.8-27.8c1.6-1.6 4.1-1.6 5.7 0l99.8 99.8c1.6 1.6 1.6 4.1 0 5.7z"
            fill="#071841"
          />
          <path
            fill="none"
            stroke="#88f5ff"
            strokeWidth={6}
            strokeLinecap="round"
            strokeMiterlimit={10}
            d="M256.9 242.9l85.2 85.2"
          />
          <g>
            <path
              className="prefix__st6"
              d="M90.7 192.4a80.82 80.82 0 01-25.6-20.5c-3-3.6-5.7-7.5-8-11.4M209 126.4c-1.7 21.1-11.6 41.6-29.2 56.2-4.9 4-10.1 7.4-15.5 10.2"
            />
          </g>
        </svg>
      ),
    },
    {
      name: 'Permanent',
      link: '/specialisms#permanent',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="prefix__Layer_1"
          x={0}
          y={0}
          viewBox="0 0 398.9 361.4"
          xmlSpace="preserve"
        >
          <style>
            {
              '.prefix__st4{fill:#ffd131}.prefix__st5{fill:none;stroke:#88f5ff;stroke-width:9;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}'
            }
          </style>
          <path
            d="M344.1 260.8c-41.9 77.2-141 122.8-227.1 89.6-88.8-34.1-137.3-142-108.8-210.1 15.1-36.1 48.4-52.8 93.6-75.6C161 34.9 243.2-6.4 305 31.6c64.5 39.6 81.8 150.5 39.1 229.2z"
            fill="#b5e3df"
          />
          <path
            d="M197.7 322.8c-16.2 0-30.4-11.5-33.8-27.3-1.1-5-1-10.3.2-15.2l-55.8 12.1c-.4.1-.9.1-1.3.1-2.8 0-5.2-1.9-5.9-4.7l-12.2-56.1c-4.1 3.2-8.8 5.5-13.9 6.6-2.4.5-4.9.8-7.4.8-16.2 0-30.4-11.5-33.8-27.3-4-18.6 7.8-37.1 26.5-41.1 2.4-.5 4.9-.8 7.3-.8 2.7 0 5.5.3 8.1 1l-12-55.5c-.3-1.6 0-3.2.8-4.5.9-1.3 2.2-2.3 3.8-2.6l56.1-12.2c-3.3-4.1-5.7-9-6.8-14.3-4-18.6 7.8-37.1 26.5-41.1 2.4-.5 4.9-.8 7.4-.8 16.2 0 30.4 11.5 33.8 27.3 1.1 5.3 1 10.7-.3 15.9L240.9 71c.4-.1.9-.1 1.3-.1 2.8 0 5.2 1.9 5.9 4.7l12 55.6c4.1-3.3 8.9-5.6 14.2-6.7 2.4-.5 4.9-.8 7.4-.8 16.2 0 30.4 11.5 33.8 27.3 2 9 .3 18.3-4.7 26.1s-12.7 13.1-21.8 15.1c-2.4.5-4.9.8-7.3.8-2.8 0-5.6-.3-8.4-1l12.2 56.2c.3 1.6 0 3.2-.8 4.5s-2.2 2.3-3.8 2.6l-55.6 12c3.1 4 5.4 8.7 6.4 13.8 2 9 .3 18.3-4.7 26.1-5 7.8-12.7 13.1-21.8 15.1-2.6.2-5.1.5-7.5.5z"
            fill="#edf8f1"
          />
          <path
            d="M151.4 45.8c13.2 0 25 9.2 27.9 22.5 1.8 8.4-.3 16.6-5 23l67.6-14.7 14.6 67.3c3.9-6.8 10.5-12 18.8-13.8 2-.4 4.1-.7 6.1-.7 13.2 0 25 9.2 27.9 22.5 3.3 15.4-6.5 30.7-21.9 34-2 .4-4.1.7-6 .7-6.1 0-12-2-16.8-5.5l14.7 67.9-67 14.5c6.5 3.9 11.5 10.4 13.3 18.5 3.3 15.4-6.5 30.7-21.9 34-2 .4-4.1.7-6.1.7-13.2 0-25-9.2-27.9-22.5-1.7-8 .1-16 4.4-22.3l-67.2 14.6-14.6-67.6c-3.9 6.7-10.4 11.7-18.6 13.5-2 .4-4.1.7-6.1.7-13.2 0-25-9.2-27.9-22.5-3.3-15.4 6.5-30.7 21.9-34 2-.4 4.1-.7 6-.7 6 0 11.7 1.9 16.5 5.2l-14.5-67 67.9-14.7c-6.9-3.9-12.2-10.5-14-18.9-3.3-15.4 6.5-30.7 21.9-34 2-.5 4-.7 6-.7m0-12c-2.9 0-5.8.3-8.6.9-10.6 2.3-19.7 8.6-25.5 17.7-5.9 9.1-7.8 20-5.5 30.6.7 3.1 1.7 6.1 3.1 9l-47.8 10.3c-3.1.7-5.8 2.6-7.5 5.2-1.7 2.7-2.3 5.9-1.6 9l10.2 47.2h-.4c-2.9 0-5.8.3-8.6.9-10.6 2.3-19.7 8.6-25.5 17.7-5.9 9.1-7.8 20-5.5 30.6 2 9.1 7.1 17.3 14.4 23.1 7.2 5.7 16.2 8.9 25.3 8.9 2.9 0 5.8-.3 8.6-.9 3-.6 5.9-1.6 8.6-2.9l10.4 47.8c1.2 5.6 6.2 9.5 11.7 9.5.8 0 1.7-.1 2.6-.3l47.6-10.3c0 3 .3 5.9.9 8.9 2 9.1 7.1 17.3 14.4 23.1 7.2 5.7 16.2 8.9 25.3 8.9 2.9 0 5.8-.3 8.6-.9 10.6-2.3 19.7-8.6 25.5-17.7 5.9-9.1 7.8-20 5.5-30.6-.6-2.9-1.6-5.8-2.8-8.4l47.4-10.3c6.5-1.4 10.6-7.8 9.2-14.3L281 198.6h.7c2.9 0 5.8-.3 8.6-.9 21.9-4.7 35.8-26.4 31.1-48.3-2-9.1-7.1-17.3-14.4-23.1-7.2-5.7-16.2-8.9-25.3-8.9-2.9 0-5.8.3-8.6.9-3.1.7-6 1.7-8.8 3L254.1 74c-.7-3.1-2.6-5.8-5.2-7.5-2-1.3-4.2-1.9-6.5-1.9-.8 0-1.7.1-2.5.3l-47.5 10.3c.1-3.2-.2-6.3-.9-9.5-2-9.1-7.1-17.3-14.4-23.1-7.6-5.6-16.6-8.8-25.7-8.8z"
            fill="#071841"
          />
          <path
            d="M392 77.8c-3.5-2.3-7.7-2.7-11.5-1.7l18.4-28.9-74-47.2-18.3 28.7c-.7-3.8-2.8-7.3-6.3-9.5-6.6-4.2-15.4-2.3-19.6 4.3-4.2 6.6-2.3 15.4 4.3 19.6 3.5 2.2 7.6 2.7 11.3 1.7l-18.5 29L308 93c-1.3-3.7-1-8 1.3-11.6 3.9-6.2 12.1-8 18.3-4 6.2 3.9 8 12.1 4 18.3-2.3 3.6-6 5.7-9.9 6.1l30.1 19.2 18.6-29.1c.6 3.8 2.8 7.4 6.4 9.7 6.6 4.2 15.4 2.3 19.6-4.3 4.1-6.5 2.2-15.3-4.4-19.5z"
            fill="#519399"
          />
          <path
            className="prefix__st4"
            d="M180.9 95s-44.4 9.2-47.5 9.8c-4.1.8-6.6 4.9-5.8 8.9l9.6 45.7c.9 4 4.8 6.7 8.8 5.9 2.3-.5 4.1-2 5.1-3.9l12.1 43.9c1.1 3.9 5 6.2 9 5.4l15.1-3.1c4-.8 6.7-4.5 6.1-8.6l-6.4-45.2c1.7 1.5 4 2.2 6.2 1.7 4-.8 6.6-4.9 5.8-8.9l-9.3-45.7c-.8-4-4.7-6.7-8.8-5.9zM156.1 95.1c11.2-2.3 18.4-13.3 16-24.4-2.3-11.2-13.3-18.4-24.4-16-11.2 2.3-18.4 13.3-16.1 24.4 2.4 11.1 13.4 18.3 24.5 16z"
          />
          <path
            className="prefix__st5"
            d="M156.7 252.3l-32.9 7.2-6.4-29.7M219.4 238.3l32.9-6.9-6.2-29.8"
          />
        </svg>
      ),
    },
    {
      name: 'Interim & Contract',
      link: '/specialisms#interim-contract',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="prefix__Layer_1"
          x={0}
          y={0}
          viewBox="0 0 377 352.3"
          xmlSpace="preserve"
        >
          <style>
            {
              '.prefix__st3{fill:none;stroke:#071841;stroke-width:16;stroke-linecap:round;stroke-miterlimit:10}.prefix__st5{fill:#ffd131}'
            }
          </style>
          <path
            d="M23.4 251.7c41.9 77.2 141 122.8 227.1 89.6 88.8-34.2 137.2-142.1 108.8-210.2-15.1-36.1-48.4-52.8-93.6-75.6-59.2-29.8-141.4-71.1-203.2-33.1C-1.9 62-19.3 172.9 23.4 251.7z"
            fill="#b5e3df"
          />
          <circle
            cx={229.5}
            cy={123.9}
            r={115.9}
            fill="#edf8f1"
            stroke="#071841"
            strokeWidth={16}
            strokeMiterlimit={10}
          />
          <path
            d="M229.5 297.8c-96 0-173.9-77.9-173.9-173.9"
            fill="none"
            stroke="#4a878c"
            strokeWidth={16}
            strokeLinecap="round"
            strokeMiterlimit={10}
          />
          <path className="prefix__st3" d="M369 227.8c-.1.1-.2.3-.3.4" />
          <path
            d="M341.4 257c-15.6 13.2-33.6 23.6-53.2 30.6"
            fill="none"
            stroke="#071841"
            strokeWidth={16}
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeDasharray=".9949,39.7964"
          />
          <path className="prefix__st3" d="M269.2 293.3c-.2 0-.3.1-.5.1" />
          <path
            className="prefix__st5"
            d="M253.9 92.4h-48.5c-4.1 0-7.5 3.4-7.5 7.5l.2 46.7c0 4.1 3.4 7.5 7.5 7.5 2.3 0 4.4-1.2 5.8-2.8l2.8 45.6c.3 4.1 3.6 7.1 7.7 7.1h15.4c4.1 0 7.4-3.1 7.7-7.1l2.9-45.6c1.4 1.8 3.4 3 5.8 3 4.1 0 7.4-3.5 7.5-7.6l.2-46.7c0-4.1-3.3-7.6-7.5-7.6zM229.7 87.4c11.4 0 20.7-9.3 20.7-20.7S241.1 46 229.7 46c-11.4 0-20.7 9.3-20.7 20.7 0 11.5 9.2 20.7 20.7 20.7z"
          />
          <path
            fill="none"
            stroke="#4a878c"
            strokeWidth={16}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            d="M33.4 136.7l22.5-22.5 22.5 22.5"
          />
          <path
            d="M269.2 57.6c17.9 11.3 31.5 29.5 36.3 51.9 1.3 6.2 1.9 12.4 1.8 18.4"
            fill="none"
            stroke="#88f5ff"
            strokeWidth={12}
            strokeLinecap="round"
            strokeMiterlimit={10}
          />
          <path
            fill="none"
            stroke="#88f5ff"
            strokeWidth={12}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            d="M321.4 118.3L306 133.7l-15.4-15.4"
          />
        </svg>
      ),
    },
    {
      name: 'Project Solutions / SoW',
      link: '/specialisms#project-solutions',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="prefix__Layer_1"
          x={0}
          y={0}
          viewBox="0 0 380.9 410.3"
          xmlSpace="preserve"
        >
          <style>
            {
              '.prefix__st3{fill:#ffd131}.prefix__st6{fill:none;stroke:#88f5ff;stroke-width:12;stroke-linecap:round;stroke-miterlimit:10}'
            }
          </style>
          <path
            d="M380.8 221.8c-3.2-87.7-71.7-172.7-163.6-181.2-94.8-8.8-186.1 66.3-190.9 140-2.5 39 19.8 68.8 50.3 109.3 39.8 53 95.1 126.5 167.3 120 75.4-7 140.2-98.5 136.9-188.1z"
            fill="#b5e3df"
          />
          <path
            d="M339.8 222.4l-21.9-2.6c-2.2-8.4-5.5-16.2-9.7-23.6l13.6-17.3c2.1-2.7 1.8-6.8-.6-9.2l-22.6-22.6c-2.4-2.4-6.5-2.6-9.2-.6l-17.3 13.6c-7.3-4.2-15.2-7.5-23.5-9.7l-2.6-21.9c-.4-3.3-3.5-6.1-6.9-6.1h-31.9c-3.4 0-6.5 2.7-6.9 6.1l-2.6 21.9c-8.3 2.2-16.2 5.5-23.5 9.7l-17.3-13.6c-2.6-2.1-6.8-1.8-9.2.5l-22.6 22.6c-2.4 2.4-2.6 6.5-.5 9.2l13.6 17.3c-4.2 7.3-7.5 15.2-9.7 23.5l-21.9 2.6c-3.3.4-6.1 3.5-6.1 6.9V261c0 3.4 2.7 6.4 6.1 6.9l21.9 2.6c2.2 8.3 5.5 16.2 9.7 23.5l-13.6 17.3c-2.1 2.7-1.8 6.8.6 9.2l22.5 22.6c2.4 2.4 6.5 2.6 9.2.6l17.3-13.6c7.3 4.2 15.2 7.5 23.5 9.7l2.6 21.9c.4 3.4 3.5 6.1 6.9 6.1h31.9c3.4 0 6.5-2.7 6.9-6.1l2.6-21.9c8.4-2.2 16.2-5.5 23.5-9.7l17.3 13.6c2.7 2.1 6.8 1.8 9.2-.5l22.6-22.6c2.4-2.4 2.6-6.5.5-9.2l-13.6-17.3c4.2-7.3 7.5-15.2 9.7-23.5l21.9-2.6c3.4-.4 6.1-3.5 6.1-6.9v-31.9c0-3.3-2.7-6.4-6-6.8z"
            fill="#edf8f1"
            stroke="#071841"
            strokeWidth={12}
            strokeMiterlimit={10}
          />
          <path
            d="M103.8 147.3l-9.9 1.5c-2-3.4-4.4-6.4-7.1-9.1l3.9-9.2c.6-1.4 0-3.2-1.3-3.9l-12.6-7.2c-1.3-.8-3.2-.4-4.1.9l-5.9 8c-3.7-1-7.5-1.5-11.4-1.4l-3.8-9.3c-.6-1.4-2.3-2.2-3.7-1.8l-14 3.8c-1.5.4-2.5 2-2.3 3.5l1.5 9.9c-3.4 2-6.4 4.4-9.1 7.1l-9.2-3.9c-1.4-.6-3.2 0-3.9 1.3l-7.2 12.6c-.8 1.3-.4 3.2.9 4.1l8 5.9c-1 3.7-1.5 7.5-1.4 11.5l-9.3 3.8c-1.4.6-2.2 2.3-1.8 3.7l3.8 14c.4 1.5 2 2.5 3.5 2.3l9.9-1.5c2 3.4 4.4 6.4 7.1 9.1l-3.9 9.2c-.6 1.4 0 3.2 1.3 3.9l12.6 7.2c1.3.8 3.2.4 4.1-.9l5.9-8c3.7 1 7.5 1.5 11.5 1.4l3.8 9.3c.6 1.4 2.3 2.2 3.7 1.8l14-3.8c1.5-.4 2.5-2 2.3-3.5l-1.5-9.9c3.4-2 6.4-4.4 9.1-7.1l9.2 3.9c1.4.6 3.2 0 3.9-1.3l7.2-12.6c.8-1.3.4-3.2-.9-4.1l-8-5.9c1-3.7 1.5-7.5 1.4-11.5l9.3-3.8c1.4-.6 2.3-2.2 1.8-3.7l-3.8-14c-.5-1.5-2-2.6-3.6-2.3zM62.9 198c-14.8 4.1-30.1-4.7-34.2-19.5s4.7-30.1 19.5-34.2 30.1 4.7 34.2 19.5S77.8 194 62.9 198z"
            fill="#4a878c"
          />
          <path
            className="prefix__st3"
            d="M246.8 211h-48.5c-4.1 0-7.5 3.4-7.5 7.5l.2 46.7c0 4.1 3.4 7.5 7.5 7.5 2.3 0 4.4-1.2 5.8-2.8l2.9 45.5c.3 4.1 3.6 7.1 7.7 7.1h15.4c4.1 0 7.4-3.1 7.7-7.1l2.9-45.6c1.4 1.8 3.4 3 5.8 3 4.1 0 7.4-3.5 7.5-7.6l.2-46.7c-.1-4-3.4-7.5-7.6-7.5zM222.5 206c11.4 0 20.7-9.3 20.7-20.7s-9.3-20.7-20.7-20.7c-11.4 0-20.7 9.3-20.7 20.7.1 11.5 9.3 20.7 20.7 20.7z"
          />
          <circle cx={301.7} cy={67} r={37.1} fill="#fff" />
          <path
            d="M358.5 34.6l-12 2.5c-2.7-4-5.8-7.6-9.3-10.6l4.1-11.5c.6-1.8-.2-3.9-1.9-4.7l-16.1-7.9c-1.7-.8-3.9-.2-4.9 1.4l-6.7 10.3c-4.6-.9-9.3-1.2-14.1-.9l-5.3-11c-.8-1.7-2.9-2.6-4.7-2l-16.8 5.7c-1.8.6-2.9 2.6-2.5 4.4l2.5 12c-4 2.7-7.6 5.8-10.6 9.3l-11.5-4c-1.8-.6-3.9.2-4.7 1.9l-7.8 15.9c-.8 1.7-.2 3.9 1.4 4.9l10.3 6.7c-.9 4.6-1.2 9.3-.9 14.1l-11 5.3c-1.7.8-2.6 2.9-2 4.7l5.7 16.8c.6 1.8 2.6 2.9 4.4 2.5l12-2.5c2.7 4 5.8 7.5 9.3 10.6l-4 11.6c-.6 1.8.2 3.9 1.9 4.7l15.9 7.8c1.7.8 3.9.2 4.9-1.3l6.7-10.3c4.6.9 9.3 1.2 14.1.9l5.3 11c.8 1.7 2.9 2.6 4.7 2l16.8-5.7c1.8-.6 2.9-2.6 2.5-4.4l-2.5-12c4-2.7 7.6-5.8 10.6-9.3l11.6 4c1.8.6 3.9-.2 4.7-1.9l7.8-15.9c.8-1.7.2-3.9-1.4-4.9l-10.3-6.7c.9-4.6 1.2-9.3.9-14.1l11-5.3c1.7-.8 2.6-2.9 2-4.7l-5.7-16.8c-.6-1.9-2.6-3-4.4-2.6zm-46.2 65.1c-17.8 6.1-37.2-3.4-43.3-21.2-6.1-17.8 3.4-37.2 21.2-43.3 17.8-6.1 37.2 3.4 43.3 21.2 6.1 17.9-3.4 37.3-21.2 43.3z"
            fill="#73d0d9"
          />
          <path
            className="prefix__st6"
            d="M176.6 287.2c-23.7-23.7-23.7-62.3 0-86M270 287.2c23.7-23.7 23.7-62.3 0-86"
          />
        </svg>
      ),
    },
    {
      name: 'Visa and Payroll Services',
      link: '/specialisms#visa-payroll-services',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="prefix__Layer_1"
          x={0}
          y={0}
          viewBox="0 0 463 387.3"
          xmlSpace="preserve"
        >
          <style>
            {
              '.prefix__st3{fill:#ffd131}.prefix__st4{fill:none;stroke:#88f5ff;stroke-width:12;stroke-miterlimit:10}'
            }
          </style>
          <path
            d="M129.5 244.3c-22.1-85 19.2-186 104.8-220.5 88.3-35.6 197.3 10.2 223 79.4 13.6 36.7.7 71.6-16.8 119.1-23 62.2-54.8 148.5-125.9 162.9-74.2 15-162.6-54.1-185.1-140.9z"
            fill="#b5e3df"
          />
          <circle cx={216.3} cy={167.8} r={110.8} fill="#edf8f1" />
          <path
            d="M76 86.1c25.7-42.3 70.4-72.4 123.5-77.4 89.2-8.5 168.4 57 176.9 146.2s-57 168.4-146.2 176.9c-63.6 6-122.1-25.5-153.5-76.4"
            fill="none"
            stroke="#4a878c"
            strokeWidth={16}
            strokeLinecap="round"
            strokeMiterlimit={10}
          />
          <path
            className="prefix__st3"
            d="M56 130.3H7.5c-4.1 0-7.5 3.4-7.5 7.5l.2 46.7c0 4.1 3.4 7.5 7.5 7.5 2.3 0 4.4-1.2 5.8-2.8l2.9 45.5c.3 4.1 3.6 7.1 7.7 7.1h15.4c4.1 0 7.4-3.1 7.7-7.1l2.9-45.6c1.4 1.8 3.4 3 5.8 3 4.1 0 7.4-3.5 7.5-7.6l.2-46.7c-.1-4-3.4-7.5-7.6-7.5zM31.7 125.3c11.4 0 20.7-9.3 20.7-20.7s-9.3-20.7-20.7-20.7S11 93.2 11 104.6c.1 11.5 9.3 20.7 20.7 20.7z"
          />
          <path
            className="prefix__st4"
            d="M214.7 281.9V54.6M101.1 168.2h227.3M214.2 52.2s-144.1 103.3 0 234.8M215.5 52.2s144.1 103.3 0 234.8"
          />
          <path
            fill="none"
            stroke="#4a878c"
            strokeWidth={16}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            d="M64.1 278.4l6.6-31.1 31.1 6.6"
          />
          <circle
            cx={214.8}
            cy={170.2}
            r={115.9}
            fill="none"
            stroke="#071841"
            strokeWidth={16}
            strokeMiterlimit={10}
          />
        </svg>
      ),
    },
    {
      name: 'Campaign Management',
      link: '/specialisms#campaign-management',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="prefix__Layer_1"
          x={0}
          y={0}
          viewBox="0 0 414 399.5"
          xmlSpace="preserve"
        >
          <style>
            {
              '.prefix__st2{fill:#ffd131}.prefix__st4,.prefix__st5,.prefix__st6{fill:none;stroke:#4a878c;stroke-width:12;stroke-linecap:round;stroke-miterlimit:10}.prefix__st5,.prefix__st6{stroke:#88f5ff;stroke-width:16}.prefix__st6{stroke:#071841;stroke-width:12}'
            }
          </style>
          <path
            d="M57 197.2c11.8-87 88.4-164.8 180.7-164.3 95.2.6 178.7 84.3 176.2 158.1-1.3 39.1-26.5 66.5-60.8 103.8-44.8 48.8-107 116.6-178.3 102.9C100.4 383.5 44.9 286 57 197.2z"
            fill="#b5e3df"
          />
          <circle
            cx={161}
            cy={159.3}
            r={115.9}
            fill="#edf8f1"
            stroke="#071841"
            strokeWidth={16}
            strokeMiterlimit={10}
          />
          <path
            className="prefix__st2"
            d="M185.5 127.8H137c-4.1 0-7.5 3.4-7.5 7.5l.2 46.7c0 4.1 3.4 7.5 7.5 7.5 2.3 0 4.4-1.2 5.8-2.8l2.9 45.5c.3 4.1 3.6 7.1 7.7 7.1H169c4.1 0 7.4-3.1 7.7-7.1l2.9-45.6c1.4 1.8 3.4 3 5.8 3 4.1 0 7.4-3.5 7.5-7.6l.2-46.7c-.2-4-3.5-7.5-7.6-7.5zM161.2 122.8c11.4 0 20.7-9.3 20.7-20.7s-9.3-20.7-20.7-20.7-20.7 9.3-20.7 20.7 9.2 20.7 20.7 20.7z"
          />
          <circle
            cx={316.9}
            cy={297.7}
            r={55.6}
            fill="#fff"
            stroke="#4a878c"
            strokeWidth={9}
            strokeMiterlimit={10}
          />
          <path
            className="prefix__st4"
            d="M316.7 231.3v22.4M317 342.2v22.4M250.3 297.8h22.4M361.2 297.5h22.4"
          />
          <path
            className="prefix__st5"
            d="M160.1 8v51.3M160.7 262v51.3M8 160.2h51.3M262.1 159.6h51.3"
          />
          <path
            className="prefix__st6"
            d="M113 204.9c-23.7-23.7-23.7-62.3 0-86M206.4 204.9c23.7-23.7 23.7-62.3 0-86"
          />
          <circle cx={317} cy={297.1} r={30.9} fill="#73d0d9" />
          <circle cx={317} cy={297.1} r={22.4} fill="#071841" />
        </svg>
      ),
    },
  ];
  return (
    <AllSpecialismsStyles>
      <div className="specialisms">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="specialisms__boxes">
          {boxes.map((box) => (
            <div className="specialisms__boxes__inner" key={box.name}>
              <Link to={box.link}>
                {box.icon}
                <h4>{box.name}</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </AllSpecialismsStyles>
  );
};

export default AllSpecialisms;
