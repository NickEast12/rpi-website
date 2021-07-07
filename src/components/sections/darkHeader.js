import React from 'react';
import styled from 'styled-components';
//* Local imports
const AltHeaderStyles = styled.header`
  width: 100%;
  background-color: var(--offWhite);
  .altHeader {
    text-align: center;
    padding: 6rem 0 3rem 0;
    width: 90%;
    margin: var(--auto);
    max-width: var(--maxWidth);
    h1 {
      font-size: 2.5rem;
      max-width: 750px;
      margin: var(--auto);
    }
    p {
      margin: 0.85rem auto;
      max-width: 700px;
    }
    button {
      width: 100%;
      margin-top: 0.5rem;
    }
    @media only screen and (min-width: 1024px) {
      padding: 6rem 0 3rem 0;
    }
    @media only screen and (min-width: 1280px) {
      padding: 7rem 0 4rem 0;
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
