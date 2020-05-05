import React from 'react';
import { useAuth0 } from 'hooks/react-auth0-spa';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

const UserMenu = () => {
  const { logout } = useAuth0();

  return (
    <>
      <div>
        <List dense>
          <ListItem component={Link} button to="/settings">
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button onClick={() => logout()}>
            <ListItemText primary="Log out" />
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default UserMenu;
