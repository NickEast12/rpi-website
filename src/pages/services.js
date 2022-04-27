import React from 'react';
import styled from 'styled-components';
import CTA from '../components/CTA';
import { EmailSignUp } from '../components/EmailSignUp';
import SEO from '../components/functional/SEO';
//* Local imports
import Layout from '../components/Layout';
import AllSpecialisms from '../components/sections/allSpecialisms';
import MainHeader from '../components/sections/mainHeader';
import SpecialismSection from '../components/sections/specialismSection';
import Illustration from '../svgs/who.svg';

const data = [
  {
    title: 'Executive Search',
    id: 'executive-search',
    i: 'Robust methodology delivering impactful transformative leaders',
    text: 'Our Executive Search service offers a dynamic alternative to the traditional model. We disrupt the legacy approach by injecting pace and agility while adopting a flexible and tailored search process, ensuring maximum visibility for the client, without compromising on methodology. Our experienced team combine their regional knowledge and networks to deliver a partner-led, intensive search and assessment process. With commercial models weighted to delivery, they present accurate & relevant short-lists quicker than the competition with consistently strong conversion to offer ratios.',
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="prefix__Layer_1"
        data-name="Layer 1"
        viewBox="0 0 630 390"
      >
        <defs>
          <style>
            {
              '.prefix__cls-5{fill:#071841}.prefix__cls-6{fill:#ffd131}.prefix__cls-7{fill:#88f5ff}'
            }
          </style>
        </defs>
        <path fill="#fafafa" d="M.62.17h630v390H.62z" />
        <path
          d="M197.7 104.11c57.35-56.93 156.84-70.94 224-18.87 69.21 53.69 83.35 161.61 40.2 214.12-22.9 27.82-56.67 33.76-102.59 41.84-60.07 10.56-143.47 25.24-187.86-24.62-46.35-52.04-32.31-154.34 26.25-212.47z"
          fill="#b5e3df"
        />
        <path
          transform="rotate(-45 353.965 237.763)"
          fill="#519399"
          d="M342.46 215.68h23.01v44.18h-23.01z"
        />
        <circle cx={260.43} cy={144.45} r={106.71} fill="#edf8f1" />
        <path
          className="prefix__cls-5"
          d="M260.43 258.52A114.07 114.07 0 11374.5 144.45a114.2 114.2 0 01-114.07 114.07zm0-213.42a99.35 99.35 0 1099.34 99.35 99.46 99.46 0 00-99.34-99.35z"
        />
        <path
          className="prefix__cls-6"
          d="M282.94 115.43h-44.69a6.91 6.91 0 00-6.88 6.94l.14 43a7 7 0 006.87 6.95 6.94 6.94 0 005.3-2.6l2.71 41.87a7 7 0 007.1 6.54h14.15a7.07 7.07 0 007.11-6.58l2.68-42a6.78 6.78 0 005.31 2.73 7 7 0 006.87-7l.15-42.94a7 7 0 00-6.82-6.91zM260.58 110.83a19 19 0 10-19-19 19 19 0 0019 19z"
        />
        <rect
          className="prefix__cls-5"
          x={391.84}
          y={229.31}
          width={43.54}
          height={137.22}
          rx={4}
          transform="rotate(-45 413.615 297.925)"
        />
        <path
          className="prefix__cls-7"
          d="M458.73 335.16a2.76 2.76 0 01-2-.81l-78.48-78.48a2.76 2.76 0 013.95-3.87l78.48 78.48a2.77 2.77 0 01-1.95 4.72zM227.27 213a5.49 5.49 0 01-2.5-.61 79.89 79.89 0 01-25.31-20.28 81 81 0 01-7.87-11.3 5.52 5.52 0 019.57-5.51 71.37 71.37 0 006.8 9.76 68.94 68.94 0 0021.83 17.49 5.53 5.53 0 01-2.52 10.45zM295.09 213.27a5.53 5.53 0 01-2.49-10.46 69.89 69.89 0 0013.22-8.67 68.92 68.92 0 0024.87-47.92 5.52 5.52 0 0111 .89 79.9 79.9 0 01-28.82 55.53 81.2 81.2 0 01-15.32 10 5.47 5.47 0 01-2.46.63z"
        />
      </svg>
    ),
    alt: 'Executive Search | Leadership journeys, supercharged',
  },
  {
    title: 'Permanent',
    id: 'permanent',
    i: 'Exceptional candidates for exceptional businesses',
    text: 'Our team of talented permanent consultants are experts in their field. Using cutting-edge sourcing tools and platforms combined with direct access to superior candidates empowers us to deliver highly skilled talent, on time. We understand no two hires are the same, and our approach is built on long-term, lasting relationships. On average, our recruiters and headhunters have a minimum of 15 years of experience, making them uniquely placed to assist with transformational projects.',
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="prefix__Layer_1"
        data-name="Layer 1"
        viewBox="0 0 630 390"
      >
        <defs>
          <style>
            {'.prefix__cls-6{fill:#ffd131}.prefix__cls-7{fill:#88f5ff}'}
          </style>
        </defs>
        <path fill="#fafafa" d="M.62.17h630v390H.62z" />
        <path
          d="M448.17 268.63c-38.09 70.18-128.27 111.72-206.6 81.53-80.76-31.16-124.83-129.25-98.92-191.22 13.73-32.83 44-48 85.16-68.75 53.84-27.08 128.61-64.68 184.79-30.12 58.66 36.08 74.46 136.93 35.57 208.56z"
          fill="#b5e3df"
        />
        <path
          d="M385.67 149.79a26 26 0 00-17.08 12.56l-13.25-61.2-61.53 13.33a26 26 0 10-33.57 7.27l-61.75 13.38 13.21 61a26 26 0 107.45 34.39L232.47 292l61.16-13.25a26 26 0 1034.74-7.52L389.31 258l-13.37-61.73a26 26 0 109.73-46.47z"
          fill="#edf8f1"
        />
        <path
          d="M272.92 73a26 26 0 0120.89 41.44l61.53-13.33 13.25 61.2a26 26 0 117.35 33.91L389.31 258l-60.94 13.2a26 26 0 01-7.85 47.71A26 26 0 01289.59 299a26 26 0 014-20.28L232.47 292l-13.32-61.49a25.93 25.93 0 01-16.91 12.27 25.51 25.51 0 01-5.53.6 26 26 0 1115-47.26l-13.21-61 61.75-13.38a26 26 0 017.15-48.12 26.2 26.2 0 015.53-.59m0-10.92a36.9 36.9 0 00-33.3 52.93l-43.44 9.41a10.92 10.92 0 00-8.36 13l9.31 43h-.4a36.93 36.93 0 000 73.86 37.13 37.13 0 007.85-.84 36.5 36.5 0 007.81-2.65l9.43 43.51a10.9 10.9 0 0013 8.36l43.32-9.39a36.9 36.9 0 0044.73 36.33A36.84 36.84 0 00348.52 278l43.1-9.34a10.91 10.91 0 008.36-13l-9.43-43.54h.63a36.93 36.93 0 000-73.86 36.75 36.75 0 00-15.88 3.59l-9.32-43a10.9 10.9 0 00-10.66-8.61 10.7 10.7 0 00-2.32.25l-43.21 9.36a36.93 36.93 0 00-36.89-37.72z"
          fill="#071841"
        />
        <path
          d="M491.74 102.12a12.87 12.87 0 00-10.42-1.54l16.75-26.25-67.28-42.93-16.69 26.15a12.93 12.93 0 10-9.41 14.75l-16.83 26.38 27.44 17.51a12.06 12.06 0 1112.5 8l27.34 17.45L472 115.13a12.93 12.93 0 1019.7-13z"
          fill="#519399"
        />
        <path
          className="prefix__cls-6"
          d="M299.79 117.79l-43.25 8.94a6.83 6.83 0 00-5.27 8.09l8.77 41.6a6.88 6.88 0 008 5.34 6.84 6.84 0 004.61-3.58l11 40a6.93 6.93 0 008.18 4.9l13.7-2.84a7 7 0 005.55-7.79l-5.81-41.14a6.63 6.63 0 005.67 1.57 6.92 6.92 0 005.25-8.12l-8.48-41.58a6.86 6.86 0 00-7.92-5.39zM277.23 117.83A18.81 18.81 0 10255 103.22a18.8 18.8 0 0022.23 14.61z"
        />
        <path
          className="prefix__cls-7"
          d="M247.8 271.46a4.11 4.11 0 01-4-3.22l-5.85-27a4.09 4.09 0 018-1.73l5 23 25.95-5.62a4.09 4.09 0 011.73 8l-30 6.49a4.28 4.28 0 01-.83.08zM334.74 252.19a4.09 4.09 0 01-.84-8.1l26-5.45-4.84-23a4.09 4.09 0 118-1.68l5.68 27.04a4.09 4.09 0 01-3.17 4.84l-30 6.29a4 4 0 01-.83.06z"
        />
      </svg>
    ),
    alt: 'Permanent | Exceptional candidates for exceptional businesses',
  },
  {
    title: 'Interim & Contract',
    id: 'interim-contract',
    i: 'The trigger for transformation',
    text: 'The skills and experience that interim and contract talent offer is highly sought after by organisations at the forefront of digital transformation. At RPI, we know that short-term expertise and agility is the linchpin to achieving strategic objectives. Managing hundreds of contract consultants and senior interims around the world, we facilitate existing teams or work with companies to build new teams for your project.',
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 630 390"
      >
        <path fill="#fafafa" d="M0 0h630v390H0z" />
        <path
          d="M160.95 265.9c39.18 72.2 132 114.94 212.52 83.88 83.09-32 128.42-133 101.76-196.7-14.12-33.78-45.25-49.43-87.6-70.73-55.39-27.86-132.25-66.52-190.1-30.98-60.33 37.11-76.59 140.82-36.58 214.53z"
          fill="#b5e3df"
        />
        <circle cx={353.75} cy={146.41} r={108.47} fill="#edf8f1" />
        <path
          d="M353.66 262.37a116 116 0 1111.05-.52c-3.71.35-7.4.52-11.05.52zm.27-217c-3.23 0-6.47.16-9.73.46a101 101 0 009.47 201.53c3.19 0 6.39-.15 9.62-.46a101 101 0 00-9.36-201.53z"
          fill="#071841"
        />
        <path
          d="M353.75 316.6c-93.85 0-170.2-76.35-170.2-170.19a7.5 7.5 0 0115 0c0 85.59 69.64 155.22 155.23 155.22a7.5 7.5 0 010 15z"
          fill="#4a878c"
        />
        <path
          d="M484.01 251.4a7.47 7.47 0 01-6-12l.27-.37a7.5 7.5 0 1112 9l-.29.38a7.48 7.48 0 01-5.98 2.99zM425.88 299.83a7.49 7.49 0 01-3.32-14.2l.79-.39a7.484 7.484 0 116.71 13.38l-.88.43a7.38 7.38 0 01-3.3.78zm31.9-20.78a7.49 7.49 0 01-4.79-13.22l.68-.56a7.49 7.49 0 019.65 11.45l-.76.63a7.45 7.45 0 01-4.78 1.69zM390.43 312.45a7.48 7.48 0 01-1.67-14.78l.42-.1a7.49 7.49 0 013.42 14.58l-.5.11a7.25 7.25 0 01-1.67.19z"
          fill="#071841"
        />
        <path
          d="M376.63 116.91H331.2a7 7 0 00-7 7l.14 43.73a7.08 7.08 0 007 7.06 7 7 0 005.39-2.64l2.76 42.56a7.11 7.11 0 007.21 6.65h14.38a7.18 7.18 0 007.22-6.69l2.73-42.65a6.88 6.88 0 005.35 2.8 7.12 7.12 0 007-7.08l.15-43.65a7.08 7.08 0 00-6.9-7.09zM353.9 112.24a19.35 19.35 0 10-19.36-19.36 19.35 19.35 0 0019.36 19.36z"
          fill="#ffd131"
        />
        <path
          d="M212.38 165.83a7.45 7.45 0 01-5.29-2.19l-15.81-15.76-15.77 15.77a7.481 7.481 0 01-10.58-10.58L185.99 132a7.5 7.5 0 0110.59 0l21.06 21.07a7.48 7.48 0 01-5.26 12.76z"
          fill="#4a878c"
        />
        <path
          d="M426.52 155.73h-.09a5.61 5.61 0 01-5.52-5.7 71.09 71.09 0 00-1.58-16 70.06 70.06 0 00-31.43-45 5.62 5.62 0 015.75-9.66l.25.16a82 82 0 0138.24 70.66 5.62 5.62 0 01-5.62 5.54z"
          fill="#88f5ff"
        />
        <path
          d="M425.38 161.14a5.57 5.57 0 01-4-1.65l-14.44-14.43a5.614 5.614 0 117.94-7.94l10.5 10.46 10.46-10.46a5.614 5.614 0 017.94 7.94l-14.4 14.43a5.56 5.56 0 01-4 1.65z"
          fill="#88f5ff"
        />
      </svg>
    ),
    alt: 'Interim & Contract | The trigger for transformation',
  },
  {
    title: 'Project Solutions / SoW',
    i: 'A tailored approach to tech expertise',
    id: 'project-solutions',
    text: 'RPI supports transformational tech projects with augmented resources (delivering teams as a service). Providing clients with resource flexibility that allows them to scale up and down at pace based on requirements and rapid access to the right expertise, skills and resources to deliver specific objectives and transformation.',
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 630 390"
      >
        <path fill="#fafafa" d="M0 0h630v390H0z" />
        <path
          d="M472.97 204.04c-2.66-72.6-59.36-142.93-135.41-150-78.41-7.29-154 54.86-157.93 115.84-2.09 32.31 16.42 56.95 41.6 90.46 32.93 43.85 78.66 104.72 138.42 99.28 62.4-5.68 116.04-81.45 113.32-155.58z"
          fill="#b5e3df"
        />
        <path
          d="M438.96 204.54l-18.11-2.18a80.66 80.66 0 00-8.06-19.5l11.27-14.31a5.88 5.88 0 00-.47-7.59l-18.66-18.67a5.89 5.89 0 00-7.55-.46l-14.34 11.27a79.19 79.19 0 00-19.45-8l-2.21-18.15a5.88 5.88 0 00-5.69-5h-26.4a5.86 5.86 0 00-5.68 5l-2.17 18.12a80.28 80.28 0 00-19.47 8l-14.34-11.24a5.87 5.87 0 00-7.57.46l-18.68 18.7a5.89 5.89 0 00-.44 7.58l11.26 14.33a79.93 79.93 0 00-8.05 19.48l-18.11 2.17a5.88 5.88 0 00-5 5.69v26.4a5.88 5.88 0 005 5.68l18.12 2.17a80.35 80.35 0 008.05 19.46l-11.26 14.34a5.89 5.89 0 00.43 7.54l18.65 18.69a5.89 5.89 0 007.57.46l14.34-11.29a80.41 80.41 0 0019.51 8.14l2.17 18.11a5.86 5.86 0 005.68 5h26.4a5.86 5.86 0 005.68-5l2.17-18.11a80.33 80.33 0 0019.48-8l14.35 11.16a5.87 5.87 0 007.57-.45l18.66-18.71a5.88 5.88 0 00.45-7.6l-11.27-14.32a80.22 80.22 0 008.06-19.46l18.11-2.18a5.85 5.85 0 005-5.67v-26.38a5.85 5.85 0 00-5-5.68z"
          fill="#edf8f1"
        />
        <path
          d="M355.7 329.89h-26.4a10.83 10.83 0 01-10.61-9.41l-1.78-14.84a84.84 84.84 0 01-14.45-6l-11.76 9.25a10.83 10.83 0 01-14.15-.85l-18.65-18.69a10.85 10.85 0 01-.87-14.14l9.24-11.77a84.74 84.74 0 01-6-14.44l-14.89-1.78a10.85 10.85 0 01-9.41-10.61v-26.4a10.81 10.81 0 019.43-10.62l14.89-1.76a85 85 0 016-14.47l-9.22-11.74a10.84 10.84 0 01.83-14.16l18.65-18.63a10.81 10.81 0 0114.15-.85l11.75 9.23a85.66 85.66 0 0114.45-6l1.78-14.85a10.81 10.81 0 0110.61-9.41h26.4a10.83 10.83 0 0110.62 9.41l1.78 14.85a84.64 84.64 0 0114.43 6l11.75-9.25a10.85 10.85 0 0114.17.87l18.66 18.66a10.86 10.86 0 01.87 14.16l-9.24 11.74a86.7 86.7 0 016 14.47l14.85 1.79a10.8 10.8 0 019.41 10.62v26.4a10.81 10.81 0 01-9.41 10.6l-14.85 1.78a84.84 84.84 0 01-6 14.45l9.24 11.73a10.84 10.84 0 01-.87 14.19l-18.65 18.67a10.82 10.82 0 01-14.14.85l-11.77-9.23a86.84 86.84 0 01-14.45 6l-1.78 14.84a10.82 10.82 0 01-10.61 9.34zm-54.15-42.14l2.91 1.68a75.12 75.12 0 0018.26 7.55l3.25.87 2.58 21.44a1 1 0 00.75.67h26.4a1 1 0 00.75-.65l2.58-21.48 3.24-.87a75.19 75.19 0 0018.27-7.55l2.91-1.68 17 13.34a1 1 0 001-.06l18.67-18.68a1 1 0 000-1l-13.34-16.95 1.69-2.92a75.12 75.12 0 007.55-18.26l.87-3.24 21.49-2.59a.94.94 0 00.67-.74v-26.41a.91.91 0 00-.66-.75l-21.45-2.58-.87-3.25a75.83 75.83 0 00-7.56-18.3l-1.68-2.91 13.34-16.95a1 1 0 00-.06-1l-18.73-18.65a1 1 0 00-1-.06l-17 13.35-2.92-1.69a75 75 0 00-18.19-7.6l-3.25-.86-2.57-21.46a1 1 0 00-.76-.66h-26.4a1 1 0 00-.75.65l-2.57 21.47-3.25.86a76.16 76.16 0 00-18.27 7.55l-2.91 1.68-17-13.34a1 1 0 00-1 .07l-18.68 18.68a1 1 0 000 1l13.33 17-1.68 2.91a75.1 75.1 0 00-7.55 18.28l-.87 3.25-21.45 2.57a1 1 0 00-.66.76v26.4a1 1 0 00.68.75l21.43 2.57.87 3.24a75.92 75.92 0 007.55 18.26l1.69 2.91-13.33 17a1 1 0 00.07 1l18.64 18.69a1 1 0 001 .06z"
          fill="#071841"
        />
        <path
          d="M243.73 142.37l-8.18 1.22a36.44 36.44 0 00-5.86-7.57l3.21-7.61a2.66 2.66 0 00-1.12-3.26l-10.4-5.93a2.66 2.66 0 00-3.37.71l-4.92 6.65a35.65 35.65 0 00-9.48-1.18l-3.12-7.67a2.68 2.68 0 00-3.09-1.52l-11.55 3.17a2.66 2.66 0 00-1.88 2.88l1.22 8.19a36.27 36.27 0 00-7.55 5.85l-7.62-3.21a2.68 2.68 0 00-3.26 1.11l-5.93 10.41a2.67 2.67 0 00.72 3.37l6.64 4.92a36.2 36.2 0 00-1.18 9.49l-7.63 3.12a2.66 2.66 0 00-1.53 3.09l3.17 11.55a2.68 2.68 0 002.89 1.88l8.18-1.22a36.55 36.55 0 005.85 7.54l-3.2 7.62a2.67 2.67 0 001.11 3.27l10.4 5.93a2.67 2.67 0 003.37-.7l4.92-6.66a36.07 36.07 0 009.48 1.18l3.12 7.66a2.67 2.67 0 003.09 1.53l11.55-3.17a2.66 2.66 0 001.88-2.88l-1.28-8.19a36.27 36.27 0 007.55-5.85l7.62 3.21a2.68 2.68 0 003.26-1.11l6-10.36a2.67 2.67 0 00-.71-3.38l-6.68-5a36.5 36.5 0 001.19-9.48l7.66-3.12a2.66 2.66 0 001.51-3.02l-3.16-11.55a2.67 2.67 0 00-2.89-1.91zm-33.84 42a18.71 18.71 0 11.06 0h-.06z"
          fill="#4a878c"
        />
        <path
          d="M362.06 195.12h-40.17a6.21 6.21 0 00-6.18 6.24l.13 38.67a6.24 6.24 0 006.17 6.25 6.24 6.24 0 004.77-2.34l2.44 37.64a6.29 6.29 0 006.38 5.88h12.72a6.35 6.35 0 006.39-5.91l2.41-37.72a6.08 6.08 0 004.76 2.45 6.29 6.29 0 006.17-6.26l.13-38.61a6.26 6.26 0 00-6.12-6.29zM341.96 190.99a17.09 17.09 0 10-.05 0z"
          fill="#ffd131"
        />
        <circle cx={407.45} cy={75.93} r={30.71} fill="#fff" />
        <path
          d="M454.44 49.11l-9.92 2.11a44.77 44.77 0 00-7.73-8.81l3.35-9.58a3.27 3.27 0 00-1.6-3.91l-13.16-6.44a3.28 3.28 0 00-4.07 1.12l-5.52 8.5a44.77 44.77 0 00-11.67-.73l-4.39-9.14a3.26 3.26 0 00-3.89-1.63l-13.89 4.74a3.26 3.26 0 00-2.08 3.67l2.1 9.91a44.94 44.94 0 00-8.79 7.73l-9.56-3.35a3.25 3.25 0 00-3.9 1.6l-6.47 13.17a3.28 3.28 0 001.13 4.07l8.49 5.51a44.52 44.52 0 00-.74 11.69L353 83.73a3.27 3.27 0 00-1.62 3.9l4.74 13.88a3.27 3.27 0 003.67 2.08l9.91-2.1a44.88 44.88 0 007.73 8.78l-3.37 9.56a3.28 3.28 0 001.6 3.91l13.16 6.48a3.28 3.28 0 004.07-1.12l5.51-8.51a43.68 43.68 0 0011.69.74l4.39 9.13a3.26 3.26 0 003.89 1.63l13.88-4.74a3.23 3.23 0 002.08-3.66l-2.1-9.91a44.71 44.71 0 008.8-7.73l9.56 3.35a3.27 3.27 0 003.9-1.6l6.46-13.17a3.27 3.27 0 00-1.12-4.08l-8.45-5.51a44.85 44.85 0 00.75-11.68l9.13-4.39a3.24 3.24 0 001.63-3.89l-4.73-13.88a3.27 3.27 0 00-3.72-2.09zm-38.23 53.92a28.2 28.2 0 1117.58-35.8 28.2 28.2 0 01-17.57 35.79z"
          fill="#73d0d9"
        />
        <path
          d="M303.96 263.11a5 5 0 01-3.51-1.45 55.29 55.29 0 010-78.19 5 5 0 018 6 4.74 4.74 0 01-1 1 45.39 45.39 0 000 64.15 5 5 0 01-3.51 8.47zM381.24 263.11a5 5 0 01-3.51-8.47 45.35 45.35 0 000-64.13 5 5 0 016-8 4.74 4.74 0 011 1 55.27 55.27 0 010 78.16 5 5 0 01-3.49 1.44z"
          fill="#88f5ff"
        />
      </svg>
    ),
    alt: 'Project Solutions / SoW | A tailored approach to tech expertise',
  },
  {
    title: 'Visa and Payroll Services',
    i: 'Removing access barriers to high calibre talent',
    id: 'visa-payroll-services',
    text: 'To deliver transformation at scale, organisations need the right access to an increasingly globalised talent pool. With an unparalleled global reach, we support our candidates and clients by facilitating simplified onboarding. Having global operations allows us to facilitate work based visa provision and in the Middle East we offer full Visa and Payroll Services across the UAE, as well as other GCC and African countries to provide organisations with access to exceptional and experienced professionals from all over the world.',
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 630 390"
      >
        <path fill="#fafafa" d="M0 0h630v390H0z" />
        <path
          d="M227.58 238.33c-18.75-72.26 16.37-158.18 89.15-187.5 75-30.26 167.76 8.67 189.59 67.54 11.56 31.2.59 60.9-14.33 101.31-19.51 52.86-46.61 126.25-107 138.48-63.14 12.75-138.26-46.06-157.41-119.83z"
          fill="#b5e3df"
        />
        <circle cx={301.41} cy={173.32} r={94.2} fill="#edf8f1" />
        <path
          d="M299.99 320.16a144.83 144.83 0 01-123.18-68.79 6.8 6.8 0 0111.57-7.15 131.22 131.22 0 00124.11 61.74c72-6.84 125.05-71 118.21-143a131.35 131.35 0 00-143-118.21 129.76 129.76 0 00-58.19 20 132.32 132.32 0 00-41.61 42.61 6.803 6.803 0 11-11.63-7.06 146 146 0 0145.91-47 143.15 143.15 0 0164.2-22.11c79.49-7.55 150.3 51 157.84 130.47s-51 150.3-130.47 157.84q-6.87.66-13.76.66z"
          fill="#4a878c"
        />
        <path
          d="M165.11 141.41h-41.29a6.38 6.38 0 00-6.36 6.4l.13 39.73a6.43 6.43 0 006.35 6.42 6.4 6.4 0 004.9-2.4l2.5 38.68a6.47 6.47 0 006.56 6h13.08a6.54 6.54 0 006.57-6.08l2.48-38.76a6.2 6.2 0 004.9 2.52 6.47 6.47 0 006.35-6.43l.1-39.66a6.42 6.42 0 00-6.27-6.42zM144.46 137.17a17.58 17.58 0 10-17.59-17.59 17.58 17.58 0 0017.59 17.59z"
          fill="#ffd131"
        />
        <path fill="#88f5ff" d="M294.96 77.05h10.2v193.21h-10.2z" />
        <path fill="#88f5ff" d="M203.45 168.56h193.22v10.2H203.45z" />
        <path
          d="M296.16 278.42c-39.36-35.93-58.18-73.37-55.94-111.25 3.41-57.73 54.25-94.8 56.41-96.35l5.94 8.29-3-4.15 3 4.15c-.49.35-49.1 35.9-52.18 88.74-2 34.63 15.69 69.3 52.64 103z"
          fill="#88f5ff"
        />
        <path
          d="M304.14 278.42l-6.88-7.54c36.95-33.73 54.67-68.4 52.65-103-3.08-52.84-51.69-88.39-52.18-88.74l5.94-8.31c2.17 1.55 53 38.62 56.42 96.35 2.29 37.87-16.59 75.31-55.95 111.24z"
          fill="#88f5ff"
        />
        <path
          d="M171.97 274.17a6.82 6.82 0 01-6.8-6.84 7 7 0 01.14-1.37l5.6-26.48a6.81 6.81 0 018.07-5.25l26.48 5.6a6.802 6.802 0 01-2.81 13.31l-19.83-4.19-4.2 19.88a6.81 6.81 0 01-6.65 5.34z"
          fill="#4a878c"
        />
        <path
          d="M299.91 280.73a105.58 105.58 0 1110.14-.48c-3.39.32-6.78.48-10.14.48zm.25-197.16c-2.89 0-5.8.13-8.74.41a91.79 91.79 0 108.74-.41z"
          fill="#071841"
        />
      </svg>
    ),
    alt: 'Visa and Payroll Services | Removing access barriers to high calibre talent ',
  },
  {
    title: 'Campaign Management',
    i: 'A full service model of recruitment',
    id: 'campaign-management',
    text: 'With unrivalled knowledge, expertise and experience in headhunting highly skilled talent, RPI works with IT and/or talent teams to build microsites, upskill managers, map out the market, raise an employer’s brand regionally and nationally, and source talent - a comprehensive solution to revolutionise not only your roster, but your place in the market.',
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 630 390"
      >
        <path fill="#fafafa" d="M0 0h630v390H0z" />
        <path
          d="M185.9 184.74c10.25-75.39 76.58-142.83 156.56-142.36 82.47.48 154.84 73 152.66 137-1.15 33.88-23 57.66-52.67 90-38.84 42.3-92.77 101-154.49 89.2-64.43-12.37-112.58-96.86-102.06-173.84z"
          fill="#b5e3df"
        />
        <circle cx={276.02} cy={151.91} r={100.47} fill="#edf8f1" />
        <path
          d="M275.94 259.32a107.62 107.62 0 1110.23-.49c-3.43.33-6.85.49-10.23.49zm.25-201q-4.5 0-9 .43a93.53 93.53 0 10101.95 84.27 93.56 93.56 0 00-92.94-84.7z"
          fill="#071841"
        />
        <path
          d="M297.21 124.59h-42.07a6.5 6.5 0 00-6.48 6.54l.13 40.5a6.55 6.55 0 006.47 6.53 6.54 6.54 0 005-2.45l2.55 39.43a6.58 6.58 0 006.68 6.15h13.33a6.64 6.64 0 006.69-6.19l2.53-39.5a6.37 6.37 0 005 2.56 6.59 6.59 0 006.47-6.55l.14-40.43a6.56 6.56 0 00-6.44-6.59zM276.16 120.26a17.92 17.92 0 10-17.93-17.92 17.92 17.92 0 0017.93 17.92z"
          fill="#ffd131"
        />
        <circle cx={411.08} cy={271.87} r={48.17} fill="#fff" />
        <path
          d="M411.08 323.94a52.08 52.08 0 1152.07-52.11 52.08 52.08 0 01-52.07 52.11zm0-96.35a44.28 44.28 0 1044.3 44.24 44.33 44.33 0 00-44.3-44.24z"
          fill="#4a878c"
        />
        <path
          d="M410.91 238.92a5.2 5.2 0 01-5.2-5.2v-19.41a5.2 5.2 0 0110.4 0v19.41a5.2 5.2 0 01-5.2 5.2zM411.16 335.04a5.2 5.2 0 01-5.2-5.2v-19.41a5.2 5.2 0 1110.4 0v19.4a5.2 5.2 0 01-5.19 5.21zM372.8 277.11h-19.42a5.2 5.2 0 110-10.4h19.4a5.2 5.2 0 010 10.4zM468.93 276.83h-19.41a5.2 5.2 0 110-10.4h19.42a5.2 5.2 0 010 10.4z"
          fill="#4a878c"
        />
        <path
          d="M275.2 72.17a6.94 6.94 0 01-6.94-6.94V20.77a6.94 6.94 0 0113.87 0v44.46a6.94 6.94 0 01-6.93 6.94zM275.77 292.36a6.94 6.94 0 01-6.93-6.94v-44.46a6.94 6.94 0 0113.87 0v44.46a6.94 6.94 0 01-6.94 6.94zM187.91 159.65h-44.46a6.94 6.94 0 11-.53-13.87h45a6.94 6.94 0 010 13.87zM408.1 159.07h-44.46a6.93 6.93 0 110-13.86h44.46a6.93 6.93 0 010 13.86z"
          fill="#88f5ff"
        />
        <path
          d="M234.38 196.67a5.18 5.18 0 01-3.68-1.53 58 58 0 010-81.88 5.2 5.2 0 017.35 7.35 47.56 47.56 0 000 67.18 5.21 5.21 0 01-3.67 8.88zM315.38 196.67a5.21 5.21 0 01-3.68-8.88 47.56 47.56 0 000-67.18 5.2 5.2 0 117.36-7.35 58 58 0 010 81.88 5.18 5.18 0 01-3.68 1.53z"
          fill="#071841"
        />
        <circle cx={411.2} cy={271.38} r={26.81} fill="#73d0d9" />
        <circle cx={411.2} cy={271.38} r={19.44} fill="#071841" />
      </svg>
    ),
    alt: 'Campaign Management | A full service model of recruitment ',
  },
];

