import React, { Fragment } from 'react'
import { Route, withRouter } from 'react-router';
import styled from 'styled-components';
import Header from 'components/Header/Header';
import UserLogin from '../Auth/UserLogin';
import UserRegister from '../Auth/UserRegister';
import PublicChatList from '../ChatRoom/PublicChatList';

const Home = () => {
  const Wrapper = styled.section`
    padding: 2rem;
    width: 100%;
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
        <Route exact path='/chat' component={PublicChatList} />
      </Fragment>
    </Wrapper>
  )
}

const EnhancedHome = withRouter(Home);

export default EnhancedHome;
