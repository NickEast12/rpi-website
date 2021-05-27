import React from 'react';
import styled from 'styled-components';
//* Local imports

const ServiceHeaderStyles = styled.header`
  width: 100%;
  .sHeader {
    width: 90%;
    margin: var(--auto);
    padding: 6rem 0 3rem 0;
    &__left {
      h1 {
        font-size: 2.35rem;
        margin-top: 0.5rem;
      }
      p {
        margin: 0.5rem 0;
      }
      button {
        margin-top: 1rem;
        width: 185px;
      }
    }
    &__right {
      margin: 3rem auto 0 auto;
      width: 90%;
    }
  }
`;
const ServiceHeader = ({ name, title, text, icon }) => {
  const i = true;
  return (
    <ServiceHeaderStyles>
      <div className="sHeader">
        <div className="sHeader__left">
          <h6 className="sbt">{name}</h6>
          <h1>{title}</h1>
          <p>{text}</p>
          <button type="button" className="btn btn--main">
            <span>Get started</span>
          </button>
        </div>
        <div className="sHeader__right">{icon}</div>
      </div>
    </ServiceHeaderStyles>
  );
};

export default ServiceHeader;
