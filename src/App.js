import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import apolloClientOptions from './config/apolloConfig';
import styled from 'styled-components';

// Components
import { BrowserRouter } from "react-router-dom";
import Subscription from 'components/Subscription/Subscription';
import Header from 'components/Header/Header';
import Home from 'components/Home/Home';
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
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <Subscription />
        <Wrapper>
          <Header />
          <Home />
        </Wrapper>
      </ApolloProvider>
    </BrowserRouter>
  )
}

export default App;
