import React from 'react';
import styled from 'styled-components';
import { withApollo } from '@apollo/client/react/hoc';
import { currentLoggedUserVar } from 'data/models';
import { useDispatch } from 'react-redux';
import togglePrivateTab from 'redux/actions/tabActions';

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
const SenderName = styled.h4`
  :hover {
    cursor: pointer;
    text-decoration: underline;
    color: grey;
  }
`

const Chat = props => {
  const { senderName, message, created } = props.chat;
  const loggedUser = currentLoggedUserVar();
  const dispatch = useDispatch();
  const openPrivateChat = function(loggedUser, senderName) {
    dispatch(togglePrivateTab(true))
    console.log('Sending message from:', loggedUser, ' to ', senderName);
  }
  return (
    <ChatBlock>
      <User>
        <SenderName onClick={() => openPrivateChat(loggedUser, senderName)}>{senderName}</SenderName>
        <time>{created}</time>
      </User>
      <p>{message}</p>
    </ChatBlock>
  )
}

export default withApollo(Chat);