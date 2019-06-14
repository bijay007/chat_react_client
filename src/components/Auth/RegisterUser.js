import React,  { setState } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { GET_USER_QUERY } from 'data/queries';
import { ApolloClient } from 'react-apollo';

// WIP

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
  background: '#fff',
  width: '30%',
  height: 'auto',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  fontSize: '17px',
  boxShadow: '0 0 8px #ff8989',
});
const Form = styled.form({
  display: 'flex',
  flexDirection: 'column',
  padding: '5px'
})
const Input = styled.input({
  marginBottom: '4px',
  padding: '5px',
  height: '25px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#9ecaed',
  boxShadow: '0 0 10px #9ecaed'
})

const RegisterUser = () => {
/*   const [userName, userExists] = setState(false)
  const [email, validEmail] = setState(false)
 */
  return (
    <ModalContainer>
      <ModalBody>
        <Form>
          <Input />
        </Form>
      </ModalBody>
    </ModalContainer>
  )
}

export default RegisterUser;
