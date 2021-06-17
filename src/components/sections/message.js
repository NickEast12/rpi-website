import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const MessageStyles = styled.div`
  width: 100%;
  padding: 5rem 0;
  @media only screen and (min-width: 768px) {
    padding: 7rem 0;
  }
  @media only screen and (min-width: 1024px) {
    padding: 13rem 0;
  }
  @media only screen and (min-width: 1280px) {
    padding: 9rem 0;
  }
  @media only screen and (min-width: 1400px) {
    padding: 11rem 0;
  }
  .message {
    width: 90%;
    margin: var(--auto);
    max-width: var(--maxWidth);
    h6 {
      color: var(--newCyan);
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }
    h1 {
      @media only screen and (min-width: 768px) {
        max-width: 500px;
      }
    }
    p {
      margin-top: 1rem;
    }
    button {
      margin-top: 1.5rem;
    }
  }
`;
const Message = ({ code, title, text, btn }) => {
  const i = true;
  return (
    <MessageStyles>
      <div className="message">
        <h6>{code}</h6>
        <h1>{title}</h1>
        <p>{text}</p>
        <Link to="/">
          <button type="button" className="btn btn--main">
            <span>{btn}</span>
          </button>
        </Link>
      </div>
    </MessageStyles>
  );
};

export default Message;
