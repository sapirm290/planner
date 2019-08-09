import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import AppLogic from '../components/appMain/AppLogic'
import LoginPage from '../login/LoginPage'

function AppRouter() {
 
  return (
    <Router>
        <Route exact path="/" component={AppLogic} />
        <Route path="/login" component={LoginPage} />
    </Router>

  );
}

export default AppRouter;
