import React from 'react';
import styled from 'styled-components';
import { Gradient } from 'react-gradient';

const BgStyles = styled.div`
  width: 100%;
  position: relative;
  .react-gradient {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
  }
`;
const LandingStyles = styled.header`
  width: 100%;
  height: 100vh;
  .landing {
    width: 90%;
    margin: 0 auto;
    text-align: left;
    padding-top: 8rem;
    @media only screen and (min-width: 375px) {
      padding-top: 9.5rem;
    }
    @media only screen and (min-width: 414px) {
      padding-top: 11.5rem;
    }
    color: var(--secondaryColour);
    h6 {
      /* color: var(--mainColour); */
      font-size: var(--text);
      margin-bottom: 1rem;
    }
    h1 {
      margin-bottom: 1rem;
      font-weight: 500;
      span {
        font-weight: 700;
        position: relative;
        z-index: -2;
        &::after {
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: var(--mainColour);
          content: '';
          bottom: 0;
          left: 0;
        }
      }
    }
    > p {
      margin-bottom: 0.95rem;
    }
    button {
      margin-top: 0.5rem;
      padding: 0.75rem 0;
      width: 140px;
    }
  }
`;
const Landing = () => {
  const gradients = [
    ['#16222A', '#3A6073'],
    ['#0A1A2E', '#093637'],
    ['#4e94fb', '#69ffb7'],
  ];
  return (
    <>
      <BgStyles>
        <Gradient
          gradients={gradients} // required
          property="background"
          duration={5000}
          angle="150deg"
        />
      </BgStyles>
      <LandingStyles>
        <div className="landing">
          <h6 className="subtitle">Hi, i'm Nick </h6>
          <h1>
            I build <span>Websites</span> and other cool things for the web!
          </h1>
          {/* <h1>I'm a Designer &amp; Front-end Developer</h1> */}
          {/* <h1>I'm a Front-end Developer &amp; Designer</h1> */}
          <p>
            I’m a self-taught Front-end Developer and UI/UX designer based in
            London, UK.
          </p>
          <button type="button" className="btn btn--main">
            <span>Say hello</span>
          </button>
        </div>
      </LandingStyles>
    </>
  );
};

export default Landing;

// &:nth-child(1n) {
//   background: #4e94fb;
// }
// &:nth-child(2n) {
//   background: #69ffb7;
// }
// &:nth-child(3n) {
//   background: #ef5e93;
// }
