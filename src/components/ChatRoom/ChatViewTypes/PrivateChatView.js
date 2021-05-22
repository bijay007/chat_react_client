import React from 'react';
import styled from 'styled-components';
// Apollo
import { Query } from '@apollo/react-components';
import { GET_PRIVATE_CHATS_QUERY } from 'data/queries';
import { withApollo } from '@apollo/client/react/hoc';
import { useSelector } from 'react-redux';
import AddChat from 'components/ChatRoom/AddChat';
import Chat from 'components/ChatRoom/Chat';
import PrivateTabToggler from './PrivateTabToggler';

const Container = styled.section`
  display: flex;
`

const PrivateChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.25rem;
`

const PrivateChatView = (props) => {
  const tabStatusOpen = useSelector(state => state.tabCurrentState.tabOpen);
  const { userId, userName } = props.location.state;
  return (
    <Container>
      <PrivateTabToggler />
      {
        tabStatusOpen && (
          <Query query={GET_PRIVATE_CHATS_QUERY}>
            {
              ({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                let chats = data.getPrivateChats;
                console.log(chats);
                return (
                  <PrivateChatWrapper>
                    {
                      chats.map((chat, index) => <Chat key={index + Math.random(index)} chat={chat} />)
                    }
                    <AddChat userId={userId} userName={userName} />
                  </PrivateChatWrapper>
                )
              }
            }
          </Query>
        )
      }
    </Container>
  )
}

export default withApollo(PrivateChatView);
