import React from 'react';
import styled from 'styled-components';

const LegalBodyStyles = styled.section`
  width: 100%;
  .l-b {
    width: 90%;
    padding: 1.5rem 0;
    margin: var(--auto);
    max-width: var(--maxWidth);
    section {
      margin-bottom: 1rem;
      h4 {
        font-size: 1.7rem;
        margin-bottom: 0.5rem;
      }
      h5 {
        margin: 1rem 0;
      }
      p {
        margin-bottom: 0.5rem;
        span {
          color: var(--newCyan);
          font-weight: 600;
        }
      }
      a {
        color: var(--newCyan);
        font-weight: 700;
      }
      ol,
      ul {
        margin: 1rem 0;
        padding-left: 22px;
        /* list-style-position: inside; */
        li {
          margin-bottom: 0.5rem;
        }
      }
    }
  }
`;
const LegalBody = ({ children }) => (
  <LegalBodyStyles>
    <div className="l-b">{children}</div>
  </LegalBodyStyles>
);

export default LegalBody;
