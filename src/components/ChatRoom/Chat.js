import React from 'react';
import styled from 'styled-components';

const ChatBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0.75rem;
  p {
    margin: 0 1.5rem;
  }
`
const User = styled.div`
  display: flex;
  padding: 0.25rem 0;
  align-items: baseline;
  .title {
    font-weight: bold;
    font-size: 1.1rem;
  }
  .time {
    padding-left: 0.5rem;
    color: grey;
    font-size: 0.9rem;
  }
`

const Chat = props => {
  const styleName = string => string.charAt(0).toUpperCase() + string.slice(1)
  const { senderName, message, created } = props.chat;

  return (
    <ChatBlock>
      <User>
        <div className={'title'}>{styleName(senderName)}</div>
        <div className={'time'}>{created}</div>
      </User>
      <p>{message}</p>
    </ChatBlock>
  )
}

export default Chat;