import React, { Fragment } from 'react';
import { useAuth0 } from 'hooks/react-auth0-spa';
import UserPosts from './components/UserPosts';

const Profile = () => {
  const { user } = useAuth0();

  return (
    <Fragment>
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>

      <UserPosts />
    </Fragment>
  );
};

export default Profile;
