import url from './endpoints';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

const localHttpUrl = `${url.domainName.localHttp}:${url.port.http}`;
const localWsUrl = `${url.domainName.localWs}:${url.port.ws}`;

// Note: We can use some external library to ping to local port 4000 and receive confirmation that it's the backend app of the chat-app. If we can do so, we can use it to define the urls. However, since I'm not doing so, if you want to test it locally, you have to manually remove the remote prod urls and use the locals ones from above.

const httpLink = new HttpLink({
  uri: url.domainName.https || localHttpUrl,
  credentials: 'same-origin',
})

const wsLink = new WebSocketLink({
	uri: url.domainName.wss || localWsUrl,
	options: {
		reconnect: true,
	},
})

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink
)


// Apollo client constructor needs two required parameters - link and cache.
const apolloClientOptions = {
  link: link,
  cache: new InMemoryCache(),

  // Optional data below
  name: 'Read from package.json',
  version: 'Read from package.json',
  connectToDevTools: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all'
    },
    language: window.navigator.language || 'en-EN'
  }
}

export default apolloClientOptions;
