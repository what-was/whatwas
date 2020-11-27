import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Dashboard, Signin, Signup, Note } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';
import { SidebarProvider } from './context/sidebar-context';
import { ContextContainer } from './containers/context-container';

export const App = () => {
  const { user } = useAuthListener();

  return (
    <Router>
      <ContextContainer>
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
          <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
            <Dashboard />
          </ProtectedRoute>
          <ProtectedRoute user={user} path={ROUTES.NOTE + `/:noteId`} exact>
            <Note />
          </ProtectedRoute>
        </Switch>
      </ContextContainer>
    </Router>
  );
};
