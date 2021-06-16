import React from 'react';
import styled from 'styled-components';
//* Local Imports
import Illustration from '../../svgs/map_pins.svg';

const areaData = [
  {
    icon: (
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 197.4 243.3"
      >
        <defs>
          <clipPath id="prefix__a" transform="translate(-.1)">
            <path fill="none" d="M0 0h197.6v243.4H0z" />
          </clipPath>
        </defs>
        <circle cx={100.2} cy={101.7} r={93.7} fill="#fff" />
        <g clipPath="url(#prefix__a)">
          <path
            d="M197.4 98.7A98.71 98.71 0 0028.9 28.9 98 98 0 000 98.7a108.39 108.39 0 001.4 16.2l-.1-.1s8.5 71.6 97.5 128.5c88.9-56.8 97.5-128.5 97.5-128.5l-.1.1a122.24 122.24 0 001.2-16.2zM98.7 15.9a82.8 82.8 0 11-82.8 82.8 82.77 82.77 0 0182.8-82.8z"
            fill="#b71c29"
          />
        </g>
        <g opacity={0.6} fill="#b61f29">
          <path d="M83 49.9h-2.1c-1.2 0-2.4 0-3.7.1-8 .4-17.6 6.1-22.3 13.9 1.1-1.1 2.3-2.1 3.6-3.2 6.3-5 15.1-8.7 24.5-10.8z" />
          <path d="M152.8 89a56.31 56.31 0 00-3.6-9c-1.2-2.3-2.1-.3-3.3 2.3 0 4.5-.9 8.7-2.3 11a38.54 38.54 0 01-7.9 9.2 45.77 45.77 0 011.9 10.2 35.29 35.29 0 01-.7 9.7c-2.4 11.8-11.8 17.5-23.8 17.5a50.63 50.63 0 01-19.3-4.2 77.23 77.23 0 01-19.7-12.8c-6.5-5.8-12.6-13-16.3-21.3a39.73 39.73 0 01-2.6-25.2c1.8-7.5 10.9-15.5 16-16.7a35.48 35.48 0 018.6-1c23.1 0 48.7 20.4 55.8 43.8a36.12 36.12 0 007.9-9.2c1.4-2.3 2.3-6.5 2.3-11-1.2 2.6-2.8 5.8-5.4 6-12.5-13.2-23.6-32.1-47-37.2-2 .2-3.9.5-5.7.8 1.8-.3 3.8-.6 5.8-.8A67 67 0 0083 49.8c-9.4 2-18.2 5.8-24.5 10.8a37.28 37.28 0 00-3.6 3.2 19.17 19.17 0 00-2.4 5.5c-.4 1.7-.8 3.3-1.1 5a66 66 0 00-.4 18.3c2.1 18.2 11.2 35.7 23.5 46.5 6.4 5.6 13.7 9.4 21.3 10.5h19.7c29-6.6 45.1-34.1 37.3-60.6z" />
        </g>
        <g opacity={0.3} fill="#b61f29">
          <path d="M96.4 115.6c-14.6 0-29-4.5-38.6-13.9a34.91 34.91 0 01-4.9-5.9 20.16 20.16 0 01-1.8-3.2c2.1 18.2 11.2 35.8 23.5 46.5-3.1-3.9-3.4-11.9-.5-16.1a2.65 2.65 0 01.5-.6c8.5.2 17.6 1.5 26.9 1.5 11.9 0 24.2-2.1 36-11.1a39.9 39.9 0 00-1.9-10.2c-10 8.5-24.6 13-39.2 13z" />
          <path d="M150 73.4c-8.6-14.5-26.1-22.7-39.9-24.3a100.52 100.52 0 00-21-.1c-2 .3-4.1.6-6.1 1.1a56.88 56.88 0 0110.5 1.3 77.69 77.69 0 018.5-.5c15.2 0 31.7 4.6 41 19.5 2 3.2 2.9 7.8 2.9 12.2.9-2 1.7-3.6 2.5-3.3-.8-.3-1.6 1.3-2.5 3.3 0 4.5-.9 8.7-2.3 11a38.54 38.54 0 01-7.9 9.2 45.77 45.77 0 011.9 10.2 61.81 61.81 0 008.9-8.3c3.4-3.8 5.7-9.6 6.4-15.5.5-5.7-.3-11.4-2.9-15.8zM51.1 92.7a20.32 20.32 0 01.4-18.3 40.33 40.33 0 011.1-5 19.17 19.17 0 012.4-5.5c-25.4 24.4-13.6 63.5 19.7 75.3-12.4-10.7-21.5-28.3-23.6-46.5z" />
          <path d="M51.5 74.4c3.8-7.5 11.7-14.1 22.2-18.5a72.9 72.9 0 0119.8-4.7A67 67 0 0083 49.9c-9.4 2-18.2 5.8-24.5 10.8a37.28 37.28 0 00-3.6 3.2 19.17 19.17 0 00-2.4 5.5c-.4 1.6-.7 3.3-1 5z" />
        </g>
        <path
          d="M130.3 142.2a56.11 56.11 0 01-16.1 2.1c-15.6-.3-11.4-9.1-8.5-12.1 15.3-15.8 38.1-31 33.7-65.9-.8-6-4.7-12.3-10.6-17.4 0 0-17.3-14.3-43.1.2C65 60.7 49.5 84.4 48.6 103.8c-.8 19.1 7.7 31 20.2 39.4 15.7 10.5 39.7 8.5 39.7 8.5 22.1-2.1 27.4-11 21.8-9.5zm-59-11.1c-17.9-2.3-23.4-21.2-16.4-41.9 3.6-10.8 16.1-29.9 32.7-39 2.4-1.2 19.2-9.2 32.8.5 4.3 3.2 7.7 7.4 8.7 10.5 9.9 30.5-24 74.2-57.8 69.9z"
          fill="#b61f29"
        />
      </svg>
    ),
    location: 'UK & Europe',
    description:
      'RP International’s UK operations are entering their 21st year. Our UK operations are based in central London, where we service clients throughout the UK and mainland Europe and have been working in recent times with numerous Silicon Valley businesses looking to expand their operations outside of the US.',
  },
  {
    icon: (
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 197.4 243.3"
      >
        <defs>
          <clipPath id="prefix__a" transform="translate(-.1)">
            <path fill="none" d="M0 0h197.6v243.4H0z" />
          </clipPath>
        </defs>
        <circle cx={100.2} cy={101.7} r={93.7} fill="#fff" />
        <g clipPath="url(#prefix__a)">
          <path
            d="M197.4 98.7A98.71 98.71 0 0028.9 28.9 98 98 0 000 98.7a108.39 108.39 0 001.4 16.2l-.1-.1s8.5 71.6 97.5 128.5c88.9-56.8 97.5-128.5 97.5-128.5l-.1.1a122.24 122.24 0 001.2-16.2zM98.7 15.9a82.8 82.8 0 11-82.8 82.8 82.77 82.77 0 0182.8-82.8z"
            fill="#b71c29"
          />
        </g>
        <g opacity={0.6} fill="#b61f29">
          <path d="M83 49.9h-2.1c-1.2 0-2.4 0-3.7.1-8 .4-17.6 6.1-22.3 13.9 1.1-1.1 2.3-2.1 3.6-3.2 6.3-5 15.1-8.7 24.5-10.8z" />
          <path d="M152.8 89a56.31 56.31 0 00-3.6-9c-1.2-2.3-2.1-.3-3.3 2.3 0 4.5-.9 8.7-2.3 11a38.54 38.54 0 01-7.9 9.2 45.77 45.77 0 011.9 10.2 35.29 35.29 0 01-.7 9.7c-2.4 11.8-11.8 17.5-23.8 17.5a50.63 50.63 0 01-19.3-4.2 77.23 77.23 0 01-19.7-12.8c-6.5-5.8-12.6-13-16.3-21.3a39.73 39.73 0 01-2.6-25.2c1.8-7.5 10.9-15.5 16-16.7a35.48 35.48 0 018.6-1c23.1 0 48.7 20.4 55.8 43.8a36.12 36.12 0 007.9-9.2c1.4-2.3 2.3-6.5 2.3-11-1.2 2.6-2.8 5.8-5.4 6-12.5-13.2-23.6-32.1-47-37.2-2 .2-3.9.5-5.7.8 1.8-.3 3.8-.6 5.8-.8A67 67 0 0083 49.8c-9.4 2-18.2 5.8-24.5 10.8a37.28 37.28 0 00-3.6 3.2 19.17 19.17 0 00-2.4 5.5c-.4 1.7-.8 3.3-1.1 5a66 66 0 00-.4 18.3c2.1 18.2 11.2 35.7 23.5 46.5 6.4 5.6 13.7 9.4 21.3 10.5h19.7c29-6.6 45.1-34.1 37.3-60.6z" />
        </g>
        <g opacity={0.3} fill="#b61f29">
          <path d="M96.4 115.6c-14.6 0-29-4.5-38.6-13.9a34.91 34.91 0 01-4.9-5.9 20.16 20.16 0 01-1.8-3.2c2.1 18.2 11.2 35.8 23.5 46.5-3.1-3.9-3.4-11.9-.5-16.1a2.65 2.65 0 01.5-.6c8.5.2 17.6 1.5 26.9 1.5 11.9 0 24.2-2.1 36-11.1a39.9 39.9 0 00-1.9-10.2c-10 8.5-24.6 13-39.2 13z" />
          <path d="M150 73.4c-8.6-14.5-26.1-22.7-39.9-24.3a100.52 100.52 0 00-21-.1c-2 .3-4.1.6-6.1 1.1a56.88 56.88 0 0110.5 1.3 77.69 77.69 0 018.5-.5c15.2 0 31.7 4.6 41 19.5 2 3.2 2.9 7.8 2.9 12.2.9-2 1.7-3.6 2.5-3.3-.8-.3-1.6 1.3-2.5 3.3 0 4.5-.9 8.7-2.3 11a38.54 38.54 0 01-7.9 9.2 45.77 45.77 0 011.9 10.2 61.81 61.81 0 008.9-8.3c3.4-3.8 5.7-9.6 6.4-15.5.5-5.7-.3-11.4-2.9-15.8zM51.1 92.7a20.32 20.32 0 01.4-18.3 40.33 40.33 0 011.1-5 19.17 19.17 0 012.4-5.5c-25.4 24.4-13.6 63.5 19.7 75.3-12.4-10.7-21.5-28.3-23.6-46.5z" />
          <path d="M51.5 74.4c3.8-7.5 11.7-14.1 22.2-18.5a72.9 72.9 0 0119.8-4.7A67 67 0 0083 49.9c-9.4 2-18.2 5.8-24.5 10.8a37.28 37.28 0 00-3.6 3.2 19.17 19.17 0 00-2.4 5.5c-.4 1.6-.7 3.3-1 5z" />
        </g>
        <path
          d="M130.3 142.2a56.11 56.11 0 01-16.1 2.1c-15.6-.3-11.4-9.1-8.5-12.1 15.3-15.8 38.1-31 33.7-65.9-.8-6-4.7-12.3-10.6-17.4 0 0-17.3-14.3-43.1.2C65 60.7 49.5 84.4 48.6 103.8c-.8 19.1 7.7 31 20.2 39.4 15.7 10.5 39.7 8.5 39.7 8.5 22.1-2.1 27.4-11 21.8-9.5zm-59-11.1c-17.9-2.3-23.4-21.2-16.4-41.9 3.6-10.8 16.1-29.9 32.7-39 2.4-1.2 19.2-9.2 32.8.5 4.3 3.2 7.7 7.4 8.7 10.5 9.9 30.5-24 74.2-57.8 69.9z"
          fill="#b61f29"
        />
      </svg>
    ),
    location: 'MEA',
    description:
      'After identifying a major phase of growth and transformation in the Middle East and Africa, we opened our Dubai offices in 2002. We’ve brokered over 3000 regional permanent placements including African and GCC nationals as well as expats for CXO, SVP and VP positions. We are the partner of choice for the UAE and the rest of the GCC for Visa and Payroll Services.',
  },
  {
    icon: (
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 197.4 243.3"
      >
        <defs>
          <clipPath id="prefix__a" transform="translate(-.1)">
            <path fill="none" d="M0 0h197.6v243.4H0z" />
          </clipPath>
        </defs>
        <circle cx={100.2} cy={101.7} r={93.7} fill="#fff" />
        <g clipPath="url(#prefix__a)">
          <path
            d="M197.4 98.7A98.71 98.71 0 0028.9 28.9 98 98 0 000 98.7a108.39 108.39 0 001.4 16.2l-.1-.1s8.5 71.6 97.5 128.5c88.9-56.8 97.5-128.5 97.5-128.5l-.1.1a122.24 122.24 0 001.2-16.2zM98.7 15.9a82.8 82.8 0 11-82.8 82.8 82.77 82.77 0 0182.8-82.8z"
            fill="#b71c29"
          />
        </g>
        <g opacity={0.6} fill="#b61f29">
          <path d="M83 49.9h-2.1c-1.2 0-2.4 0-3.7.1-8 .4-17.6 6.1-22.3 13.9 1.1-1.1 2.3-2.1 3.6-3.2 6.3-5 15.1-8.7 24.5-10.8z" />
          <path d="M152.8 89a56.31 56.31 0 00-3.6-9c-1.2-2.3-2.1-.3-3.3 2.3 0 4.5-.9 8.7-2.3 11a38.54 38.54 0 01-7.9 9.2 45.77 45.77 0 011.9 10.2 35.29 35.29 0 01-.7 9.7c-2.4 11.8-11.8 17.5-23.8 17.5a50.63 50.63 0 01-19.3-4.2 77.23 77.23 0 01-19.7-12.8c-6.5-5.8-12.6-13-16.3-21.3a39.73 39.73 0 01-2.6-25.2c1.8-7.5 10.9-15.5 16-16.7a35.48 35.48 0 018.6-1c23.1 0 48.7 20.4 55.8 43.8a36.12 36.12 0 007.9-9.2c1.4-2.3 2.3-6.5 2.3-11-1.2 2.6-2.8 5.8-5.4 6-12.5-13.2-23.6-32.1-47-37.2-2 .2-3.9.5-5.7.8 1.8-.3 3.8-.6 5.8-.8A67 67 0 0083 49.8c-9.4 2-18.2 5.8-24.5 10.8a37.28 37.28 0 00-3.6 3.2 19.17 19.17 0 00-2.4 5.5c-.4 1.7-.8 3.3-1.1 5a66 66 0 00-.4 18.3c2.1 18.2 11.2 35.7 23.5 46.5 6.4 5.6 13.7 9.4 21.3 10.5h19.7c29-6.6 45.1-34.1 37.3-60.6z" />
        </g>
        <g opacity={0.3} fill="#b61f29">
          <path d="M96.4 115.6c-14.6 0-29-4.5-38.6-13.9a34.91 34.91 0 01-4.9-5.9 20.16 20.16 0 01-1.8-3.2c2.1 18.2 11.2 35.8 23.5 46.5-3.1-3.9-3.4-11.9-.5-16.1a2.65 2.65 0 01.5-.6c8.5.2 17.6 1.5 26.9 1.5 11.9 0 24.2-2.1 36-11.1a39.9 39.9 0 00-1.9-10.2c-10 8.5-24.6 13-39.2 13z" />
          <path d="M150 73.4c-8.6-14.5-26.1-22.7-39.9-24.3a100.52 100.52 0 00-21-.1c-2 .3-4.1.6-6.1 1.1a56.88 56.88 0 0110.5 1.3 77.69 77.69 0 018.5-.5c15.2 0 31.7 4.6 41 19.5 2 3.2 2.9 7.8 2.9 12.2.9-2 1.7-3.6 2.5-3.3-.8-.3-1.6 1.3-2.5 3.3 0 4.5-.9 8.7-2.3 11a38.54 38.54 0 01-7.9 9.2 45.77 45.77 0 011.9 10.2 61.81 61.81 0 008.9-8.3c3.4-3.8 5.7-9.6 6.4-15.5.5-5.7-.3-11.4-2.9-15.8zM51.1 92.7a20.32 20.32 0 01.4-18.3 40.33 40.33 0 011.1-5 19.17 19.17 0 012.4-5.5c-25.4 24.4-13.6 63.5 19.7 75.3-12.4-10.7-21.5-28.3-23.6-46.5z" />
          <path d="M51.5 74.4c3.8-7.5 11.7-14.1 22.2-18.5a72.9 72.9 0 0119.8-4.7A67 67 0 0083 49.9c-9.4 2-18.2 5.8-24.5 10.8a37.28 37.28 0 00-3.6 3.2 19.17 19.17 0 00-2.4 5.5c-.4 1.6-.7 3.3-1 5z" />
        </g>
        <path
          d="M130.3 142.2a56.11 56.11 0 01-16.1 2.1c-15.6-.3-11.4-9.1-8.5-12.1 15.3-15.8 38.1-31 33.7-65.9-.8-6-4.7-12.3-10.6-17.4 0 0-17.3-14.3-43.1.2C65 60.7 49.5 84.4 48.6 103.8c-.8 19.1 7.7 31 20.2 39.4 15.7 10.5 39.7 8.5 39.7 8.5 22.1-2.1 27.4-11 21.8-9.5zm-59-11.1c-17.9-2.3-23.4-21.2-16.4-41.9 3.6-10.8 16.1-29.9 32.7-39 2.4-1.2 19.2-9.2 32.8.5 4.3 3.2 7.7 7.4 8.7 10.5 9.9 30.5-24 74.2-57.8 69.9z"
          fill="#b61f29"
        />
      </svg>
    ),
    location: 'APAC',
    description:
      'In 2007 we set up an office in Singapore as our APAC Headquarters. Since then we have opened offices in Malaysia (Kuala Lumpur), Hong Kong, and ANZ, to enable us to effectively service our ever-expanding client portfolio across a complex region. We strive to offer the high levels of service expected in an ever-increasing competitive and technological developing market by utilising our partner-led approach with both clients and candidates alike.',
  },
];

