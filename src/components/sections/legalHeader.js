import React from 'react';
import styled from 'styled-components';

const LegalHeaderStyles = styled.header`
  width: 100%;
  padding: 5rem 0 3rem 0;
  background-color: var(--offWhite);
  @media only screen and (min-width: 768px) {
    padding: 7rem 0 4rem 0;
  }
  .l-h {
    width: 90%;
    margin: var(--auto);
    max-width: var(--maxWidth);
    h6 {
      text-transform: uppercase;
      color: var(--newCyan);
    }
    span {
      margin-top: 0.5rem;
      color: var(--newCyan);
      font-weight: 900;
      padding-left: 5px;
    }
  }
`;
const LegalHeader = ({ title, date }) => (
  <LegalHeaderStyles>
    <div className="l-h">
      <h6>Legal</h6>
      <h1>{title}</h1>
      <p>
        Effective Date:
        <span>{date}</span>
      </p>
    </div>
  </LegalHeaderStyles>
);

export default LegalHeader;
