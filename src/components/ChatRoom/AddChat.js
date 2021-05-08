import React, { useState } from 'react';
import { ApolloConsumer } from 'react-apollo';
import styled from 'styled-components';
import icon from 'assests/send-icon.svg';
import { CREATE_PUBLIC_CHAT_MUTATION } from 'data/mutations';

const MessageBox = styled.form`
  display: flex;
  justify-content: space-between;
  height: 3rem;
  border-radius: 0.4rem;
  margin: 1.5rem 0;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  button {
    padding: 0.25rem;
    height: 100%;
  }
  img {
    max-height: 75%;
  }
`
const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 0.5rem;
`
const Label = styled.label`
  display: flex;
  align-self: center;
  padding: 0.15rem;
  margin: 0 0.75rem;
  color: grey;
  font-weight: bold;
`

const AddChat = props => {
  const { userId, userName } = props;
  const [message, setMessage] = useState('');

  const sendMessage =  async function (e, message, apolloClient) {
    e.preventDefault();
    if (message) {
      try {
        await apolloClient.mutate({
          mutation: CREATE_PUBLIC_CHAT_MUTATION,
          variables: {
            senderId: userId,
            senderName: userName,
            message: message
          }
        })
        setMessage('');
      } catch(e) {
        throw new Error(e);
      }
    }
  }

  return (
    <ApolloConsumer>
      {
        apolloClient => (
          <MessageBox onSubmit={(e) => sendMessage(e, message, apolloClient)}>
            <Label>{userName} :</Label>
            <Input
              value={message}
              placeholder={'Write your message here...'}
              onChange={e => setMessage(e.target.value)}
              autoFocus
            />
            <button type='submit'>
              <img alt='send-message' src={icon} /> {/* Icon made by Freepik from www.flaticon.com */}
            </button>
          </MessageBox>
        )
      }
    </ApolloConsumer>
  )
}

export default AddChat;
