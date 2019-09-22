import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';


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
        <h1>Login page</h1>

        <Paper classes={{ root: classes.paper }} className={classes.root} p={3} m={2}>
            <form className="login-form" action="/login" method="post">
                <FormControl classes={{ root: classes.input, base: classes.input }}>
                    <InputLabel htmlFor="username">User name: </InputLabel>
                    <Input onChange={(e) => { handleChange(e, "username") }}
                        value={item.title} placeholder={"What do I want to do?..."}
                        input={<Input name="username" id="username" />}
                    />
                </FormControl>
                <FormControl>

                    <InputLabel htmlFor="password">password</InputLabel>
                    <Input onChange={(e) => { handleChange(e, "password") }}
                        value={item.password} placeholder={"What do I want to do?..."}
                        input={<Input name="password" id="password" />}
                    />
                </FormControl>
                <Button classes={{ root: classes.button }} variant="contained" color="primary" onClick={() => { }}>Log In</Button>
            </form>
        </Paper>
    </div>
}

export default LoginPage