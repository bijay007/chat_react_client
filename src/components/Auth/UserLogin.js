import React, { useState } from 'react';
import { withApollo } from 'react-apollo';
import styled from 'styled-components';
import { GET_USER_QUERY } from 'data/queries';
import { withRouter, Link } from 'react-router-dom';
import signup from 'assests/sign-up.png';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  @media (max-width: 640px) {
    flex-direction: column;
  }
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
    try {
      const { client } = props;
      const user = await client.query({
        query: GET_USER_QUERY,
        fetchPolicy: 'network-only',
        variables: { userName: name }
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
      }
    } catch (err) {
      console.log(err)
    }
  }

  const validateUser = (e, name, password) => {
    e.preventDefault();
    if (name !== '' && password !== '') {
      setErrorMsg('');
      fetchUser(name, password);
      return;
    }
    setErrorMsg('Complete both fields to log in.');
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
            onChange={e => setPassword(e.target.value)}
            placeholder={'Enter your password...'} />
          <LoginBtn type='submit'>Join chatroom</LoginBtn>
          <div className='errorMsg'>{errorMsg}</div>
        </form>
      </div>
      <Link to='/signup'>
        <SignUp src={signup} />
      </Link>
    </Wrapper>
  )
}

export default withRouter(withApollo(UserLogin));
