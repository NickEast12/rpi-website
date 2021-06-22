import React from 'react';
import styled from 'styled-components';
import CTA from '../components/CTA';
import SEO from '../components/functional/SEO';
//* Local imports
import Layout from '../components/Layout';
import AllSpecialisms from '../components/sections/allSpecialisms';
import MainHeader from '../components/sections/mainHeader';
import SpecialismSection from '../components/sections/specialismSection';
import Illustration from '../svgs/who.svg';

const data = [
  {
    title: 'Retained Search',
    id: 'retained-search',
    i: 'Leadership journeys, supercharged',
    text:
      'RPI’s reputation is unquestionably in identifying and identifying the best leaders; people who understand their markets, with the right skills, experience, culture and strategy that will put the right teams in place to revolutionise and drive transformation across your business. Our retained search services identify and attract unique/inspired leaders and determine optimal organisational fit while our executive candidates have local expertise with a global perspective. ',
    img: (
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 589.8 322.3"
      >
        <path fill="#4cc3d2" d="M.5.5z" />
        <path fill="#f4f6f5" d="M.5.5z" />
        <path
          fill="#fafafa"
          stroke="#fff"
          strokeMiterlimit={10}
          d="M.5.5h588.8v321.3H.5z"
        />
        <path
          d="M199.9 86.66c46.4-44.14 126.82-55.07 181.08-14.64 56 41.63 67.42 125.41 32.52 166.12-18.46 21.57-45.77 26.21-82.91 32.5-48.6 8.21-116 19.56-151.9-19.07-37.51-40.43-26.2-119.77 21.21-164.91z"
          fill="#b5e3df"
        />
        <path
          fill="none"
          stroke="#519399"
          strokeMiterlimit={10}
          strokeWidth={25}
          d="M312.63 179.24l25.23 24.21"
        />
        <ellipse
          cx={250.58}
          cy={117.94}
          rx={86.26}
          ry={82.78}
          fill="#edf8f1"
          stroke="#071841"
          strokeMiterlimit={10}
          strokeWidth={16}
        />
        <path
          d="M268.82 95.44h-36.1a5.51 5.51 0 00-5.58 5.36l.15 33.35a5.51 5.51 0 005.58 5.36 6 6 0 004.32-2l2 32.57a5.56 5.56 0 005.73 5.07h11.46a5.62 5.62 0 005.73-5.07l2.19-32.57a5.51 5.51 0 004.31 2.14 5.63 5.63 0 005.59-5.43l.14-33.35a5.5 5.5 0 00-5.52-5.43zM250.73 91.87c8.49 0 15.41-6.64 15.41-14.78s-6.92-14.79-15.41-14.79-15.43 6.64-15.43 14.79 6.87 14.78 15.43 14.78z"
          fill="#ffd131"
        />
        <path
          d="M423.01 265.73l-20.71 19.85a3.07 3.07 0 01-4.25 0L323.8 214.3a2.77 2.77 0 010-4.07l20.69-19.85a3 3 0 014.24 0l74.28 71.27a2.78 2.78 0 010 4.08z"
          fill="#071841"
        />
        <path
          fill="none"
          stroke="#88f5ff"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="M346.5 203.88l63.41 60.85"
        />
        <path
          d="M223.79 166.86a59.73 59.73 0 01-19.05-14.64 61.59 61.59 0 01-6-8.14M311.83 119.72a57.34 57.34 0 01-21.73 40.14 66.87 66.87 0 01-11.53 7.29"
          fill="none"
          stroke="#88f5ff"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={12}
        />
      </svg>
    ),
    alt: 'Retained Search | Leadership journeys, supercharged',
  },
  {
    title: 'Permanent',
    id: 'permanent',
    i: 'Exceptional candidates for exceptional businesses',
    text:
      'Our team of talented permanent consultants are experts in their field. Using cutting-edge sourcing tools and platforms combined with direct access to superior candidates empowers us to deliver highly skilled talent, on time. We understand no two hires are the same, and our approach is built on long-term, lasting relationships. On average, our recruiters and headhunters have a minimum of 15 years of experience, making them uniquely placed to assist with transformational projects.',
    img: (
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 589.8 322.3"
      >
        <path fill="#4cc3d2" d="M.5.5z" />
        <path fill="#f4f6f5" d="M.5.5z" />
        <path
          fill="#fafafa"
          stroke="#fff"
          strokeMiterlimit={10}
          d="M.5.5h588.8v321.3H.5z"
        />
        <path
          d="M395.62 216.74c-29.18 53.57-98.19 85.22-158.15 62.18-61.84-23.67-95.61-98.54-75.77-145.8 10.52-25 33.71-36.64 65.19-52.46 41.22-20.68 98.46-49.34 141.5-23 44.91 27.51 56.97 104.47 27.23 159.08z"
          fill="#b5e3df"
        />
        <path
          d="M293.67 259.8a24.2 24.2 0 01-23.54-19 23.48 23.48 0 01.14-10.55l-38.86 8.4a3.91 3.91 0 01-.9.07 4.23 4.23 0 01-4.11-3.26l-8.5-38.93a24 24 0 01-9.68 4.58 25.94 25.94 0 01-5.15.55 24 24 0 01-5.08-47.46 25.09 25.09 0 015.08-.56 22.28 22.28 0 015.64.69l-8.36-38.53a4.36 4.36 0 01.56-3.12 4.18 4.18 0 012.65-1.81l39.06-8.46a23.52 23.52 0 01-4.73-9.93A24 24 0 01256.3 64a25.32 25.32 0 015.16-.55 24.17 24.17 0 0123.53 18.94 24.45 24.45 0 01-.21 11L323.71 85a4 4 0 01.91-.07 4.23 4.23 0 014.11 3.26l8.39 38.61a23.35 23.35 0 019.89-4.65 26 26 0 015.16-.55 24.17 24.17 0 0123.53 18.94 24 24 0 01-18.4 28.59 25.09 25.09 0 01-5.08.56 24.35 24.35 0 01-5.85-.69l8.49 39a4.36 4.36 0 01-.56 3.12 4 4 0 01-2.64 1.8l-38.72 8.33a22.94 22.94 0 014.46 9.58 24 24 0 01-18.46 28.59c-1.86.14-3.64.38-5.27.38z"
          fill="#edf8f1"
        />
        <path
          d="M261.43 67.54a19.76 19.76 0 0115.94 31.58l47.08-10.21 10.17 46.71a19.87 19.87 0 0113.09-9.58 21.9 21.9 0 014.25-.49 19.82 19.82 0 014.17 39.25 21.81 21.81 0 01-4.17.49 20 20 0 01-11.7-3.82l10.23 47.12-46.65 10.06a19.82 19.82 0 01-6 36.44 22.87 22.87 0 01-4.25.48 19.82 19.82 0 01-16.37-31.09l-46.79 10.13-10.13-46.95a19.73 19.73 0 01-13 9.37 22.07 22.07 0 01-4.25.49 19.82 19.82 0 01-4.18-39.21 21.92 21.92 0 014.18-.49 20.3 20.3 0 0111.49 3.61l-10.1-46.49 47.29-10.2a19.81 19.81 0 015.57-36.71 17 17 0 014.18-.49m0-8.33a28.53 28.53 0 00-6 .63 28.14 28.14 0 00-21.59 33.52 28.66 28.66 0 002.16 6.24l-33.33 7.2a8.44 8.44 0 00-5.22 3.61 8.23 8.23 0 00-1.12 6.24l7.11 32.76h-.28a29.2 29.2 0 00-6 .62 28.11 28.11 0 00-11.56 49.55 28.34 28.34 0 0023.65 5.5 25.14 25.14 0 006-2l7.24 33.17a8.38 8.38 0 008.15 6.59 8.53 8.53 0 001.81-.21l33.14-7.14a30.76 30.76 0 00.63 6.17 28.23 28.23 0 0010 16 28.34 28.34 0 0023.61 5.55 28.14 28.14 0 0021.58-33.51 26.46 26.46 0 00-1.95-5.83l33-7.15a8.33 8.33 0 006.41-9.92l-7.24-33.24h.49a28.18 28.18 0 100-56.35 29.2 29.2 0 00-6 .62 30.73 30.73 0 00-6.13 2.08l-7.1-32.82a8.49 8.49 0 00-3.63-5.2 8.1 8.1 0 00-4.52-1.32 7.33 7.33 0 00-1.74.21l-33.08 7.14a26.31 26.31 0 00-.63-6.59 28.21 28.21 0 00-10-16 30.4 30.4 0 00-17.89-6.11z"
          fill="#071841"
        />
        <path
          d="M428.98 89.8a9.91 9.91 0 00-8-1.18l12.81-20.06L382.3 35.8l-12.79 19.87a9.78 9.78 0 00-4.39-6.59 9.86 9.86 0 10-2.82 17.77l-12.85 20.12 21 13.33a9.2 9.2 0 0113.65-10.83 9.11 9.11 0 012.79 12.7 9.29 9.29 0 01-6.9 4.23l21 13.33 12.95-20.2a9.79 9.79 0 004.46 6.73 9.81 9.81 0 1010.58-16.46z"
          fill="#519399"
        />
        <path
          d="M281.97 101.68s-30.92 6.39-33.08 6.8a5.24 5.24 0 00-4 6.18l6.69 31.71a5.31 5.31 0 006.13 4.1 5.29 5.29 0 003.55-2.71l8.42 30.47a5.36 5.36 0 006.27 3.74l10.48-2.17a5.27 5.27 0 004.24-6l-4.45-31.36a5 5 0 004.32 1.18 5.28 5.28 0 004-6.18l-6.44-31.64a5.24 5.24 0 00-6.13-4.12zM264.7 101.8a14.32 14.32 0 10-17.06-11.1 14.52 14.52 0 0017.06 11.1z"
          fill="#ffd131"
        />
        <path
          fill="none"
          stroke="#88f5ff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={9}
          d="M265.12 210.85l-22.92 4.99-4.45-20.61M308.78 201.13l22.91-4.79-4.32-20.68"
        />
      </svg>
    ),
    alt: 'Permanent | Exceptional candidates for exceptional businesses',
  },
  {
    title: 'Interim & Contract',
    id: 'interim-contract',
    i: 'The trigger for transformation',
    text:
      'The skills and experience that interim and contract talent offer is highly sought after by organisations at the forefront of digital transformation. At RPI, we know that short-term expertise and agility is the linchpin to achieving strategic objectives. Managing hundreds of contract consultants and senior interims around the world, we facilitate existing teams or work with companies to build new teams for your project.',
    img: (
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 589.8 322.3"
      >
        <path fill="#4cc3d2" d="M.5.5z" />
        <path fill="#f4f6f5" d="M.5.5z" />
        <path
          fill="#fafafa"
          stroke="#fff"
          strokeMiterlimit={10}
          d="M.5.5h588.8v321.3H.5z"
        />
        <path
          d="M183.3 207.64c29 49.85 97.55 79.29 157.11 57.85 61.44-22.08 94.92-91.75 75.27-135.73-10.38-23.31-33.44-34.09-64.71-48.82-41-19.24-97.83-45.91-140.58-21.37-44.55 25.57-56.59 97.23-27.09 148.07z"
          fill="#b5e3df"
        />
        <ellipse
          cx={325.92}
          cy={125.12}
          rx={80.18}
          ry={74.84}
          fill="#edf8f1"
          stroke="#071841"
          strokeMiterlimit={10}
          strokeWidth={16}
        />
        <path
          d="M325.92 237.4c-66.41 0-120.3-50.3-120.3-112.29"
          fill="none"
          stroke="#4a878c"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={16}
        />
        <path
          d="M422.43 192.2c-.07.07-.14.2-.2.26"
          fill="none"
          stroke="#071841"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={16}
        />
        <path
          d="M403.3 211.06a121.24 121.24 0 01-36.77 19.74"
          fill="none"
          stroke="#071841"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={16}
          strokeDasharray=".9948999881744385,39.7963981628418"
        />
        <path
          d="M353.39 234.5c-.14 0-.21.06-.35.06"
          fill="none"
          stroke="#071841"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={16}
        />
        <path
          d="M342.8 104.8h-33.5a5.06 5.06 0 00-5.19 4.85l.09 30.15a5.06 5.06 0 005.19 4.84 5.62 5.62 0 004-1.8l1.91 29.41a5.12 5.12 0 005.33 4.59h10.67a5.18 5.18 0 005.33-4.59l2-29.44a5.18 5.18 0 004 1.93 5.15 5.15 0 005.18-4.9l.14-30.16a5.07 5.07 0 00-5.15-4.88zM326.06 101.54c7.89 0 14.32-6 14.32-13.36s-6.43-13.38-14.32-13.38-14.32 6-14.32 13.37 6.37 13.37 14.32 13.37z"
          fill="#ffd131"
        />
        <path
          fill="none"
          stroke="#4a878c"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={16}
          d="M190.25 133.38l15.57-14.53 15.57 14.53"
        />
        <path
          d="M353.39 82.3c12.38 7.3 21.79 19 25.11 33.51a50.26 50.26 0 011.25 11.89"
          fill="none"
          stroke="#88f5ff"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={12}
        />
        <path
          fill="none"
          stroke="#88f5ff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={12}
          d="M389.5 121.5l-10.65 9.94-10.66-9.94"
        />
      </svg>
    ),
    alt: 'Interim & Contract | The trigger for transformation',
  },
  {
    title: 'Project Solutions / SoW',
    i: 'A tailored approach to tech expertise',
    id: 'project-solutions',
    text:
      'RPI supports transformational tech projects with augmented resources (delivering teams as a service). Providing clients with resource flexibility that allows them to scale up and down at pace based on requirements and rapid access to the right expertise, skills and resources to deliver specific objectives and transformation.',
    img: (
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 589.8 322.3"
      >
        <path fill="#4cc3d2" d="M.5.5z" />
        <path fill="#f4f6f5" d="M.5.5z" />
        <path
          fill="#fafafa"
          stroke="#fff"
          strokeMiterlimit={10}
          d="M.5.5h588.8v321.3H.5z"
        />
        <path
          d="M407.65 159.65c-2-54.7-45.77-107.71-104.45-113-60.52-5.5-118.81 41.34-121.9 87.3-1.59 24.33 12.64 42.91 32.12 68.17 25.41 33.06 60.71 78.9 106.81 74.84 48.16-4.36 89.53-61.43 87.42-117.31z"
          fill="#b5e3df"
        />
        <path
          d="M381.48 160.02l-14-1.62a60.53 60.53 0 00-6.2-14.72l8.69-10.79a4.36 4.36 0 00-.39-5.74l-14.43-14.09a4.71 4.71 0 00-5.87-.38l-10.98 8.49a62.61 62.61 0 00-15-6.05l-1.66-13.66a4.54 4.54 0 00-4.4-3.81h-20.42a4.5 4.5 0 00-4.41 3.81l-1.66 13.66a62.61 62.61 0 00-15 6.05l-11.05-8.49a4.7 4.7 0 00-5.87.32l-14.43 14.09a4.37 4.37 0 00-.32 5.74l8.69 10.79a59.56 59.56 0 00-6.2 14.66l-14 1.62a4.5 4.5 0 00-3.89 4.3v19.9a4.5 4.5 0 003.89 4.3l14 1.62a59.56 59.56 0 006.2 14.66l-8.69 10.79a4.36 4.36 0 00.39 5.74l14.36 14.09a4.71 4.71 0 005.87.38l11.05-8.49a62.61 62.61 0 0015 6.05l1.66 13.66a4.5 4.5 0 004.41 3.81h20.37a4.48 4.48 0 004.4-3.81l1.71-13.66a61.62 61.62 0 0015-6.05l11 8.49a4.7 4.7 0 005.87-.32l14.43-14.09a4.36 4.36 0 00.32-5.74l-8.68-10.79a59.53 59.53 0 006.19-14.66l14-1.62a4.45 4.45 0 003.9-4.3v-19.9a4.44 4.44 0 00-3.85-4.24z"
          fill="#edf8f1"
          stroke="#071841"
          strokeMiterlimit={10}
          strokeWidth={12}
        />
        <path
          d="M230.8 113.18l-6.32.94a28.5 28.5 0 00-4.53-5.68l2.49-5.73a2 2 0 00-.83-2.44l-8.05-4.47a2 2 0 00-2.61.56l-3.77 5a26.07 26.07 0 00-7.28-.87l-2.42-5.8a2.09 2.09 0 00-2.37-1.12l-8.94 2.37a2 2 0 00-1.46 2.18l1 6.17a29.34 29.34 0 00-5.81 4.43l-5.87-2.43a2.05 2.05 0 00-2.49.81l-4.6 7.86a1.94 1.94 0 00.58 2.56l5.11 3.68a24.33 24.33 0 00-.9 7.17l-5.94 2.37a2 2 0 00-1.15 2.31l2.43 8.73a2.09 2.09 0 002.24 1.43l6.32-.93a28.15 28.15 0 004.53 5.67l-2.49 5.74a2 2 0 00.83 2.43l8 4.49a2 2 0 002.62-.56l3.77-5a25.87 25.87 0 007.34.88l2.43 5.8a2.08 2.08 0 002.36 1.12l8.94-2.37a2 2 0 001.47-2.18l-1-6.18a29 29 0 005.81-4.43l5.87 2.44a2 2 0 002.49-.81l4.6-7.86a1.94 1.94 0 00-.58-2.56l-5.1-3.68a24.41 24.41 0 00.89-7.17l5.94-2.37a1.92 1.92 0 001.15-2.31l-2.43-8.73a2.11 2.11 0 00-2.27-1.46zm-26.11 31.62a17.84 17.84 0 01-21.84-12.16 17.35 17.35 0 0112.45-21.33 17.85 17.85 0 0121.84 12.16 17.26 17.26 0 01-12.45 21.33z"
          fill="#4a878c"
        />
        <path
          d="M322.1 152.91h-31a4.77 4.77 0 00-4.79 4.68l.13 29.13a4.76 4.76 0 004.78 4.67 5.09 5.09 0 003.71-1.74l1.85 28.38a4.8 4.8 0 004.92 4.42h9.83a4.84 4.84 0 004.91-4.42l1.86-28.44a4.69 4.69 0 003.7 1.87 4.87 4.87 0 004.79-4.74l.12-29.13a4.87 4.87 0 00-4.81-4.68zM306.59 149.8a12.91 12.91 0 10-13.22-12.91 13.09 13.09 0 0013.22 12.91z"
          fill="#ffd131"
        />
        <ellipse cx={357.15} cy={63.11} rx={23.69} ry={23.14} fill="#fff" />
        <path
          d="M393.42 42.89l-7.66 1.56a33.62 33.62 0 00-5.94-6.65l2.62-7.17a2.4 2.4 0 00-1.22-2.93l-10.28-4.9a2.54 2.54 0 00-3.12.87l-4.28 6.43a36 36 0 00-9-.56l-3.39-6.86a2.53 2.53 0 00-3-1.25l-10.73 3.55a2.42 2.42 0 00-1.59 2.75l1.59 7.48a33.68 33.68 0 00-6.76 5.8l-7.36-2.48a2.5 2.5 0 00-3 1.18l-5 9.92a2.43 2.43 0 00.9 3.06l6.57 4.17a34 34 0 00-.57 8.8l-7 3.3a2.44 2.44 0 00-1.28 2.94l3.64 10.47a2.48 2.48 0 002.81 1.56l7.66-1.56a34.43 34.43 0 005.94 6.61l-2.56 7.24a2.4 2.4 0 001.22 2.93l10.15 4.87a2.61 2.61 0 003.13-.82l4.28-6.4a36 36 0 009 .56l3.38 6.86a2.54 2.54 0 003 1.25l10.73-3.58a2.39 2.39 0 001.59-2.74l-1.59-7.48a33.68 33.68 0 006.76-5.8l7.41 2.49a2.51 2.51 0 003-1.18l5-9.92a2.43 2.43 0 00-.89-3.06L391 70.02a33.44 33.44 0 00.58-8.79l7-3.31a2.44 2.44 0 001.28-2.93l-3.64-10.47a2.47 2.47 0 00-2.8-1.63zm-29.5 40.61a21.9 21.9 0 01-27.62-13.23 21.15 21.15 0 0113.53-27 21.9 21.9 0 0127.65 13.22 21.12 21.12 0 01-13.56 27.01z"
          fill="#73d0d9"
        />
        <path
          d="M277.3 200.44a37.37 37.37 0 010-53.64M336.91 200.44a37.35 37.35 0 000-53.64"
          fill="none"
          stroke="#88f5ff"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={12}
        />
      </svg>
    ),
    alt: 'Project Solutions / SoW | A tailored approach to tech expertise',
  },
  {
    title: 'Visa and Payroll Services',
    i: 'Removing access barriers to high calibre talent',
    id: 'visa-payroll-services',
    text:
      'To deliver transformation at scale, organisations need the right access to an increasingly globalised talent pool. With an unparalleled global reach, we support our candidates and clients by facilitating simplified onboarding. Having 11 operations globally allows us to facilitate work based visa provision and in the Middle East we offer full Visa and Payroll Services across the UAE, as well as other GCC and African countries to provide organisations with access to exceptional and experienced professionals from all over the world.',
    img: (
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 589.8 322.3"
      >
        <path fill="#4cc3d2" d="M.5.5z" />
        <path fill="#f4f6f5" d="M.5.5z" />
        <path
          fill="#fafafa"
          stroke="#fff"
          strokeMiterlimit={10}
          d="M.5.5h588.8v321.3H.5z"
        />
        <path
          d="M240.3 186.5c-11.81-46.79 10.26-102.38 56-121.37 47.19-19.59 105.45 5.67 119.18 43.67 7.27 20.2.38 39.41-9 65.55-12.29 34.24-29.28 81.74-67.28 89.67-39.64 8.29-86.9-29.74-98.9-77.52z"
          fill="#b5e3df"
        />
        <ellipse cx={286.68} cy={144.4} rx={59.22} ry={60.99} fill="#edf8f1" />
        <path
          d="M211.7 99.42c13.73-23.28 37.6-39.85 66-42.62 47.68-4.68 90 31.38 94.55 80.47s-30.47 92.69-78.14 97.37c-34 3.31-65.26-14-82-42.05"
          fill="none"
          stroke="#4a878c"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={16}
        />
        <path
          d="M201.01 123.8h-25.92a4.1 4.1 0 00-4 4.13l.11 25.71a4.1 4.1 0 004 4.12 4.17 4.17 0 003.1-1.54l1.55 25a4.1 4.1 0 004.11 3.9h8.23a4.15 4.15 0 004.12-3.9l1.55-25.1a3.86 3.86 0 003.1 1.65 4.19 4.19 0 004-4.18l.1-25.71a4.18 4.18 0 00-4.05-4.08zM188.02 121a11.4 11.4 0 10-11.06-11.39A11.26 11.26 0 00188.02 121z"
          fill="#ffd131"
        />
        <path
          fill="none"
          stroke="#88f5ff"
          strokeMiterlimit={10}
          strokeWidth={12}
          d="M285.82 207.2V82.09M225.11 144.62h121.48M285.56 80.8s-77 56.86 0 129.24M286.3 80.8s77 56.86 0 129.24"
        />
        <path
          fill="none"
          stroke="#4a878c"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={16}
          d="M205.34 205.28l3.52-17.12 16.63 3.63"
        />
        <ellipse
          cx={285.88}
          cy={145.72}
          rx={61.94}
          ry={63.79}
          fill="none"
          stroke="#071841"
          strokeMiterlimit={10}
          strokeWidth={16}
        />
      </svg>
    ),
    alt:
      'Visa and Payroll Services | Removing access barriers to high calibre talent ',
  },
  {
    title: 'Campaign Management',
    i: 'A full service model of recruitment',
    id: 'campaign-management',
    text:
      'With unrivalled knowledge, expertise and experience in headhunting highly skilled talent, RPI works with IT and/or talent teams to build microsites, upskill managers, map out the market, raise an employer’s brand regionally and nationally, and source talent - a comprehensive solution to revolutionise not only your roster, but your place in the market.',
    img: (
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 589.8 322.3"
      >
        <path fill="#4cc3d2" d="M.5.5z" />
        <path fill="#f4f6f5" d="M.5.5z" />
        <path
          fill="#fafafa"
          stroke="#fff"
          strokeMiterlimit={10}
          d="M.5.5h588.8v321.3H.5z"
        />
        <path
          d="M198.42 157.05c7.39-54.44 55.33-103.13 113.11-102.81 59.59.37 111.85 52.75 110.29 98.93-.82 24.47-16.59 41.62-38.06 65-28 30.53-67 73-111.6 64.39-46.57-8.93-81.31-69.94-73.74-125.51z"
          fill="#b5e3df"
        />
        <ellipse
          cx={263.51}
          cy={133.34}
          rx={72.55}
          ry={72.53}
          fill="#edf8f1"
          stroke="#071841"
          strokeMiterlimit={10}
          strokeWidth={16}
        />
        <path
          d="M278.85 113.62H248.5a4.73 4.73 0 00-4.7 4.7l.13 29.22a4.72 4.72 0 004.69 4.69 5 5 0 003.63-1.75l1.82 28.47a4.75 4.75 0 004.82 4.45h9.64a4.79 4.79 0 004.81-4.45l1.82-28.53a4.59 4.59 0 003.63 1.88 4.82 4.82 0 004.69-4.76l.13-29.22a4.92 4.92 0 00-4.76-4.7zM263.64 110.49a12.95 12.95 0 10-12.95-13 13 13 0 0012.95 13z"
          fill="#ffd131"
        />
        <ellipse
          cx={361.1}
          cy={219.95}
          rx={34.8}
          ry={34.79}
          fill="#fff"
          stroke="#4a878c"
          strokeMiterlimit={10}
          strokeWidth={9}
        />
        <path
          fill="none"
          stroke="#4a878c"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={12}
          d="M360.97 178.39v14.02M361.16 247.79v14.02M319.41 220.01h14.02M388.83 219.82h14.02"
        />
        <path
          fill="none"
          stroke="#88f5ff"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={16}
          d="M262.95 38.66v32.1M263.33 197.61v32.1M167.75 133.9h32.11M326.8 133.53h32.11"
        />
        <path
          d="M233.47 161.87a38.11 38.11 0 010-53.82M291.93 161.87a38.1 38.1 0 000-53.82"
          fill="none"
          stroke="#071841"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={12}
        />
        <circle cx={361.16} cy={219.57} fill="#73d0d9" r={19.34} />
        <circle cx={361.16} cy={219.57} r={14.02} fill="#071841" />
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
        text="The business landscape is perennially transforming, at RPI, we recognise the importance of staying ahead of the curve to accommodate the requirements of an ever-evolving workforce. Our unrivalled knowledge and experience expertly positions the team to deliver a wide range of talent solutions across multiple sectors."
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
      <CTA />
    </Layout>
  );
};

export default Specialisms;
