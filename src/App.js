import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import apolloClientOptions from './config/apolloConfig';
import styled from 'styled-components';

// Components
import { BrowserRouter as Router } from "react-router-dom";
import Subscription from 'components/Subscription/Subscription';
import Header from 'components/Header/Header';
import ChatLogin from 'components/Auth/ChatLogin';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
`
const App = () => {
  const apolloClient = new ApolloClient({...apolloClientOptions});
  // Apollo provider as top level wrapper to manage local state and query manipulations
  return (
    <ApolloProvider client={apolloClient}>
      <Subscription />
      <Wrapper>
        <Header />
        <Router path='/' component={ChatLogin} />
      </Wrapper>
    </ApolloProvider>
  )
}

export default App;
