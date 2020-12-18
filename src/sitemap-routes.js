import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.SIGN_IN} />
        <Route exact path={ROUTES.SIGN_UP} />
        <Route exact path={ROUTES.HOME} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
