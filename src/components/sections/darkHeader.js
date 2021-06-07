import React from 'react';
import styled from 'styled-components';
//* Local imports
const AltHeaderStyles = styled.header`
  width: 100%;
  background-color: var(--darkTeal);
  .altHeader {
    text-align: center;
    padding: 6rem 0 3rem 0;
    width: 90%;
    margin: var(--auto);
    h1 {
      font-size: 3rem;
      color: var(--offWhite);
    }
    p {
      margin: 0.85rem 0;
      color: var(--offWhite);
    }
    button {
      width: 100%;
      margin-top: 0.5rem;
    }
  }
`;
const DarkHeader = ({ title, text, btn, alt }) => {
  const i = true;
  return (
    <AltHeaderStyles>
      <div className="altHeader">
        <h1>{title}</h1>
        <p>{text}</p>
        {/* <button type="button" className="btn btn--main">
          <span>{btn}</span>
        </button> */}
      </div>
    </AltHeaderStyles>
  );
};

export default DarkHeader;
