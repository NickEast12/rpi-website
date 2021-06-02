import React from 'react';
import Layout from '../components/Layout';
import AltHeader from '../components/sections/altHeader';
import CMain from '../components/sections/cMain';

const Contact = () => {
  const i = true;
  return (
    <Layout>
      <AltHeader
        title="Contact us"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo nam, voluptas doloremque fugiat nihil dolore!"
      />
      <CMain />
    </Layout>
  );
};

export default Contact;
