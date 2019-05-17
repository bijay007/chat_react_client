import React from 'react';
import styled from 'styled-components';

const ChatBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0.75rem;
  h4 {
    margin: 0;
  }
  .time {
    padding-left: 0.5rem;
    color: grey;
    font-size: 0.9rem;
  }
  p {
    margin: 0;
    padding-left: 1rem;
  }
`
const User = styled.div`
  display: flex;
  padding: 0.25rem 0;
  align-items: center;
`

const Chat = props => {
  const styleName = string => string.charAt(0).toUpperCase() + string.slice(1)
  const hourMinutes = string => {
    let strArr = string.split('');
    return strArr.splice(strArr.length - 8, 5).join('');
  }
  const { sender, message, created } = props.chat;

  return (
    <ChatBlock>
      <User>
        <h4>{styleName(sender)}</h4>
        <div className={'time'}>{hourMinutes(created)}</div>
      </User>
      <p>{message}</p>
    </ChatBlock>
  )
}

export default Chat;