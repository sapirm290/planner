import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import React, { Fragment } from 'react';
import AppLogic from './AppLogic'
import Register from '../accounts/Register'
import Login from '../accounts/Login'
import PrivateRoute from '../common/PrivateRoute'
import Header from '../header/Header'
import Alerts from "../../components/Alerts";

function AppRouter() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Alerts />
        <Switch>
          <PrivateRoute exact path="/" component={AppLogic} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </Fragment>
    </Router>

  );
}

export default AppRouter;
