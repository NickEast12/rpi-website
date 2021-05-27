import React from 'react';
import styled from 'styled-components';
//* Local imports
import Illustration from '../../svgs/template-1.svg';

const ServiceTestimonialStyles = styled.section`
  width: 100%;
  .testimonal {
    width: 90%;
    margin: var(--auto);
    padding: 3rem 0;
    &__left {
      background-color: var(--darkTeal);
      padding: 1.5rem;
    }
    &__right {
      background-color: var(--offWhite);
      padding: 2rem 1rem;
      .quote {
        position: relative;
        width: 50px;
        height: 50px;
        span {
          display: flex;
          font-family: 'Helvetica Neue', Helvetica;
          align-items: baseline;
          padding-left: 6px;
          background-color: var(--darkTeal);
          font-size: 5rem;
          width: 100%;
          height: 100%;
          position: absolute;
          line-height: 1;
          color: var(--offWhite);
        }
      }
      h4 {
        margin-top: 1rem;
      }
      h6 {
        margin-top: 1rem;
        font-weight: 400;
        span {
          font-size: inherit;
          font-weight: 700;
          padding-right: 10px;
        }
      }
    }
  }
`;
const ServiceTestimonial = ({ icon, quote, name, company }) => {
  const i = true;
  return (
    <ServiceTestimonialStyles>
      <div className="testimonal">
        <div className="testimonal__left">{icon}</div>
        <div className="testimonal__right">
          <div className="quote">
            <span>”</span>
          </div>
          <h4>{quote}</h4>
          <h6>
            <span>{name}</span>• {company}
          </h6>
        </div>
      </div>
    </ServiceTestimonialStyles>
  );
};

export default ServiceTestimonial;
