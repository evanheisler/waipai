import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import UserProfile from 'screens/UserProfile';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact />
      <PrivateRoute path="/:user" component={UserProfile} />
    </Switch>
  );
}

export default Routes;
