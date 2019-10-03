import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function AppHeader(props) {
  const classes = useStyles();
  const [state, setstate] = useState({time: new Date()})
  setInterval(() => setstate({time: new Date()}) ,1000)

  const { isAuthenticated, user } = props.auth;  
  const authLinks = (
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <span className="navbar-text mr-3">
        <strong>{user ? `Welcome ${user.username}` : ""}</strong>
      </span>
      <li className="nav-item">
        <button
          onClick={props.logout}
          className="nav-link btn btn-info btn-sm text-light"
        >
          Logout
        </button>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
    </ul>
  );
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="initial">
            Planner
          </Typography>
          
          <SvgIcon>
            <path fill="#FFFFFF" d="M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,
            3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M16.53,11.06L15.47,10L10.59,14.88L8.47,
            12.76L7.41,13.82L10.59,17L16.53,11.06Z" />
          </SvgIcon>
          <Typography variant="h6" color="initial">
             {state.time.getHours()}:{(state.time.getMinutes()<10?'0':'') + state.time.getMinutes() }
          </Typography>
          {isAuthenticated ? authLinks : guestLinks}
            {/* {(appStatus == 'fine')?null: <Typography variant="h6" color="initial">Status:{appStatus}</Typography>} */}
            {/* <Button onClick={saveItems}>Save in local storage</Button>
                <Button onClick={loadItems}>Load</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(AppHeader);