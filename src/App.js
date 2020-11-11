import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Header } from './components/layout/Header';
// import { Content } from './components/layout/Content';
// import { BoardsProvider, SelectedBoardProvider } from './context';
import { Home, Dashboard, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export const App = () =>
{
  const user = useAuthListener();

  return (
    <Router>
      <IsUserRedirect user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.SIGN_IN} exact>
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.SIGN_UP} exact>
        <Signup />
      </IsUserRedirect>
      <IsUserRedirect user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.HOME} exact>
        <Home />
      </IsUserRedirect>

      <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
        <Dashboard />
      </ProtectedRoute>

    </Router>

    // <SelectedBoardProvider>
    //   <BoardsProvider>
    //     <div className="App">
    //       <Header />
    //       <Content />
    //     </div>
    //   </BoardsProvider>
    // </SelectedBoardProvider>
  );
};
