import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React, { Fragment } from 'react';
import DashboarContainer from './DashboarContainer'
import Register from '../auth/Register'
import Login from '../auth/Login'
import PrivateRoute from '../common/PrivateRoute'
import Header from '../header/Header'
import Alerts from "../Alerts";
import { Container } from '@material-ui/core';
const articleStyle = { maxWidth: '1180px' }

function AppRouter() {
  return (
    <Router>
      <Header />
      <Alerts />
      <Switch>
        <PrivateRoute exact path="/" component={DashboarContainer} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>

  );
}

export default AppRouter;
