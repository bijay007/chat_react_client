import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import apolloClientOptions from './config/apolloConfig';
import styled from 'styled-components';

// Components
import { BrowserRouter } from "react-router-dom";
import Subscription from 'components/Subscription/Subscription';
import Home from 'components/Home/Home';
import background from 'assests/dark_background.jpg';

const Main = styled.main`
  display: flex;
  justify-content: center;
  height: 100%;
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
`

const App = () => {
  const apolloClient = new ApolloClient({...apolloClientOptions});
  // Apollo provider as top level wrapper to manage local app state and query manipulations
  return (
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <Subscription />
        <Main>
          <Home />
        </Main>
      </ApolloProvider>
    </BrowserRouter>
  )
}

export default App;
