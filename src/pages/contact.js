import React from 'react';
//* Local imports
import Layout from '../components/Layout';
import AltHeader from '../components/sections/altHeader';
import CMain from '../components/sections/cMain';
import ContactLocations from '../components/sections/contactLocations';
import CTA from '../components/CTA';

const Contact = () => {
  const i = true;
  return (
    <Layout>
      <AltHeader
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
