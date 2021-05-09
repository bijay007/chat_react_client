import React from 'react';
import { ApolloProvider, ApolloClient } from '@apollo/client';
import apolloClientOptions from './config/apolloConfig';

// Components
import { BrowserRouter } from "react-router-dom";
import Subscription from 'components/Subscription/Subscription';
import Home from 'components/Home/Home';

const App = () => {
  const apolloClient = new ApolloClient({...apolloClientOptions});
  // Apollo provider as top level wrapper to manage local app state and query manipulations
  return (
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <Subscription />
        <main>
          <Home />
        </main>
      </ApolloProvider>
    </BrowserRouter>
  )
}

export default App;
