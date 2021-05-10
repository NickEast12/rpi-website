import React from 'react';
import styled from 'styled-components';
import DesignIcon from '../../svgs/design.svg';
import CodeIcon from '../../svgs/code.svg';
import ProblemSolverIcon from '../../svgs/code-error.svg';

const AboutStyles = styled.section`
  width: 100%;
  /* background-color: var(--secondaryColour); */
  background-color: #fff;
  padding: 5rem 0;
  .about {
    width: 90%;
    margin: 0 auto;
    &--me {
      text-align: center;
      h2 {
        font-family: var(--title);
        font-size: 2.15rem;
        font-weight: 600;
      }
      p {
        margin: 1.5rem 0;
      }
    }
  }
  .boxes {
    width: 90%;
    margin: 2rem auto 0 auto;
    .box {
      margin: 1rem auto 2rem auto;
      background-color: #fff;
      padding: 1.85rem 1rem;
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
      width: 100%;
      text-align: center;
      svg {
        width: 80px;
      }
      h3 {
        font-weight: 600;
        margin: 0.85rem 0;
      }
    }
  }
`;
const About = () => {
  const i = true;
  return (
    <AboutStyles>
      <div className="about">
        <div className="about--me">
          <h2>
            <span>A nice catchy title to introduce me</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lobortis nisl ac risus facilisis aliquet. Curabitur blandit pulvinar
            sodales. Etiam at elit et elit ultricies aliquet. Donec leo nibh,
            egestas eu metus a, suscipit laoreet erat. Maecenas egestas sed ante
            a lacinia. Nulla nec nunc nisl.
          </p>
        </div>
      </div>
      <div className="boxes">
        <div className="box">
          <DesignIcon />
          <h3>Designer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, ex?
            Et beatae dicta cumque laudantium.
          </p>
        </div>
        <div className="box">
          <CodeIcon />
          <h3>Front-end Developer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, ex?
            Et beatae dicta cumque laudantium.
          </p>
        </div>
        <div className="box">
          <ProblemSolverIcon />
          <h3>Problem solver</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, ex?
            Et beatae dicta cumque laudantium.
          </p>
        </div>
      </div>
    </AboutStyles>
  );
};

export default About;
