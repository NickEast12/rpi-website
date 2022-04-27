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
import { EmailSignUp } from '../components/EmailSignUp';

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
      <CTA />
      <WhereWeWork />
      <Diversity />
      <CSR />
      <EmailSignUp />
    </Layout>
  );
};

export default AboutUs;
