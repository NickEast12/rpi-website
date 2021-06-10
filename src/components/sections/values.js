import React from 'react';
import styled from 'styled-components';

const data = [
  {
    value: 'Excellence',
    text:
      'We strive to deliver excellence to our clients, candidates and in all that we do',
  },
  {
    value: 'Agility',
    text:
      'We strive to deliver excellence to our clients, candidates and in all that we do',
  },
  {
    value: 'Connection',
    text:
      'We strive to deliver excellence to our clients, candidates and in all that we do',
  },
  {
    value: 'Expertise',
    text:
      'We strive to deliver excellence to our clients, candidates and in all that we do',
  },
];
const ValuesStyles = styled.section`
  width: 100%;
  padding: 3rem 0;
  .values {
    width: 90%;
    margin: 0 auto;
    max-width: var(--maxWidth);
    @media only screen and (min-width: 768px) {
      width: 80%;
    }
    h4 {
      font-size: 2.35rem;
    }
    p {
      margin-top: 0.75rem;
    }
    &__wrapper {
      display: grid;
      margin-top: 1rem;
      &__box {
        margin-bottom: 0.85rem;
        h5 {
          font-size: 1.5rem;
          span {
            background-color: var(--background);
            font-size: inherit;
            padding: 0.25rem 0.5rem;
            color: var(--offWhite);
            display: inline-block;
          }
        }
      }
      @media only screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem 2rem;
        padding-top: 2rem;
      }
    }
  }
`;
const Values = () => {
  const i = true;
  return (
    <ValuesStyles>
      <div className="values">
        <h4>Our values</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, omnis.
        </p>
        <div className="values__wrapper">
          {data.map((x) => (
            <div className="values__wrapper__box" key={x.value}>
              <h5>
                <span>{x.value}</span>
              </h5>
              <p>{x.text}</p>
            </div>
          ))}
        </div>
      </div>
    </ValuesStyles>
  );
};

export default Values;
