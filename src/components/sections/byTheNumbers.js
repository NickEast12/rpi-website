import React, { useState } from 'react';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';
import CountUp from 'react-countup';

const data = [
  {
    no: 120,
    fact: 'Employees',
  },
  {
    no: 12,
    fact: 'Nationalities',
  },
  {
    no: 6,
    fact: 'Languages spoken',
  },
];
const ByTheNumbersStyles = styled.section`
  width: 100%;
  background-color: var(--background);
  padding: 3rem 0;
  color: var(--offWhite);

  .numbers {
    width: 90%;
    margin: var(--auto);
    text-align: center;
    max-width: var(--maxWidth);
    &__box {
      margin-bottom: 2rem;
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
              {on ? <CountUp end={x.no} duration={12} /> : <p>0</p>}
              <p>{x.fact}</p>
            </div>
          ))}
        </div>
      </Waypoint>
    </ByTheNumbersStyles>
  );
};

export default ByTheNumbers;
