import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/core/styles';
import CSRFToken from '../utils/webUtils';

const useStyles = makeStyles(theme => ({
    paper: {
        backgroundColor: theme.palette.secondary.light,
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        height: '48px'
    },
    input: {
        margin: "20px",
        color: 'white'
    }
}));


const LoginPage = () => {
    const classes = useStyles();
    const [item, setItem] = useState({
        username: 'sample username',
        password: "sample password"
    })
    const handleChange = (e, property) => {
        setItem({ ...item, [property]: e.target.value })
    }
    return <div>
                 <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="initial">
            Login Page
          </Typography>
          
          <SvgIcon>
            <path fill="#FFFFFF" d="M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,
            3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M16.53,11.06L15.47,10L10.59,14.88L8.47,
            12.76L7.41,13.82L10.59,17L16.53,11.06Z" />
          </SvgIcon>
            {/* {(appStatus == 'fine')?null: <Typography variant="h6" color="initial">Status:{appStatus}</Typography>} */}
            {/* <Button onClick={saveItems}>Save in local storage</Button>
                <Button onClick={loadItems}>Load</Button> */}
        </Toolbar>
      </AppBar>
    </div>

        <Paper classes={{ root: classes.paper }} className={classes.root} p={3} m={2}>
            <form className="login-form" action="accounts/login/" method="post">
                <CSRFToken/>
                <FormControl classes={{ root: classes.input, base: classes.input }}>
                    <InputLabel htmlFor="username">User name: </InputLabel>
                    <Input onChange={(e) => { handleChange(e, "username") }}
                        value={item.username} placeholder={"What do I want to do?..."}
                        input={<Input name="username" id="username" />}
                    />
                </FormControl>
                <FormControl classes={{ root: classes.input, base: classes.input }}>
                    <InputLabel htmlFor="password">password</InputLabel>
                    <Input onChange={(e) => { handleChange(e, "password") }}
                        value={item.password} placeholder={"What do I want to do?..."}
                        input={<Input name="password" id="password" />}
                    />
                </FormControl>
                <Button classes={{ root: classes.button }} type='submit' variant="contained" color="primary" onClick={() => { }}>Log In</Button>
            </form>
        </Paper>
    </div>
}

export default LoginPage