import React, {useState,  Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Typography, Button} from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import { logout } from "../../actions/auth";
import { connect } from "react-redux";

const useStyles = makeStyles(theme =>({
  header: {
    zIndex: theme.zIndex.drawer + 1,
  },
  padding5px: {
    padding: '5px',
  },
  leftLink: {
    padding: '5px',
   marginLeft: 'auto'
  },
  links:{
    color: '#fff',
    textDecoration: 'none'
  }
}));

function AppHeader(props) {
  const classes = useStyles();
  const [state, setstate] = useState({time: new Date()})
  setInterval(() => setstate({time: new Date()}) ,1000)

  const { isAuthenticated, user } = props.auth;  
  const authLinks = (
    <Fragment>
   <Typography className={`${classes.leftLink} ${classes.padding5px}`} variant="h6" color="initial" >  {user ? `Welcome ${user.username}` : ""} </Typography>
  <Button variant="contained" color="secondary" onClick={props.logout}>Logout</Button>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Button className={classes.leftLink} variant="contained" color="secondary" href='/#/register'>
      <Typography  className={classes.links}  variant="body1" >
            register
          </Typography>
        </Button>
      <Button className={classes.padding5px} variant="contained" color="secondary" href='/#/login'><Typography  className={classes.links}  variant="body1" >
            Login
          </Typography></Button>

        </Fragment>
  );
  return (
      <AppBar className={classes.header} position="fixed" color="primary">
        <Toolbar>
          <Typography  className={classes.padding5px}  variant="h6" color="initial" >
            Plan
          </Typography>
          
          <SvgIcon className={classes.padding5px} >
            <path fill="#FFFFFF" d="M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,
            3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M16.53,11.06L15.47,10L10.59,14.88L8.47,
            12.76L7.41,13.82L10.59,17L16.53,11.06Z" />
          </SvgIcon>
          <Typography  className={classes.padding5px} variant="h6" color="initial">
             {state.time.getHours()}:{(state.time.getMinutes()<10?'0':'') + state.time.getMinutes() }
          </Typography>
          {isAuthenticated ? authLinks : guestLinks}
        </Toolbar>
      </AppBar>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(AppHeader);