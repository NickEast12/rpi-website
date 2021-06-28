import React from 'react';
import styled from 'styled-components';

const ServiceTestimonialStyles = styled.section`
  width: 100%;
  padding: 3rem 0;
  background-color: var(--background);
  @media only screen and (min-width: 1024px) {
    padding: 4.5rem 0;
  }
  .testimonal {
    width: 90%;
    margin: var(--auto);
    max-width: var(--maxWidth);
    q,
    h6 {
      color: var(--offWhite);
      text-align: center;
      margin: var(--auto);
      display: block;
    }
    q {
      max-width: 1000px;
      margin-bottom: 1.5rem;
    }
  }
  h5 {
    font-weight: 400;
  }
  h6 {
    margin-top: 1.5rem;
    font-size: 1.35rem;
    font-weight: 300;
    span {
      font-weight: 700;
      padding-right: 5px;
      font-size: 1.35rem;
    }
  }
`;
const ServiceTestimonial = ({ quotef, quotes, quotet, name, company }) => {
  const i = true;
  return (
    <ServiceTestimonialStyles>
      <div className="testimonal">
        <q>
          {quotef}
          {quotes}
          {quotet}
        </q>
        {/* <p>
            <span>{quotef}</span>
          </p>
          <p>
            <span>{quotes}</span>
          </p>
          <p>
            <span>{quotet}</span>
          </p> */}
        <h6>
          <span>{name}</span>• {company}
        </h6>
      </div>
    </ServiceTestimonialStyles>
  );
};

export default ServiceTestimonial;
