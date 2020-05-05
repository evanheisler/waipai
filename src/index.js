import React from 'react';
import { render } from 'react-dom';
import App from 'screens/App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from 'hooks/react-auth0-spa';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import history from './utils/history';
import theme from 'theme';

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH_DOMAIN}
        client_id={process.env.REACT_APP_AUTH_CLIENT_ID}
        redirect_uri={window.location.origin}
        audience={process.env.REACT_APP_AUTH_AUDIENCE}
        onRedirectCallback={onRedirectCallback}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
