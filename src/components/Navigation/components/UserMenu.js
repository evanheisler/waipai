import React from 'react';
import { useAuth0 } from 'hooks/react-auth0-spa';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import { useStyles } from '../styles';

const UserMenu = () => {
  const { logout, isAuthenticated, loginWithRedirect, user } = useAuth0();
  const classes = useStyles();

  return (
    <>
      <Typography
        variant="h6"
        color="inherit"
        className={classes.title}
        component={Link}
        to={isAuthenticated ? user.nickname : '/'}>
        WAIPAI
      </Typography>
      {!isAuthenticated && (
        <div className={classes.accountButton}>
          <Button color="inherit" onClick={() => loginWithRedirect({})}>
            Login
          </Button>
        </div>
      )}

      <List dense>
        <ListItem component={Link} button to="/settings">
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button onClick={() => logout()}>
          <ListItemText primary="Log out" />
        </ListItem>
      </List>
    </>
  );
};

export default UserMenu;
