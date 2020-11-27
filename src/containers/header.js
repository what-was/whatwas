import React, { useState, useContext, useEffect } from 'react';
import { Header, Sidebar } from '../components';
import * as ROUTES from '../constants/routes';
import { useSidebarValue } from '../context';
import { FirebaseContext } from '../context/firebase';
import logo from '../logo-black.svg';
import { RiMenuLine } from 'react-icons/ri';

export function HeaderContainer({ children, route }) {
  const [searchTerm, setSearchTerm] = useState('');
  const user = JSON.parse(localStorage.getItem('authUser'));
  const { firebase } = useContext(FirebaseContext);

  // TODO => Figure out how to run if current header belongs to signed-in user.
  // const { sidebar, setSidebar } = useSidebarValue();

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
          <Sidebar.CloseButton onClick={() => setSidebar(!sidebar)}>
            <RiMenuLine />
          </Sidebar.CloseButton>
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
        </Header.RightGroup>
      </Header.Frame>
    </Header>
  );
}
