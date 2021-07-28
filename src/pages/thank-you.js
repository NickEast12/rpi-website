import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Message from '../components/sections/message';

const ThankYou = () => {
  const i = true;
  return (
    <Layout>
      <Message
        code="Success"
        title="Thank you for signing up to our mailing list"
        text="Keep an eye on your inbox"
        btn="Home"
      />
    </Layout>
  );
};

export default ThankYou;
