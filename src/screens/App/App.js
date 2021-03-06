import React, { useState } from 'react';
import { useAuth0 } from 'hooks/react-auth0-spa';
import { setContext } from 'apollo-link-context';
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { Container, Grid } from '@material-ui/core';
import { useStyles } from './styles';

import Routes from 'routes';

const App = () => {
  const classes = useStyles();

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
      <Container maxWidth={false}>
        <Grid container spacing={5} className={classes.base}>
          <Routes />
        </Grid>
      </Container>
    </ApolloProvider>
  );
};

export default App;
