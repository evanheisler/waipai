import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import UserPosts from './components/UserPosts';
import UserProfile from 'components/UserProfile';
import UserMenu from 'components/Navigation/components/UserMenu';
import { useStyles } from './styles';

const Profile = () => {
  const { user } = useParams();
  const classes = useStyles();

  console.log('USER', user);

  return (
    <>
      <Grid item sm={12} md={7} className={classes.grid}>
        <UserPosts />
      </Grid>
      <Grid
        item
        sm={12}
        md={3}
        className={`${classes.grid} ${classes.lastColumn}`}>
        <UserProfile />
        Post meta…
      </Grid>
      <Grid item md={2}>
        <UserMenu />
      </Grid>
    </>
  );
};

export default Profile;
