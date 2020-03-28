import React, { useState } from 'react';
import styled from 'styled-components';
import uuidv1 from 'uuid/v1';
import { withApollo } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import { CREATE_USER_MUTATION } from 'data/mutations';

const ModalContainer = styled.div({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.6)'
});
const ModalBody = styled.div`
  position: fixed;
  display: flex;
  flexDirection: column;
  justifyContent: 'center';
  height: auto;
  width: 45%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  fontSize: 1.1rem;
  boxShadow: 0 0 8px #ff8989;
  borderRadius: 0.5rem;
  @media(max-width: 40rem) {
    width: 75%;
  }
  @media(min-width: 40rem) & (max-width: 60rem) {
    width: 60%;
  }
`;
const Title = styled.h2`
  margin: 1rem auto;
  letter-spacing: 2px;
  background: linear-gradient(to left, #f7606a 10%, #330867 80%);
  background-clip: 'text';
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const Block = styled.div({
  padding: '0.5rem 1.8rem',
})
const Label = styled.label({
  paddingRight: '8px'
})
const Input = styled.input({
  marginTop: '4px',
  padding: '5px',
  height: '25px',
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
  const [modalDismiss, setModalDismiss] = useState(false);

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

  const dismissModal = e => {
    e.stopPropagation();
    setModalDismiss(true);
  }

  return (
    modalDismiss
    ? <Redirect to='/' />
    : <ModalContainer onClick={e => dismissModal(e)}>
        <ModalBody onClick={e => e.stopPropagation()}>
          <div className='auth-form-wrapper'>
            <form className='auth-form' onSubmit={e => createUser(e)}>
              <Title>Sign up</Title>
              <Block>
                <Label htmlFor='name'>Name</Label>
                <Input value={userName}
                  id='name'
                  placeholder={props.name}
                  onChange={e => setUserName(e.target.value)} />
              </Block>
              <Block>
                <Label htmlFor='email'>Email</Label>
                <Input value={email}
                  id='email'
                  onChange={e => setUserEmail(e.target.value)} />
              </Block>
              <Block>
                <Label htmlFor='password'>Password</Label>
                <Input value={password}
                  type='password'
                  id='password'
                  onChange={e => setUserPassword(e.target.value)} />
              </Block>
              <RegisterBtn type='submit'>Register</RegisterBtn>
              <div className='errorMsg'>{errorMsg}</div>
            </form>
          </div>
        </ModalBody>
      </ModalContainer>
  )
}

export default withApollo(UserRegister);
