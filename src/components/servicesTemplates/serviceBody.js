import React from 'react';
import styled from 'styled-components';
//* Local imports
import Illustration from '../../svgs/template-1.svg';

const ServiceBodyStyles = styled.section`
  width: 100%;
  .sb {
    width: 80%;
    margin: var(--auto);
    padding: 3rem 0;
    &__left {
      h3 {
      }
      p {
        margin: 0.5rem 0;
      }
    }
    &__right {
      padding-top: 2rem;
      width: 90%;
      margin: var(--auto);
    }
  }
`;
const ServiceBody = ({ title, firstP, secondP, icon }) => {
  const i = true;
  return (
    <ServiceBodyStyles>
      <div className="sb">
        <div className="sb__left">
          <h3>{title}</h3>
          <p>{firstP}</p>
          <p>{secondP}</p>
        </div>
        <div className="sb__right">
          {/* <Illustration /> */}
          {icon}
        </div>
      </div>
    </ServiceBodyStyles>
  );
};

export default ServiceBody;
