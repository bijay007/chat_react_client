import React from 'react';
import PublicChatView from './ChatViewTypes/PublicChatView';
import PrivateChatView from './ChatViewTypes/PrivateChatView';

const ChatView = (props) => {
  const { location } = props;
  return (
    <main style={{ display: 'flex' }}>
      <PublicChatView location={location}></PublicChatView>
      <PrivateChatView location={location}></PrivateChatView>
    </main>
  )
}

export default ChatView;
