import React from 'react';
import styled from 'styled-components';
// Apollo
import { Query } from '@apollo/react-components';
import { withApollo } from '@apollo/client/react/hoc';
import { GET_PUBLIC_CHATS_QUERY } from 'data/queries';
// Components
import Chat from 'components/ChatRoom/Chat';
import AddChat from 'components/ChatRoom/AddChat';

const Wrapper = styled.section`
  display: flex;
  flex: 4;
  flex-direction: column;
  align-self: flex-start;
  padding: 1rem;
`

const PublicChatView = (props) => {
  console.log(props);
  const { userId, userName } = props.location.state;
/*   props.client.writeData({
    data: {
      id: 'logged_user',
      loggedUser: userName
    }
  }); */ //use reactive variables in apollo v3+

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

export default withApollo(PublicChatView);
