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
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo nam, voluptas doloremque fugiat nihil dolore!"
      />
      <CMain />
      <ContactLocations />
      <CTA />
    </Layout>
  );
};

export default Contact;
