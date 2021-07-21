import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Message from '../components/sections/message';

const Success = () => {
  const i = true;
  return (
    <Layout>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Message
        code="Success"
        title="Thank you for your getting in touch"
        text="A member of the team will be in touch shortly."
        btn="Home"
      />
    </Layout>
  );
};

export default Success;
