import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/functional/SEO';
import Test from '../svgs/PR-illustration-2.svg';
import Homepage from '../components/pageComponents/Homepage';
import Content from '../components/pageComponents/Content';
import SocialMedia from '../components/pageComponents/SocialMedia';

const index = ({ location }) => {
  const i = true;
  return (
    <Layout location={location}>
      <SEO />
      <main>
        <Homepage />
        <Content />
        <SocialMedia />
      </main>
    </Layout>
  );
};

export default index;
