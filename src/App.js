import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Header } from './components/layout/Header';
// import { Content } from './components/layout/Content';
// import { BoardsProvider, SelectedBoardProvider } from './context';
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';

export const App = () =>
{
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <Signin />
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <Signup />
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
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
