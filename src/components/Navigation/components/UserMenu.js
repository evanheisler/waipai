import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from 'hooks/react-auth0-spa';
import { IconButton, Menu, MenuItem, Box } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { useStyles } from '../styles';

const UserMenu = () => {
  const { logout, user } = useAuth0();
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className={classes.accountButton}>
        <Box>{user.name}</Box>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
          edge="end">
          {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </IconButton>
      </div>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}>
        <MenuItem component={Link} to="/settings">
          Settings
        </MenuItem>
        <MenuItem onClick={() => logout()}>Log out</MenuItem>
      </Menu>
    </>
  );
};

UserMenu.propTypes = {};

export default UserMenu;
