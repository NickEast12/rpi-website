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
import Illustration from '../svgs/template-1.svg';
import MainHeader from '../components/sections/mainHeader';

const JoinTheTeam = () => {
  const i = true;
  return (
    <Layout>
      <MainHeader
        page="Join our team"
        title="Join our team header"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio autem
          nobis, temporibus sunt similique sint iure repudiandae dolorum
          distinctio perspiciatis a commodi asperiores, blanditiis voluptatum!"
      >
        <Illustration />
      </MainHeader>
      <Join />
      <Stats />
      <Reviews />
      <Diversity />
      <CSR />
      <CTA />
    </Layout>
  );
};

export default JoinTheTeam;