const WhereWeWorkStyles = styled.section`
  width: 100%;
  padding: 3rem 0;
  .work {
    width: 90%;
    margin: 0 auto;
    text-align: left;
    max-width: var(--maxWidth);
    @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 4rem;
    }
    @media only screen and (min-width: 1024px) {
      padding-top: 1rem;
    }
    @media only screen and (min-width: 1280px) {
      grid-template-columns: 55% 1fr;
    }
    &__img {
      width: 100%;
      margin: var(--auto);
      @media only screen and (min-width: 600px) {
        max-width: 600px;
      }
      @media only screen and (min-width: 768px) {
        margin-top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    &__wrapper {
      margin-top: 1.5rem;
      h4 {
        margin: 0.5rem 0;
      }
      p {
        margin-bottom: 0.5rem;
      }
      @media only screen and (min-width: 768px) {
        margin-top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
  .boxes {
    max-width: var(--maxWidth);
    width: 90%;
    margin: var(--auto);
    padding: 1.5rem 0;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 2rem 0;
    @media only screen and (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      padding: 3rem 0 0 0;
      grid-gap: 1.5rem;
    }
    &__inner {
      text-align: center;
      border-radius: 2.5px;
      padding: 1.5rem 1rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      @media only screen and (min-width: 768px) {
        width: 80%;
        margin: var(--auto);
      }
      @media only screen and (min-width: 1024px) {
        width: 100%;
        margin: var(--auto);
      }
      &:nth-child(odd) {
        border-top: solid 8px #73d0d9;
      }
      &:nth-child(even) {
        border-top: solid 8px #66c2ab;
      }
      margin-bottom: 0.25rem;
      svg {
        width: 40px;
      }
      h5 {
        font-size: 1.45rem;
        margin: 0.5rem 0;
      }
    }
  }
`;
const WhereWeWork = () => {
  const i = true;
  return (
    <WhereWeWorkStyles>
      <div className="work">
        <div className="work__img">
          <Illustration />
        </div>
        <div className="work__wrapper">
          <h6 className="sbt">Our offices</h6>
          <h4>Where we work</h4>
          <p>
            Operating in over 120 countries, our unique combination of local
            expertise matched with a truly global reach makes us a trusted
            partner to identify and deliver the best talent wherever and
            whenever you need it.
          </p>
          <p>
            From our 11 operations across the UK, Europe, MEA, APAC and US we
            offer a truly global approach to recruitment for technology-enabled
            business transformation.
          </p>
        </div>
      </div>
      <div className="boxes">
        {areaData.map((area) => (
          <div className="boxes__inner" key={area.location}>
            {area.icon}
            <h5>{area.location}</h5>
            <p>{area.description}</p>
          </div>
        ))}
      </div>
    </WhereWeWorkStyles>
  );
};

export default WhereWeWork;
