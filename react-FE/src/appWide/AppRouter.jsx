import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import Store from '../appWide/Store'
import LoginPage from '../login/LoginPage'

function AppRouter() {
 
  return (
    <Router>
        <Route exact path="/" component={Store} />
        <Route path="/login" component={LoginPage} />
    </Router>

  );
}

export default AppRouter;
