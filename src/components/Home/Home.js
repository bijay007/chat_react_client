import React, { Fragment } from 'react'
import { Route, withRouter } from 'react-router';
import styled from 'styled-components';
import Header from 'components/Header/Header';
import UserLogin from '../Auth/UserLogin';
import UserRegister from '../Auth/UserRegister';
import ChatView from '../ChatRoom/ChatView';

const Home = () => {
  const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <Wrapper>
      <Header />
      <Fragment>
        <Route exact path='/' component={UserLogin} />
        <Route exact path='/login' component={UserLogin} />
        <Route exact path='/signup' component={UserRegister} />
        <Route exact path='/chat' component={ChatView} />
      </Fragment>
    </Wrapper>
  )
}

const EnhancedHome = withRouter(Home);

export default EnhancedHome;
