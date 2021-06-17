import React from 'react';
import styled from 'styled-components';
//* Local imports
import RocketIcon from '../../svgs/rocket.svg';
import EyeIcon from '../../svgs/eye.svg';
import InternationalIcon from '../../svgs/grid.svg';
import KnowledgeIcon from '../../svgs/knowledge.svg';

const StatsStyles = styled.section`
  width: 100%;
  padding: 3rem 0;
  .stats {
    width: 90%;
    margin: var(--auto);
    max-width: var(--maxWidth);
    &__text {
      h3 {
        margin: 0.25rem 0 0.5rem 0;
      }
      p {
        margin-bottom: 0.5rem;
      }
    }
    &__boxes {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
      padding: 1.5rem 0;
      svg {
        width: 35px;
        height: 35px;
        fill: var(--newBlue);
      }
      h5 {
        margin: 0.5rem 0;
        font-size: 1.1rem;
        font-weight: 700;
      }
    }
    @media only screen and (min-width: 1024px) {
      display: grid;
      grid-template-columns: 1fr 55%;
      grid-gap: 4rem;
      &__boxes {
        padding: 0;
      }
    }
  }
`;
const Stats = () => {
  const i = true;
  return (
    <StatsStyles>
      <div className="stats">
        <div className="stats__text">
          <h6 className="sbt">Get started with RPI</h6>
          <h3>What are we looking for?</h3>
          <p>
            To be an RP International consultant, you’ll know that matching
            people to places is about more than ticking off requirements on a
            list, and that it requires a deeper understanding of both client and
            candidate.
          </p>
        </div>
        <div className="stats__boxes">
          <section>
            <EyeIcon />
            <h5>You need to have an excellent eye for detail</h5>
          </section>
          <section>
            <InternationalIcon />
            <h5>
              You’ll need an understanding of the bigger international picture
            </h5>
          </section>
          <section>
            <RocketIcon />
            <h5>
              You’re goal-oriented and ambitious, you’ll relish going a step
              further to deliver the right results
            </h5>
          </section>
          <section>
            <KnowledgeIcon />
            <h5>
              You’re prepared to learn, develop and improve, in a team that has
              turned acquiring talent into an artform
            </h5>
          </section>
        </div>
      </div>
    </StatsStyles>
  );
};

export default Stats;
