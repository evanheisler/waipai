import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from 'hooks/react-auth0-spa';

function Header() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <nav className="Nav">
      <Link to="/">Home</Link>
      {!isAuthenticated && (
        <>
          <button
            className="Nav-user-button button-no-style"
            onClick={() => loginWithRedirect({})}>
            Not authed
          </button>
        </>
      )}

      {isAuthenticated && (
        <>
          <Link className="Nav-user-button" to={user.nickname}>
            Profile
          </Link>
        </>
      )}
      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </nav>
  );
}

export default Header;
