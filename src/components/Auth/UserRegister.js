import React, { useState } from 'react';
import styled from 'styled-components';
import uuidv1 from 'uuid/v1';
import { withApollo } from 'react-apollo';
import SwitchAuth from './SwitchAuth';
import { CREATE_USER_MUTATION } from 'data/mutations';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0.5rem;
  width: 70%;
  transform-origin: 0 0;
  animation: expand 1s ease;
  @keyframes expand {
    0% { transform: scale(0.9, 0.8); }
    100% { transform: scale(1); }
  }
  fieldset {
    padding: 0.5rem 1.8rem;
    border: none;
    label {
      paddingRight: 0.5rem;
    }
  }
`
const Title = styled.h2`
  margin: 0.5rem auto;
  letter-spacing: 2px;
  font-size: 1.2rem;
  background: linear-gradient(to left, #f7606a 10%, #330867 80%);
  background-clip: 'text';
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const Input = styled.input({
  marginTop: '4px',
  padding: '5px',
  height: '24px',
  width: '95%',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#9ecaed',
  boxShadow: '0 0 10px #9ecaed'
})
const RegisterBtn = styled.button({
  fontWeight: 'bold',
  fontSize: '1.2rem',
  padding: '1rem',
  textShadow: '2px 2px 3px rgba(180, 150, 150, 0.8)'
})

const UserRegister = (props) => {
  const [userName, setUserName] = useState('');
  const [email, setUserEmail] = useState('');
  const [password, setUserPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const createUser = async (e) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if (!isFormValid) return;
    let userCreated = await props.client.mutate({
      mutation: CREATE_USER_MUTATION,
      variables: {
        id: uuidv1(),
        name: userName,
        email: email,
        password: password
      }
    });
    // NOTE: Can there be more than 1 error?? If so, both needs to be shown nicely in the UI.
    if (userCreated.errors) {
      setErrorMsg('Registration failed: ', userCreated.errors[0].message);
      return;
    }
    const { name, id } = userCreated.data.createUser;
    props.history.push({
      pathname: '/chat',
      state: {
        userName: name,
        userId: id
      }
    });
  }

  const validateForm = () => {
    // TODO: Improve validation rules
    const emailValid = /\S+@\S+\.\S+/.test(email);
    const passwordValid = password.length >= 4;
    if(userName && emailValid && passwordValid) {
      return true;
    }
    setErrorMsg('Please fill all fields with valid data.');
    return false;
  }

  return (
    <Wrapper>
      <div className='auth-form-wrapper'>
        <form className='auth-form' onSubmit={e => createUser(e)}>
          <Title>Sign up</Title>
          <fieldset>
            <label htmlFor='name'>Name</label>
            <Input value={userName}
              id='name'
              placeholder={props.name}
              onChange={e => setUserName(e.target.value)} />
          </fieldset>
          <fieldset>
            <label htmlFor='email'>Email</label>
            <Input value={email}
              id='email'
              onChange={e => setUserEmail(e.target.value)} />
          </fieldset>
          <fieldset>
            <label htmlFor='password'>Password</label>
            <Input value={password}
              type='password'
              id='password'
              onChange={e => setUserPassword(e.target.value)} />
          </fieldset>
          <RegisterBtn type='submit'>Register</RegisterBtn>
          <div className='errorMsg'>{errorMsg}</div>
        </form>
      </div>
      <SwitchAuth type="login" />
    </Wrapper>
  )
}

export default withApollo(UserRegister);
