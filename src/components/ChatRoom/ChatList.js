import React from 'react';
import styled from 'styled-components';
// Apollo
import { Query } from 'react-apollo';
import { GET_CHATS_QUERY } from 'data/queries';
// Components
import Chat from 'components/ChatRoom/Chat';
import AddChat from 'components/ChatRoom/AddChat';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`

const ChatList = (props) => {
  const { userId, userName } = props;
  return (
    <Query query={GET_CHATS_QUERY}>
      {
        ({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          const chats = data.getChats.slice(data.getChats.length - 8);
          return (
            <Wrapper>
              {
                chats.map((chat, index) => <Chat key={index + Math.random()} chat={chat} />)
              }
              <AddChat userId={userId} userName={userName} />
            </Wrapper>
          )
        }
      }
    </Query>
  )
}

export default ChatList;
