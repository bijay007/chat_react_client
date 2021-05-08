import React from 'react';
import styled from 'styled-components';
import PublicChatView from './ChatViewTypes/PublicChatView';
import PrivateChatView from './ChatViewTypes/PrivateChatView';

const MainChatView = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
`
const ChatView = (props) => {
  const { location } = props;
  return (
    <MainChatView>
      <PublicChatView location={location}></PublicChatView>
      <PrivateChatView></PrivateChatView>
    </MainChatView>
  )
}

export default ChatView;
