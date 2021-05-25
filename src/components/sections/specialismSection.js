import React from 'react';
import styled from 'styled-components';
//* Local imports
import Image from '../functional/Image';

const SpecialismSectionStyles = styled.section`
  width: 100%;
  .section {
    width: 90%;
    margin: var(--auto);
    padding: 3rem 0;
    &__img {
      svg {
        width: 100%;
        height: auto;
      }
    }
    &__text {
      text-align: center;
      h3 {
        margin: 1.5rem 0 1rem 0;
      }
      p {
        margin-top: 0.25rem;
      }
    }
  }
`;
const SpecialismSection = ({ title, text, children }) => {
  const i = true;
  return (
    <SpecialismSectionStyles>
      <div className="section">
        <div className="section__img">{children}</div>
        <div className="section__text">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </SpecialismSectionStyles>
  );
};

export default SpecialismSection;
