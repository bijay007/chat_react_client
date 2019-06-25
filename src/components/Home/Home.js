import React from 'react'
import { Route } from 'react-router';
import UserLogin from '../Auth/UserLogin';
import UserRegister from '../Auth/UserRegister';
import ChatList from '../ChatRoom/ChatList';

// Simple route definition component
const Home = () => (
  <>
    <Route exact path='/' component={UserLogin} />
    <Route exact path='/signup' component={UserRegister} />
    <Route exact path='/chat' component={ChatList} />
  </>
)

export default Home;

