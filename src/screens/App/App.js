import React, { useState } from 'react';
import { useAuth0 } from 'hooks/react-auth0-spa';
import { setContext } from 'apollo-link-context';
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import './App.scss';

import Navigation from 'components/Navigation';
import Routes from 'routes';

const App = () => {
  const [accessToken, setAccessToken] = useState('');
  const { getTokenSilently, loading: auth0Loading } = useAuth0();
  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_API_ENDPOINT,
  });

  if (auth0Loading) {
    return 'Loading app...';
  }

  (async function () {
    try {
      const token = await getTokenSilently();
      setAccessToken(token);
    } catch (e) {
      console.log('Token error', e);
    }
  })();

  const authLink = setContext((_, { headers }) => {
    const token = accessToken;
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token ? token : null}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Navigation />
      <Routes />
    </ApolloProvider>
  );
};

export default App;
