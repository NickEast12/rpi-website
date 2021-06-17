import React from 'react';
import Layout from '../components/Layout';
import Message from '../components/sections/message';

const NotFound = () => {
  const i = true;
  return (
    <Layout>
      <Message message="404" text="test" />
    </Layout>
  );
};

export default NotFound;
