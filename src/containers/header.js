import React, { useState, useContext } from 'react';
import { Header, Sidebar } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import logo from '../logo-black.svg';
import { useAuthListener } from '../hooks';
import { SidebarToggleContainer } from './header/sidebar-toogle';

export function HeaderContainer({ children, route }) {
  const [searchTerm, setSearchTerm] = useState('');
  const { firebase } = useContext(FirebaseContext);
  const { user } = useAuthListener();

  let ctaText;
  if (window.location.pathname === '/signin') {
    ctaText = "Don't have an account?";
  } else if (window.location.pathname === '/signup') {
    ctaText = 'Already have an account?';
  } else {
    ctaText = null;
  }

  return !user ? (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="WhatWas" />
        <Header.Group>
          <Header.Text>{ctaText}</Header.Text>
          <Header.ButtonLink
            to={route === 'sign-in' ? ROUTES.SIGN_IN : ROUTES.SIGN_UP}
          >
            {route === 'sign-in' ? 'Sign in' : 'Sign up'}
          </Header.ButtonLink>
        </Header.Group>
      </Header.Frame>
      {children}
    </Header>
  ) : (
    <Header>
      <Header.Frame className="signed-in">
        <Header.LeftGroup>
          <SidebarToggleContainer />
          <Header.Logo to={ROUTES.DASHBOARD} src={logo} alt="WhatWas" />
        </Header.LeftGroup>
        <Header.CenterGroup>
          <Header.Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </Header.CenterGroup>
        <Header.RightGroup>
          <Header.Profile>
            <Header.Picture
              aria-label={`Picture of ${user.displayName}`}
              size="40"
              src={user.photoURL}
            />
            <Header.Dropdown>
              <Header.LeftGroup>
                <Header.Picture
                  aria-label={`Profile of ${user.displayName}`}
                  size="30"
                  src={user.photoURL}
                ></Header.Picture>
                <Header.TextLink>{user.displayName}</Header.TextLink>
              </Header.LeftGroup>
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
        </Header.RightGroup>
      </Header.Frame>
    </Header>
  );
}
