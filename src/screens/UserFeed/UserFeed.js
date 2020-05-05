import React from 'react';
import { Grid } from '@material-ui/core';
import UserPosts from './components/UserPosts';
import UserProfile from 'components/UserProfile';

const Profile = () => {
  return (
    <>
      <Grid item sm={12} md={7}>
        <UserPosts />
      </Grid>
      <Grid item sm={12} md={3}>
        Post meta…
      </Grid>
      <Grid item md={2}>
        <UserProfile />
      </Grid>
    </>
  );
};

export default Profile;
