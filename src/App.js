import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import apolloClientOptions from './config/apolloConfig';
import styled from 'styled-components';

// Components
import { BrowserRouter as Router, Route } from "react-router-dom";
import Subscription from 'components/Subscription/Subscription';
import Header from 'components/Header/Header';
import ChatLogin from 'components/Auth/ChatLogin';
import ChatList from 'components/ChatRoom/ChatList';
import background from 'assests/background.png';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: #000 url(${background});
`
const App = () => {
  const apolloClient = new ApolloClient({...apolloClientOptions});
  // Apollo provider as top level wrapper to manage local state and query manipulations
  return (
    <Router>
      <ApolloProvider client={apolloClient}>
        <Subscription />
        <Wrapper>
          <Header />
          <Route exact path='/' component={ChatLogin} />
          <Route exact path='/chat' component={ChatList} />
        </Wrapper>
      </ApolloProvider>
    </Router>
  )
}

export default App;
