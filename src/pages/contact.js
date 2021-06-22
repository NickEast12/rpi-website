import React from 'react';
//* Local imports
import Layout from '../components/Layout';
import CMain from '../components/sections/cMain';
import ContactLocations from '../components/sections/contactLocations';
import CTA from '../components/CTA';
import DarkHeader from '../components/sections/darkHeader';
import SEO from '../components/functional/SEO';

const Contact = () => {
  const i = true;
  return (
    <Layout>
      <SEO
        title="Contact Us | Specialist Recruitment Partner | RPI"
        description="Looking for a specialist recruitment partner that will connect business strategy, talent and technology to drive transformation? Let's talk. Visit our contact page to get in touch."
      />
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
