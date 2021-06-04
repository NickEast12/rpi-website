import React from 'react';
import styled from 'styled-components';
//* Local imports
import Layout from '../components/Layout';
import CTA from '../components/CTA';
import JoinTheTeam from '../components/sections/joinTheTeam';
import TheTeam from '../components/sections/theTeam';

const OurTeam = () => {
  const i = true;
  return (
    <Layout>
      <TeamHeader />
      <TheTeam />
      <JoinTheTeam />
      <CTA />
    </Layout>
  );
};

export default OurTeam;

const TeamHeaderStyles = styled.header`
  width: 100%;
  padding: 6rem 0 3rem 0;
  background-color: var(--white);
  .thead {
    width: 90%;
    margin: var(--auto);
    text-align: center;
    h1 {
      font-size: 2.35rem;
    }
    p {
      margin-top: 0.5rem;
    }
  }
`;
const TeamHeader = () => {
  const i = true;
  return (
    <TeamHeaderStyles>
      <div className="thead">
        <h1>The team header</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          ipsum? Pariatur, magni maxime! Consectetur, expedita.
        </p>
      </div>
    </TeamHeaderStyles>
  );
};
