import React from 'react';
//* Local imports
import styled from 'styled-components';
import Layout from '../components/Layout';
import CTA from '../components/CTA';
import Diversity from '../components/sections/diversity';
import CSR from '../components/sections/csr';
import AltHeader from '../components/sections/altHeader';
import Join from '../components/sections/join';
import LookingFor from '../components/sections/lookingFor';
import Stats from '../components/sections/stats';
import Reviews from '../components/sections/reviews';
import Illustration from '../svgs/template-1.svg';

const JoinTheTeam = () => {
  const i = true;
  return (
    <Layout>
      <Header />
      <Join />
      <LookingFor />
      <Stats />
      <Reviews />
      <CSR />
      <Diversity />
      <CTA />
    </Layout>
  );
};

export default JoinTheTeam;

const HeaderStyles = styled.header`
  width: 100%;
  background-color: var(--offWhite);
  .j-head {
    width: 90%;
    margin: 0 auto;
    padding: 6rem 0 1.5rem 0;
    &__left {
      h1 {
        margin: 0.5rem 0;
        font-size: 2.35rem;
      }
      button {
        margin-top: 1.2rem;
        width: 185px;
      }
    }
    &__right {
      width: 90%;
      margin: 2rem auto;
    }
  }
`;
const Header = () => (
  <HeaderStyles>
    <div className="j-head">
      <div className="j-head__left">
        <h6 className="sbt">Join our team</h6>
        <h1>Join our team header</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          doloribus dolore sit. Voluptatibus dignissimos iste fugit, molestiae
          vel neque accusamus.
        </p>
        <button type="button" className="btn btn--main">
          <span>Get started</span>
        </button>
      </div>
      <div className="j-head__right">
        <Illustration />
      </div>
    </div>
  </HeaderStyles>
);
