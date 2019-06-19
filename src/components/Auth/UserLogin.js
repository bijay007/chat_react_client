import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import signup from 'assests/sign-up.png';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
`
const LoginWrapper = styled.div`
  filter: drop-shadow(-1px 7px 5px rgba(50, 50, 0, 0.6));
`
const SignUp = styled.img`
  height: 4.5rem;
  width: auto;
  padding: 1rem;
  transition: all 0.5s ease;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`
const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 2rem;
  border-radius: 0.5rem;
  background-color: lightblue;
  clip-path: polygon(3% 3%, 100% 0, 97% 97%, 0 100% );
  width: 60vw;
  @media (min-width: 40rem) {
    width: 40vw;
  }
  @media (min-width: 64rem) {
    width: 25vw;
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
const ErrorMessage = styled.div`
  padding: 0.5rem;
  color: red;
  font-weight: 500;
  height: 1.5rem;
`

const UserLogin = () => {
  const [user, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const validateUser = (name, password) => {
    if (name !== '' && password !== '') {
      setErrorMsg('');
      console.log('Fetch user info from db. If incorrect set different error msg');
      return;
    }
    setErrorMsg('Complete both fields to log in.');
  }

  return (
    <Wrapper>
      <LoginWrapper>
        <LoginContent>
          <Input
            value={user}
            onChange={e => setUserName(e.target.value)}
            placeholder={'Enter your name...'} />
          <Input
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder={'Enter your password...'} />
          <LoginBtn onClick={() => validateUser(user, password)}>Join chatroom</LoginBtn>
          <ErrorMessage>{errorMsg}</ErrorMessage>
        </LoginContent>
      </LoginWrapper>
      <Link to='/signup'>
        <SignUp src={signup} />
      </Link>
    </Wrapper>
  )
}

export default UserLogin;
