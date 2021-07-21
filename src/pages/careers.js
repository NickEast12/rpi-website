import React from 'react';
//* Local imports
import styled from 'styled-components';
import Layout from '../components/Layout';
import CTA from '../components/CTA';
import Diversity from '../components/sections/diversity';
import CSR from '../components/sections/csr';
import Join from '../components/sections/join';
import Stats from '../components/sections/stats';
import Reviews from '../components/sections/reviews';
import Illustration from '../svgs/who.svg';
import MainHeader from '../components/sections/mainHeader';
import CareersCTA from '../components/sections/careersCTA';
import SEO from '../components/functional/SEO';
import CareersForm from '../components/sections/careers-form';

const Careers = () => {
  const i = true;
  return (
    <Layout>
      <SEO
        title="Work For Us | Join Our Team | RPI "
        description="We’re looking for recruiters with an international outlook to join our team and help our clients access the best in global talent. Join us here."
      />
      <MainHeader
        page="Join the team"
        title="We’re looking for talented recruiters"
        text="What does it take to get the right skills, in the right place, at the right time? A global mindset. At RPI, we’re looking for recruiters with an international outlook to join our team and help our clients access the best in global talent."
      >
        <Illustration />
      </MainHeader>
      <Join />
      <Stats />
      <CareersCTA />
      <CareersForm />
      <Reviews />
      <Diversity />
      <CSR />
      <CTA />
    </Layout>
  );
};

export default Careers;
