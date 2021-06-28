import React from 'react';
import styled from 'styled-components';
//* Local imports
import Layout from '../components/Layout';
import AboutBody from '../components/sections/aboutBody';
import ByTheNumbers from '../components/sections/byTheNumbers';
import CSR from '../components/sections/csr';
import Diversity from '../components/sections/diversity';
import Mission from '../components/sections/mission';
import Values from '../components/sections/values';
import CTA from '../components/CTA';
import Illustration from '../svgs/who.svg';
import MainHeader from '../components/sections/mainHeader';
import SEO from '../components/functional/SEO';
import WhereWeWork from '../components/sections/wherewework';

const AboutUs = () => {
  const i = true;
  return (
    <Layout>
      <SEO
        title="About Us | Specialist Recruitment Partner | RPI"
        description="Find out about us and discover how RPI can be your gateway to the best talent globally. Find the leaders and build innovative teams to achieve your business transformation goals."
      />
      <MainHeader
        page="About us"
        title="A trusted partner to identify and deliver the best talent"
        text="Our deep market knowledge, extensive relationships with industry leaders and bespoke services make RPI your go-to specialist recruitment partner"
      >
        <Illustration />
      </MainHeader>
      <Mission />
      <AboutBody />
      <ByTheNumbers />
      <Values />
      <WhereWeWork />
      <Diversity />
      <CSR />
      <CTA />
    </Layout>
  );
};

export default AboutUs;

const AboutUsHeaderStyles = styled.header`
  width: 100%;
  background-color: var(--offWhite);
  padding: 5rem 0 3rem 0;
  @media only screen and (min-width: 1024px) {
    padding: 6rem 0 4rem 0;
  }
  .a-h {
    max-width: var(--maxWidth);
    width: 90%;
    margin: var(--auto);
    &__left {
      h1 {
        margin: 0.5rem 0;
        font-size: 2.75rem;
      }
    }
    &__right {
      margin-top: 1rem;
      /* max-width: 450px; */
    }
    @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
      &__left,
      &__right {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    @media only screen and (min-width: 1024px) {
      grid-gap: 2rem;
      padding: 1.5rem 0;
      &__right {
        width: 80%;
        margin: var(--auto);
      }
    }
  }
`;
const AboutUsHeader = () => (
  <AboutUsHeaderStyles>
    <div className="a-h">
      <div className="a-h__left">
        <h6 className="sbt">About us</h6>
        <h1>Title introducing RPI </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio autem
          nobis, temporibus sunt similique sint iure repudiandae dolorum
          distinctio perspiciatis a commodi asperiores, blanditiis voluptatum!
        </p>
      </div>
      <div className="a-h__right">
        <Illustration />
      </div>
    </div>
  </AboutUsHeaderStyles>
);
