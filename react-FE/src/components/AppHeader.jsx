import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function AppHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="initial">
            Goals
          </Typography>
          <SvgIcon>
            <path fill="#FFFFFF" d="M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,
            3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M16.53,11.06L15.47,10L10.59,14.88L8.47,
            12.76L7.41,13.82L10.59,17L16.53,11.06Z" />
          </SvgIcon>
        </Toolbar>
      </AppBar>
    </div>
  );
}