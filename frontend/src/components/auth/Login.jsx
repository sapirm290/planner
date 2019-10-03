import React, { useState } from 'react'
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { login } from '../../actions/auth'
import { Box, Container, Button, InputLabel, Input, FormControl, Typography } from '@material-ui/core';

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const onSubmit = e => {
        e.preventDefault();

        props.login({ username, password });
    }


    if (props.isAuthenticated) {
        return <Redirect to="/" />;
    }
    return (



        <Container maxWidth="md" >
            <Box variant="contained" color="secondary" p={3} >
                <Typography variant='h4'>Login</Typography>
                <FormControl >
                    <InputLabel htmlFor="username">Username: </InputLabel>
                    <Input onChange={e => { setUsername(e.target.value) }}
                        value={username} placeholder={"your username goes here"}
                        input={<Input name="username" />}
                    />
                </FormControl>
                <br />
                <FormControl >
                    <InputLabel htmlFor="password">Password: </InputLabel>
                    <Input onChange={e => { setPassword(e.target.value) }} type='password'
                        value={password} placeholder={"your password goes here"}
                        input={<Input name="password" />}
                    />
                </FormControl>
                <Button variant="contained" color="secondary" onClick={onSubmit}>Login</Button>
                <Typography style={{ marginTop: '40px' }}>Don't have an account?   </Typography>
                <Button variant="contained" color="secondary" href='/#/Register'>Register
                </Button>


            </Box>
        </Container >

    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
