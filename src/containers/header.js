import React, { useState, useContext } from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import logo from '../logo-white.svg';

export function HeaderContainer({ children, route, title }) {
  const [searchTerm, setSearchTerm] = useState('');
  const user = JSON.parse(localStorage.getItem('authUser'));
  const { firebase } = useContext(FirebaseContext);

  return !user ? (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="WhatWas" />
        <Header.ButtonLink
          to={route === 'sign-in' ? ROUTES.SIGN_IN : ROUTES.SIGN_UP}
        >
          {route === 'sign-in' ? 'Sign in' : 'Sign up'}
        </Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  ) : (
    <Header>
      <Header.Frame>
        <Header.Group>
          <Header.Logo to={ROUTES.DASHBOARD} src={logo} alt="WhatWas" />
          <Header.BoardTitle>{title}</Header.BoardTitle>
        </Header.Group>
        <Header.Group>
          <Header.Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <Header.Profile>
            <Header.Picture src={user.photoURL} />
            <Header.Dropdown>
              <Header.Group>
                <Header.Picture src={user.photoURL} />
                <Header.TextLink>{user.displayName}</Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.TextLink
                  onClick={() =>
                    firebase
                      .auth()
                      .signOut()
                      .catch((error) => console.error(error.message))
                  }
                >
                  Sign out
                </Header.TextLink>
              </Header.Group>
            </Header.Dropdown>
          </Header.Profile>
        </Header.Group>
      </Header.Frame>
    </Header>
  );
}
