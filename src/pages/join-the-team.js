import React from 'react';
//* Local imports
import styled from 'styled-components';
import Layout from '../components/Layout';
import CTA from '../components/CTA';
import Diversity from '../components/sections/diversity';
import CSR from '../components/sections/csr';
import Join from '../components/sections/join';
import Stats from '../components/sections/stats';
import Reviews from '../components/sections/reviews';
import Illustration from '../svgs/template-1.svg';

const JoinTheTeam = () => {
  const i = true;
  return (
    <Layout>
      <Header />
      <Join />
      <Stats />
      <Reviews />
      <Diversity />
      <CSR />
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
    padding: 5rem 0 3rem 0;
    max-width: var(--maxWidth);
    @media only screen and (min-width: 1024px) {
      padding: 6rem 0 4rem 0;
    }
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
    @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
      &__left,
      &__right {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    @media only screen and (min-width: 1024px) {
      grid-gap: 2rem;
      padding: 7rem 0 4rem 0;
      &__right {
        width: 80%;
        margin: var(--auto);
      }
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
