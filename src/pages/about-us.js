import React from 'react';
//* Local imports
import Layout from '../components/Layout';
import AboutBody from '../components/sections/aboutBody';
import AltHeader from '../components/sections/altHeader';
import ByTheNumbers from '../components/sections/byTheNumbers';
import CSR from '../components/sections/csr';
import Diversity from '../components/sections/diversity';
import Mission from '../components/sections/mission';
import Values from '../components/sections/values';
import CTA from '../components/CTA';
import JoinOurTeam from '../components/sections/joinTheTeam';

const AboutUs = () => {
  const i = true;
  return (
    <Layout>
      <AltHeader
        title="The about us title"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sint saepe, sed quam enim nesciunt?"
        btn="Get started"
      />
      <Mission />
      <AboutBody />
      <ByTheNumbers />
      <Values />
      <Diversity />
      <CSR />
      <JoinOurTeam />
      <CTA />
    </Layout>
  );
};

export default AboutUs;
