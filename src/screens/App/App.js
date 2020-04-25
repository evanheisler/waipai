import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useAuth0 } from '../../hooks/react-auth0-spa';
import { setContext } from 'apollo-link-context';
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import './App.scss';

import NavBar from '../../components/NavBar';
import PrivateRoute from '../../components/PrivateRoute';
import UserProfile from '../UserProfile/UserProfile';

const App = () => {
  const [accessToken, setAccessToken] = useState('');

  const { getTokenSilently, loading } = useAuth0();
  if (loading) {
    return 'Loading...';
  }

  const getAccessToken = async () => {
    try {
      const token = await getTokenSilently();
      setAccessToken(token);
    } catch (e) {
      console.log(e);
    }
  };
  getAccessToken();

  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_API_ENDPOINT,
  });

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
      <NavBar />
      <Switch>
        <Route path="/" exact />
        <PrivateRoute path="/profile" component={UserProfile} />
      </Switch>
    </ApolloProvider>
  );
};

export default App;
