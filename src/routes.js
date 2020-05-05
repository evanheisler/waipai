import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useAuth0 } from 'hooks/react-auth0-spa';
import PrivateRoute from 'components/PrivateRoute';
import UserFeed from 'screens/UserFeed';
import Home from 'screens/Home';

function Routes() {
  const { isAuthenticated } = useAuth0();

  return (
    <Switch>
      <Route path="/" exact component={isAuthenticated ? UserFeed : Home} />
      <PrivateRoute path="/settings" render={props => 'Some settings'} />
      <Route path="/:user" exact component={UserFeed} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default Routes;
