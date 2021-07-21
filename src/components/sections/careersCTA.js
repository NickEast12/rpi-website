import { Link, navigate } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';

const CareersCTAStyles = styled.section`
  width: 100%;
  padding: 4rem 0 1rem 0;
  border-top: solid 1px rgba(0, 0, 0, 0.05);

  .ca {
    max-width: var(--maxWidth);
    margin: var(--auto);
    width: 90%;
    text-align: center;
    h3 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      text-align: center;
      span {
        font-size: inherit;
      }
    }
    form {
      padding-top: 0.5rem;
      section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
      }
      input {
        width: 100%;
        padding: 0.85rem 0.65rem;
        background-color: var(--offWhite);
        border: 1px solid #eee;
        margin-bottom: 0.75rem;
        &:focus {
          outline: 2px solid var(--newBlue);
          outline-offset: -1px;
        }
      }
      textarea {
        width: 100%;
        padding: 0.85rem 0.65rem;
        background-color: var(--offWhite);
        border: 1px solid #eee;
        margin-bottom: 0.75rem;
        height: 9rem;
        resize: vertical;
        &:focus {
          outline: 2px solid var(--newBlue);
          outline-offset: -1px;
        }
      }
      input::placeholder,
      textarea::placeholder {
        color: #000;
        text-align: center;
      }
      button {
        width: 250px;
        margin: 0.5rem auto 0 0;
      }
      @media only screen and (min-width: 768px) {
        width: 90%;
        margin: var(--auto);
        max-width: 700px;
        section {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 1rem;
        }
      }
    }
  }
`;

const CareersCTA = () => (
  <CareersCTAStyles>
    <div className="ca">
      <h3>
        If you’re up to the challenge, <br />
        <span>we want to hear from you today.</span>
      </h3>
    </div>
  </CareersCTAStyles>
);

export default CareersCTA;
