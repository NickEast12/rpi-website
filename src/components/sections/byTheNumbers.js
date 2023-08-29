import React, { useState } from 'react';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';
import CountUp from 'react-countup';
import { Link } from 'gatsby';

const data = [
  {
    title: 'We speak',
    no: 35,
    fact: 'Different languages',
    link: '/join-the-team',
  },
  {
    title: 'We have',
    no: 55,
    fact: 'Staff across 9 offices',
  },
  {
    title: 'Our leaders average',
    no: 15,
    fact: 'Years in the sector',
  },
];
const ByTheNumbersStyles = styled.section`
  width: 100%;
  background-color: var(--background);
  padding: 3rem 0;
  color: var(--offWhite);
  h4 {
    color: var(--offWhite);
    text-align: center;
    padding-bottom: 2rem;
    font-size: 2.25rem;
  }
  .numbers {
    width: 90%;
    margin: var(--auto);
    text-align: center;
    max-width: var(--maxWidth);
    &__box {
      margin-bottom: 2rem;
      h6 {
        color: var(--offWhite);
        text-transform: uppercase;
        font-size: 1rem;
        margin-bottom: 0.5rem;
      }
      span {
        font-size: 3.5rem;
        font-weight: 800;
      }
      p {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--offWhite);
      }
    }
    @media only screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      &__box {
        margin-bottom: 0;
      }
    }
  }
`;
const ByTheNumbers = () => {
  const [on, setOn] = useState(false);
  function handleEnter() {
    setOn(true);
  }
  return (
    <ByTheNumbersStyles>
      <Waypoint onEnter={handleEnter}>
        <div className="numbers">
          {data.map((x) => (
            <div className="numbers__box">
              <h6>{x.title}</h6>
              {on ? <CountUp end={x.no} duration={5} /> : <p>0</p>}
              <p>{x.fact}</p>
            </div>
          ))}
        </div>
      </Waypoint>
    </ByTheNumbersStyles>
  );
};

export default ByTheNumbers;
