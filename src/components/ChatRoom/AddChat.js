import React, { useState } from 'react';
import { ApolloConsumer } from 'react-apollo';
import styled from 'styled-components';
import icon from 'assests/send-icon.svg';
import { CREATE_MESSAGE_MUTATION } from 'data/mutations';

const MessageBox = styled.form`
  display: flex;
  height: 3rem;
  border-radius: 0.5rem;
  margin: 2rem 0;
  width: 100%;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`
const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 80%;
`
const Button = styled.button`
  padding: 0.25rem;
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  &:hover, &:focus {
    outline: none;
    background: transparent;
  }
`
const Icon = styled.img`
  height: 80%;
  width: 80%;
`

const AddChat = props => {
  const { currentUser } = props;
  const [message, bind] = useState('');
  const sendMessage =  async function (message, apolloClient) {
    bind('');
    await apolloClient.mutate({
      mutation: CREATE_MESSAGE_MUTATION,
      variables: {
        sender: currentUser,
        message: message
      }
    })
  }
  const handleSubmit = e => {
    e.preventDefault();
    bind('');
  }
  return (
    <ApolloConsumer>
      {
        apolloClient => (
          <MessageBox onSubmit={(e) => handleSubmit(e)}>
            <Input
              value={message}
              placeholder={'Press Enter or Send to publish...'}
              onChange={e => bind(e.target.value)}
            />
            <Button onClick={() => sendMessage(message, apolloClient)}>
              <Icon src={icon} /> {/* Icon made by Freepik from www.flaticon.com */}
            </Button>
          </MessageBox>     
        )
      }
    </ApolloConsumer>
  )
}

export default AddChat;
