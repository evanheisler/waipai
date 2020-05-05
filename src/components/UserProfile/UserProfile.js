import React from 'react';
import { useAuth0 } from 'hooks/react-auth0-spa';
import { Avatar } from '@material-ui/core';
import UserMenu from 'components/Navigation/components/UserMenu';
import { useStyles } from './styles';

const UserProfile = () => {
  const { user } = useAuth0();
  const classes = useStyles();

  return (
    <div>
      <Avatar src={user.picture} alt="Profile" className={classes.avatar} />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <UserMenu />
    </div>
  );
};

export default UserProfile;
