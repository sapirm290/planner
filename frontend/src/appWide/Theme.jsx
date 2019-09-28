import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import blueGrey from '@material-ui/core/colors/blueGrey';
import AppRouter from '../components/appMain/AppRouter'

function Theme() {
  const theme = createMuiTheme({
    palette: {
      primary: teal,
      secondary: blueGrey
    }
  });

  return (
    <MuiThemeProvider theme={theme}>
      <AppRouter />
    </MuiThemeProvider>
  );
}

export default Theme;
