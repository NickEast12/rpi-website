import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const CTAStyles = styled.section`
  width: 100%;
  background: rgb(102, 194, 171);
  background: linear-gradient(
    344deg,
    rgba(102, 194, 171, 1) 33%,
    rgba(115, 208, 217, 1) 92%
  );

  .cta {
    max-width: var(--maxWidth);
    padding: 5rem 0;
    width: 90%;
    margin: var(--auto);
    text-align: center;
    h3 {
      color: var(--offWhite);
      font-size: 2.35rem;
      max-width: 850px;
      margin: var(--auto);
    }
    p {
      color: var(--offWhite);
      margin: 0.75rem auto;
      max-width: 650px;
    }
    button {
      margin-top: 2rem;
      width: 200px;
      border: solid 1px var(--offWhite);
      background-color: var(--offWhite);
      span {
        color: #66c2ab;
      }
    }
  }
`;
const CTA = () => (
  <CTAStyles>
    <div className="cta">
      <div className="cta--text">
        <h3>RPI unlock the door to access the best tech talent globally</h3>
      </div>
      <div className="cta--btn">
        <Link to="/contact">
          <button type="button" className="btn ">
            <span>Get started</span>
          </button>
        </Link>
      </div>
    </div>
  </CTAStyles>
);

export default CTA;
