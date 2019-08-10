import React, { Fragment } from 'react'
import { Route, withRouter } from 'react-router';
import Header from 'components/Header/Header';
import UserLogin from '../Auth/UserLogin';
import UserRegister from '../Auth/UserRegister';
import ChatList from '../ChatRoom/ChatList';

const Home = props => {
  const { pathname } = props.location;
  const bodyWidth = pathname === '/chat' ? '80vw' : 'initial';
  return (
    <section style={{ padding: '2rem', width: bodyWidth }}>
      <Header />
      <Fragment>
        <Route exact path='/' component={UserLogin} />
        <Route exact path='/signup' component={UserRegister} />
        <Route exact path='/chat' component={ChatList} />
      </Fragment>
    </section>
  )
}

const EnhancedHome = withRouter(Home);

export default EnhancedHome;
