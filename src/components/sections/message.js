import React from 'react';
import styled from 'styled-components';

const MessageStyles = styled.div`
  width: 100%;
  padding: 5rem 0;
  .message {
    width: 90%;
    margin: var(--auto);
    h6 {
      color: var(--newCyan);
      text-transform: uppercase;
    }
    p {
      margin-top: 1rem;
    }
  }
`;
const Message = ({ code, title, text }) => {
  const i = true;
  return (
    <MessageStyles>
      <div className="message">
        <h6>{code}</h6>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </MessageStyles>
  );
};

export default Message;
