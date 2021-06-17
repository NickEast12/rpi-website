import React from 'react';
import styled from 'styled-components';

const MessageStyles = styled.div`
  width: 100%;
`;
const Message = ({ message, text }) => {
  const i = true;
  return (
    <MessageStyles>
      <div className="message">
        <h1>{message}</h1>
        <p>{text}</p>
      </div>
    </MessageStyles>
  );
};

export default Message;
