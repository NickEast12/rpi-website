import React from 'react';
import Layout from '../components/Layout';
import Message from '../components/sections/message';

const NotFound = () => {
  const i = true;
  return (
    <Layout>
      <Message
        code="404"
        title="Hmm, we can't seem to find that page"
        text="Let's get you back somewhere safe "
        btn="Back to safety"
      />
    </Layout>
  );
};

export default NotFound;