const SpecialismsStyles = styled.div`
  width: 100%;
  @media only screen and (min-width: 765px) {
    section:nth-child(even) {
      .section {
        grid-template-areas: 'a b';
        grid-template-columns: 40% 1fr;
        .section__text {
          grid-area: a;
        }
        .section__img {
          grid-area: b;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    section {
      .section {
        grid-gap: 3rem;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    section {
      .section {
        padding: 5rem 0;
      }
    }
  }
`;
const Specialisms = () => {
  const i = true;
  return (
    <Layout>
      <SEO
        title="Recruitment Services for Digital Transformation | RPI"
        description="Find out about the recruitment services RPI offers. Specialists in technology-enabled business transformation, we’re experts at sourcing the talent that your business needs to create value today and in the future."
      />
      <MainHeader
        page="Our Services"
        title="Finding the talent that your business needs"
        text="The business landscape is perennially transforming."
        lowerText="At RPI, we recognise the importance of staying ahead of the curve to accommodate the requirements of an ever-evolving workforce. Our unrivalled knowledge and experience expertly positions the team to deliver a wide range of talent solutions across multiple sectors."
      >
        <Illustration />
      </MainHeader>
      <AllSpecialisms
        title="Find the best hiring or consulting option for you"
        text="Advising organisations on talent that will transform their business, whilst ensuring access to the best candidates globally"
      />
      <SpecialismsStyles>
        {data.map((x) => (
          <SpecialismSection
            id={x.id}
            key={x.id}
            title={x.title}
            text={x.text}
            tag={x.i}
          >
            {x.img}
          </SpecialismSection>
        ))}
      </SpecialismsStyles>
      <EmailSignUp />
    </Layout>
  );
};

export default Specialisms;
