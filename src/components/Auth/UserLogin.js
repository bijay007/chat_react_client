import React, { useState } from 'react';
import { withApollo } from 'react-apollo';
import styled from 'styled-components';
import { GET_USER_QUERY } from 'data/queries';
import SwitchAuth from './SwitchAuth';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0.5rem 0.5rem 0.5rem;
  width: 50%;
  transform-origin: 0 0;
  animation: contract 1s ease;
  @keyframes contract {
    0% { transform: scale(1.1, 1.2); }
    100% { transform: scale(1); }
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
`
const Input = styled.input`
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
const LoginBtn = styled.button`
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0.5rem;
  text-shadow: 2px 2px 3px rgba(180, 150, 150, 0.8);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
`

const UserLogin = (props) => {
  const [user, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const fetchUser = async(name, password) => {
    const { client } = props;
    const user = await client.query({
      query: GET_USER_QUERY,
      fetchPolicy: 'network-only',
      variables: { userName: name, password }
    });
    if (user.data.getUser) {
      const { name, id } = user.data.getUser;
      props.history.push({
        pathname: '/chat',
        state: {
          userName: name,
          userId: id
        }
      });
      return;
    }
    setErrorMsg(user.errors[0].message);
  }

  const validateUser = (e, name, password) => {
    e.preventDefault();
    name && password
    ? fetchUser(name, password)
    : setErrorMsg('Complete both fields to log in.');
  }

  return (
    <Wrapper>
      <div className='auth-form-wrapper'>
        <form className='auth-form' onSubmit={e => validateUser(e, user, password)}>
          <Input
            value={user}
            onChange={e => setUserName(e.target.value)}
            placeholder={'Enter your name...'} />
          <Input
            value={password}
            type='password'
            onChange={e => setPassword(e.target.value)}
            placeholder={'Enter your password...'} />
          <LoginBtn type='submit'>Join chatroom</LoginBtn>
          <div className='errorMsg'>{errorMsg}</div>
        </form>
      </div>
      <SwitchAuth type="signup" />
    </Wrapper>
  )
}

export default withApollo(UserLogin);
