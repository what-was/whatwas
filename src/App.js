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

        {user !== null ? (
          <ContextContainer>
            <ProtectedRoute
              user={user}
              path={ROUTES.DASHBOARD + `/:boardId`}
              exact
            >
              <Dashboard />
            </ProtectedRoute>
            <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
              <Dashboard />
            </ProtectedRoute>
            <ProtectedRoute
              user={user}
              path={ROUTES.NOTE + `/:boardId` + `/:noteId`}
              exact
            >
              <Note />
            </ProtectedRoute>
            <ProtectedRoute user={user} path={ROUTES.NOTE} exact>
              <Redirect to={ROUTES.DASHBOARD} />
            </ProtectedRoute>
            {/* 404 */}
            <Redirect to={ROUTES.DASHBOARD} />
          </ContextContainer>
        ) : (
          <>
            <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
              <Dashboard />
            </ProtectedRoute>
            <ProtectedRoute
              user={user}
              path={ROUTES.DASHBOARD + `/:boardId`}
              exact
            >
              <Dashboard />
            </ProtectedRoute>
            <ProtectedRoute user={user} path={ROUTES.NOTE + `/:noteId`} exact>
              <Note />
            </ProtectedRoute>
            <ProtectedRoute user={user} path={ROUTES.NOTE} exact>
              <Redirect to={ROUTES.DASHBOARD} />
            </ProtectedRoute>
            {/* 404 */}
            <Redirect to={ROUTES.HOME} />
          </>
        )}
      </Switch>
    </Router>
  );
};
