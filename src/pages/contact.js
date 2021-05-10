import { Link } from 'gatsby';
import React from 'react';
import { Gradient } from 'react-gradient';
import styled from 'styled-components';

import Layout from '../components/Layout';

const TestStyles = styled.section`
  width: 100%;
  height: 100%;
  .react-gradient {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 50vh !important;
  }
`;
const Contact = ({ location }) => {
  const gradients = [
    ['#16222A', '#3A6073'],
    ['#44A08D', '#093637'],
  ];
  return (
    <Layout location={location}>
      <h1 className="title--bold">Contact page</h1>
      <Link to="/">home</Link>
      <TestStyles>
        <Gradient
          gradients={gradients} // required
          property="background"
          trasitionType="sequential"
          duration={5000}
          angle="150deg"
        />
      </TestStyles>
    </Layout>
  );
};

export default Contact;
