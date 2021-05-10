import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/functional/SEO';
import Landing from '../components/pageComponents/Landing';
import About from '../components/pageComponents/About';
import Experience from '../components/pageComponents/Experience';
import Work from '../components/pageComponents/Work';

const index = () => {
  const i = true;
  return (
    <Layout>
      <SEO />
      <main>
        <Landing />
        <About />
        <Experience />
        <Work />
      </main>
    </Layout>
  );
};

export default index;
