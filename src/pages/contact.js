import React from 'react';
//* Local imports
import Layout from '../components/Layout';
import CMain from '../components/sections/cMain';
import ContactLocations from '../components/sections/contactLocations';
import CTA from '../components/CTA';
import DarkHeader from '../components/sections/darkHeader';

const Contact = () => {
  const i = true;
  return (
    <Layout>
      <DarkHeader
        title="Contact us"
        text="Are you ready to find the talent that will ignite transformation in your business?"
      />
      <CMain />
      <ContactLocations />
    </Layout>
  );
};

export default Contact;
