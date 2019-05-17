import React, { useState } from 'react';
import styled from 'styled-components';
import ChatList from 'components/ChatRoom/ChatList';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  width: 100%;
`
const UserName = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  line-height: 2;
  border-radius: 0.5rem;
  border: 1.5px solid rgba(65, 184, 131, 0.8);
  width: 90%;
  &:focus {
    outline: none;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
`
const Login = styled.button`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem auto;
  text-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    background: none;
    color: rgba(0,0,0,0.6);
    text-shadow: 0 7px 14px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
  }
  &:focus {
    background: none;
    outline: none;
  }
`

const ChatLogin = () => {
  const [userName, addUser] = useState('');
  const [userLogged, setLogged] = useState(false);
  const enterChatroom = userName => setLogged(userName !== '')
  return (
    <Wrapper>
    {
      userLogged
      ? <ChatList currentUser={userName}/>
      : <>
          <UserName
            value={userName}
            onChange={e => addUser(e.target.value)}
            placeholder={'Enter your name to join...'}>
          </UserName>
          <Login onClick={e => enterChatroom(userName)}>Join chatroom</Login>
        </>
    }
    </Wrapper>
  )
}

export default ChatLogin;
