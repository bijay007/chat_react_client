import React from 'react';
import styled from 'styled-components';

const ChatBlock = styled.article`
  display: flex;
  flex-direction: column;
  padding-bottom: 0.5rem;
  p {
    margin: 0 1.5rem;
    padding: 0.2rem;
  }
`
const User = styled.div`
  display: flex;
  padding: 0.2rem 0;
  align-items: baseline;
  .title {
    font-weight: bold;
    font-size: 1.1rem;
  }
  time {
    padding-left: 0.5rem;
    color: grey;
    font-size: 0.9rem;
  }
`

const Chat = props => {
  const { senderName, message, created } = props.chat;
  return (
    <ChatBlock>
      <User>
        <caption className={'title'}>{senderName}</caption>
        <time>{created}</time>
      </User>
      <p>{message}</p>
    </ChatBlock>
  )
}

export default Chat;