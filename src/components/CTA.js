import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const CTAStyles = styled.section`
  width: 100%;
  background-color: var(--mainColour);
  .cta {
    padding: 3rem 0;
    width: 90%;
    margin: var(--auto);
    text-align: center;
    color: var(--offWhite);
    h3 {
      font-size: 2.35rem;
    }
    p {
      margin: 0.75rem 0;
    }
    button {
      margin-top: 1rem;
      width: 200px;
      border: solid 1px var(--offWhite);
      background-color: var(--offWhite);
      span {
        color: var(--mainColour);
      }
    }
  }
`;
const CTA = () => (
  <CTAStyles>
    <div className="cta">
      <div className="cta--text">
        <h3>Ready to get started?</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque totam
          asperiores exercitationem est commodi nam!
        </p>
      </div>
      <div className="cta--btn">
        <Link to="/">
          <button type="button" className="btn ">
            <span>Get started</span>
          </button>
        </Link>
      </div>
    </div>
  </CTAStyles>
);

export default CTA;
