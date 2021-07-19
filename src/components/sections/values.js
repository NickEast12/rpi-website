import React from 'react';
import styled from 'styled-components';

const data = [
  {
    value: 'Excellence.',
    text:
      'We strive to deliver excellence to our clients and candidates in all that we do.',
  },
  {
    value: 'Agility.',
    text:
      'We have a flexible and innovative approach, offering a superior experience for our clients and candidates.',
  },
  {
    value: 'Connection.',
    text:
      'Our strength comes from the quality and trust based relationships that we hold locally and globally, which permeate out to our clients and candidates.',
  },
  {
    value: 'Expertise.',
    text:
      'We are experts in sourcing talent for technology-enabled transformation. We seek out expertise in our specialisms, services, and geographical locations.',
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
    @media only screen and (min-width: 1280px) {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 1rem;
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
      @media only screen and (min-width: 1024px) {
        grid-gap: 2rem 8rem;
      }
      @media only screen and (min-width: 1280px) {
        grid-gap: 2rem 1.5rem;
        padding-top: 0;
      }
    }
  }
`;
const Values = () => {
  const i = true;
  return (
    <ValuesStyles>
      <div className="values">
        <div className="values__text">
          <h4>Our values</h4>
        </div>

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
