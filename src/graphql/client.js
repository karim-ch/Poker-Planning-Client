import { ApolloClient } from 'apollo-client';
import { split, from } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getMainDefinition } from 'apollo-utilities';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import getEnv from '../shared/utils/getEnv';

const GRAPHQL_WS_ENDPOINT = getEnv(
  'REACT_APP_WS_GRAPHQL_ENDPOINT',
  'ws://localhost:4000/graphql'
);
const GRAPHQL_ENDPOINT = getEnv(
  'REACT_APP_GRAPHQL_ENDPOINT',
  'http://localhost:4000/graphql'
);

// Create an http link:
const httpLink = createHttpLink({
  uri: GRAPHQL_ENDPOINT,
});

// Create a WebSocket link:
const wsClient = new SubscriptionClient(GRAPHQL_WS_ENDPOINT, {
  reconnect: true,
});

const wsLink = new WebSocketLink(wsClient);

const authLink = setContext(async (_, { headers }) => ({
  fetchOptions: {
    credentials: 'include',
  },
  headers,
}));

const dataLink = from([authLink, httpLink]);

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  dataLink
);

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

export default client;
