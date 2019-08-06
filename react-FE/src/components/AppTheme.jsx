import React from 'react';
import AppContainer from './appMain/AppContainer'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import blueGrey from '@material-ui/core/colors/blueGrey';

function AppTheme() {
  const theme = createMuiTheme({
    palette: {
      primary: teal,
      secondary: blueGrey
    }
  });

  return (
    <MuiThemeProvider theme={theme}>
      <AppContainer />
    </MuiThemeProvider>
  );
}

export default AppTheme;
