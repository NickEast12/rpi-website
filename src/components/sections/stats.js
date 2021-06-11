import React from 'react';
import styled from 'styled-components';
//* Local imports
import RocketIcon from '../../svgs/rocket.svg';

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
        width: 30px;
        height: 30px;
        fill: var(--mainColour);
      }
      h5 {
        margin: 0.5rem 0;
      }
    }
    @media only screen and (min-width: 1024px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
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
          <h6 className="sbt">Inside RPI</h6>
          <h3>Get started at RPI</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            assumenda nesciunt at sapiente sint reiciendis ipsa quibusdam rerum
            similique magnam.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            dignissimos nostrum odio unde facere laborum.
          </p>
        </div>
        <div className="stats__boxes">
          <section>
            <RocketIcon />
            <h5>We accelerate learning</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis.
            </p>
          </section>
          <section>
            <RocketIcon />
            <h5>We accelerate learning</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis.
            </p>
          </section>
          <section>
            <RocketIcon />
            <h5>We accelerate learning</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis.
            </p>
          </section>
          <section>
            <RocketIcon />
            <h5>We accelerate learning</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis.
            </p>
          </section>
        </div>
      </div>
    </StatsStyles>
  );
};

export default Stats;
