import React from 'react';
//* Local imports
import Layout from '../components/Layout';
import AboutBody from '../components/sections/aboutBody';
import AltHeader from '../components/sections/altHeader';
import ByTheNumbers from '../components/sections/byTheNumbers';
import Mission from '../components/sections/mission';
import Values from '../components/sections/values';

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
    </Layout>
  );
};

export default AboutUs;
