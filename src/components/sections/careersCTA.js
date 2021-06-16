import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const CareersCTAStyles = styled.section`
  width: 100%;
  padding: 4rem 0;
  border-top: solid 1px rgba(0, 0, 0, 0.05);
  border-bottom: solid 1px rgba(0, 0, 0, 0.05);
  .ca {
    text-align: center;
    max-width: var(--maxWidth);
    margin: var(--auto);
    h3 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      span {
        font-size: inherit;
      }
    }
  }
`;

const CareersCTA = () => {
  const i = true;
  return (
    <CareersCTAStyles>
      <div className="ca">
        <h3>
          If you’re up to the challenge, <br />{' '}
          <span>we want to hear from you today.</span>
        </h3>
        <button type="button" className="btn btn--main">
          <Link to="/contact">
            <span>Get in contact</span>
          </Link>
        </button>
      </div>
    </CareersCTAStyles>
  );
};

export default CareersCTA;
