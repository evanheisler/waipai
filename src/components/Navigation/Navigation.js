import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from 'hooks/react-auth0-spa';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { useStyles } from './styles';

const Navigation = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classes.bar}
        color="default"
        elevation={0}>
        <Toolbar variant="dense">
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
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Navigation;
