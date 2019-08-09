import React from 'react';
import AppContainer from './appMain/AppContainer'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from './LoginPage'

function AppTheme() {
  const theme = createMuiTheme({
    palette: {
      primary: teal,
      secondary: blueGrey
    }
  });

  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <Route exact path="/" component={AppContainer} />
        <Route path="/login" component={LoginPage} />
      </MuiThemeProvider>
    </Router>

  );
}

export default AppTheme;
