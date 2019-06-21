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
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  button {
    display: flex;
    justify-content: center;
    padding: 0.25rem;
    width: 20%;
    height: 100%;
  }
  img {
    height: 80%;
    width: auto;
  }
`
const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 80%;
`

const AddChat = props => {
  const { userId, userName } = props;
  const [message, setMessage] = useState('');

  const sendMessage =  async function (e, message, apolloClient) {
    e.preventDefault();
    if (message) {
      await apolloClient.mutate({
        mutation: CREATE_MESSAGE_MUTATION,
        variables: {
          senderId: userId,
          senderName: userName,
          message: message
        }
      })
      setMessage('');
    }
  }

  return (
    <ApolloConsumer>
      {
        apolloClient => (
          <MessageBox onSubmit={(e) => sendMessage(e, message, apolloClient)}>
            <Input
              value={message}
              placeholder={'write your message here...'}
              onChange={e => setMessage(e.target.value)}
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
