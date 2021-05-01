import React from 'react';
import styled from 'styled-components';
// Apollo
import { Query } from 'react-apollo';
import { GET_PUBLIC_CHATS_QUERY } from 'data/queries';
// Components
import Chat from 'components/ChatRoom/Chat';
import AddChat from 'components/ChatRoom/AddChat';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  width: 90%;
`

const PublicChatList = (props) => {
  const { userId, userName } = props.location.state;
  return (
    <Query query={GET_PUBLIC_CHATS_QUERY}>
      {
        ({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          let chats = data.getPublicChats;
          if (chats.length > 8) {
            chats = data.getPublicChats.slice(data.getPublicChats.length - 8);
          }
          return (
            <Wrapper>
              {
                chats.map((chat, index) => <Chat key={index + Math.random(index)} chat={chat} />)
              }
              <AddChat userId={userId} userName={userName} />
            </Wrapper>
          )
        }
      }
    </Query>
  )
}

export default PublicChatList;
