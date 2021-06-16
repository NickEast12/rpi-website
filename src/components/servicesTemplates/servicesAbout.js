import React from 'react';
import styled from 'styled-components';

const ServicesAboutStyles = styled.section`
  width: 100%;
  padding: 3rem 0;
  .s-a {
    width: 90%;
    margin: var(--auto);
    text-align: center;
    max-width: var(--maxWidth);
    h4 {
      font-size: 2rem;
      font-weight: 800;
      @media only screen and (min-width: 768px) {
        font-size: 2.1rem;
      }
      span {
        font-size: inherit;
        font-weight: 800;
        color: #73d0d9;
      }
    }
    &__wrapper {
      padding: 2rem 0;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 3rem 0rem;
      @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        padding-top: 3rem;
      }
      &__box {
        h6,
        span {
          text-transform: uppercase;
        }
        p {
          font-size: 3rem;
          font-weight: 800;
          color: #66c2ab;
        }
        span {
          display: block;
          font-size: 1.1rem;
          font-weight: 700;
        }
      }
    }
  }
`;

const data = [
  {
    title: 'We speak',
    no: 35,
    fact: 'Different languages',
  },
  {
    title: 'We have',
    no: 75,
    fact: 'Staff across 6 offices',
  },
  {
    title: 'Our leaders average',
    no: 15,
    fact: 'Years in the sector',
  },
];
const ServicesAbout = () => {
  const i = true;
  return (
    <ServicesAboutStyles>
      <div className="s-a">
        <h4>
          RPI is your gateway to
          <br />
          <span>the talent that will transform your business</span>{' '}
        </h4>
        <div className="s-a__wrapper">
          {data.map((x) => (
            <div className="s-a__wrapper__box" key={x.no}>
              <h6>{x.title}</h6>
              <p>{x.no}</p>
              <span>{x.fact}</span>
            </div>
          ))}
        </div>
      </div>
    </ServicesAboutStyles>
  );
};

export default ServicesAbout;
