import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Hero from '../components/sections/hero';
import UVP from '../components/sections/uvp';
import Services from '../components/sections/services';
import WhoWeAre from '../components/sections/whoweare';
import WhereWeWork from '../components/sections/wherewework';
import Layout from '../components/layout';

const IndexPageStyles = styled.section`
  width: 100%;
`;
const IndexPage = () => {
  const i = true;
  return (
    <Layout>
      <IndexPageStyles>
        <Hero />
        <UVP />
        <Services />
        <WhoWeAre />
        <WhereWeWork />
      </IndexPageStyles>
    </Layout>
  );
};

export default IndexPage;
