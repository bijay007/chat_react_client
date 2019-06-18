import React, { useState } from 'react';
import styled from 'styled-components';
import uuidv1 from 'uuid/v1';
import { withApollo } from 'react-apollo';
import { withRouter, Redirect } from 'react-router-dom';
import { CREATE_USER_MUTATION } from 'data/mutations';

const ModalContainer = styled.div({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.6)',
});
const ModalBody = styled.div({
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  background: '#fff',
  height: 'auto',
  width: '30%',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  padding: '8px',
  fontSize: '17px',
  boxShadow: '0 0 8px #ff8989',
});
const Form = styled.form({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'space-between',
  padding: '5px'
})
const Block = styled.div({
  padding: '5px'
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

const RegisterUser = (props) => {
  const [userName, setUserName] = useState('');
  const [email, setUserEmail] = useState('');
  const [valid, setValidity] = useState(true);
  const [newUser, setNewUser] = useState({ name: '', id: '' });

  const createUser = async () => {
    let userCreated = await props.client.mutate({
      mutation: CREATE_USER_MUTATION,
      variables: {
        name: userName,
        email: email,
        id: uuidv1()
      }
    });
    const { name, id } = userCreated.data.createUser;
    setNewUser({ name: name, id: id });
  }

  const basicValidation = async (e) => {
    e.preventDefault();
    // TODO: Improve validation rules
    const userNameValid = userName !== '';
    const emailValid = /\S+@\S+\.\S+/.test(email);
    userNameValid && emailValid
      ? createUser()
      : setValidity(false);
  }

  return (
    newUser.name
    ? <Redirect to={{
        pathname: '/chat',
        userName: newUser.name,
        userId: newUser.id
      }} />
    : <ModalContainer>
        <ModalBody>
          <Form onSubmit={e => basicValidation(e)}>
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
            <button onClick={basicValidation}>Register</button>
            {
              valid
              ? null
              : <Block style={{color: 'red'}}>Invalid data. Please correct.</Block>
            }     
          </Form>
        </ModalBody>
      </ModalContainer>
  )
}


export default withRouter(withApollo(RegisterUser)); // -__-
