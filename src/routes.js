import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import UserProfile from 'screens/UserProfile';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={UserProfile} />
      <PrivateRoute path="/settings" render={props => 'Some settings'} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default Routes;
