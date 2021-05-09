import React from 'react';
import styled from 'styled-components';
import { withApollo } from '@apollo/client/react/hoc';
import openPrivateChatTab from '../../config/appStateVars';

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
  time {
    padding-left: 0.5rem;
    color: grey;
    font-size: 0.9rem;
  }
`
const UserName = styled.h4`
  :hover {
    cursor: pointer;
    text-decoration: underline;
    color: grey;
  }
`

const Chat = props => {
  const { senderName, message, created } = props.chat;
  const { loggedUser } = props.client.cache.data.data.ROOT_QUERY;
  const openPrivateChat = async function(sender, receiver) {
    console.log('Sending message from:', sender, ' to ', receiver);
  }
  return (
    <ChatBlock>
      <User>
        <UserName onClick={() => openPrivateChat(loggedUser, senderName)}>{senderName}</UserName>
        <time>{created}</time>
      </User>
      <p>{message}</p>
    </ChatBlock>
  )
}

export default withApollo(Chat);