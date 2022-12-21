import React from 'react';
import styled from 'styled-components';

const SpecialismSectionStyles = styled.section`
  width: 100%;
  .section {
    width: 90%;
    margin: var(--auto);
    padding: 3rem 0;
    max-width: var(--maxWidth);
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
      i {
        margin: 0 0 0.85rem 0;
        display: block;
        font-weight: 700;
        font-size: 1.1rem;
        color: var(--newCyan);
      }
      p {
        margin-top: 0.25rem;
      }
    }
    @media only screen and (min-width: 900px) {
      display: grid;
      grid-template-columns: 1fr 40%;
      grid-gap: 1.5rem;
      &__img {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        svg {
          width: 100%;
          height: 100%;
        }
      }
      &__text {
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h3 {
          margin-top: 0;
        }
      }
    }
  }
`;
const SpecialismSection = ({ id, title, text, tag, children }) => {
  const i = true;
  return (
    <SpecialismSectionStyles id={id}>
      <div className="section">
        <div className="section__img">{children}</div>
        <div className="section__text">
          <h3>{title}</h3>
          <i>{tag}</i>
          <p>{text}</p>
        </div>
      </div>
    </SpecialismSectionStyles>
  );
};

export default SpecialismSection;
