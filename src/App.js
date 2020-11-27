import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Home, Dashboard, Signin, Signup, Note } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';
import { ContextContainer } from './containers/context-container';

export const App = () => {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.DASHBOARD}
          path={ROUTES.SIGN_IN}
          exact
        >
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.DASHBOARD}
          path={ROUTES.SIGN_UP}
          exact
        >
          <Signup />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.DASHBOARD}
          path={ROUTES.HOME}
          exact
        >
          <Home />
        </IsUserRedirect>

        {/* 404 */}
        {/* {user ? (
          <Redirect to={ROUTES.DASHBOARD} />
        ) : (
          <Redirect to={ROUTES.HOME} />
        )} */}

        {user !== null ? (
          <ContextContainer>
            <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
              <Dashboard />
            </ProtectedRoute>
            <ProtectedRoute user={user} path={ROUTES.NOTE + `/:noteId`} exact>
              <Note />
            </ProtectedRoute>
          </ContextContainer>
        ) : (
          <>
            <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
              <Dashboard />
            </ProtectedRoute>
            <ProtectedRoute user={user} path={ROUTES.NOTE + `/:noteId`} exact>
              <Note />
            </ProtectedRoute>
          </>
        )}
      </Switch>
    </Router>
  );
};
