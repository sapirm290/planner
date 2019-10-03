import React, { useState } from 'react'
import { Redirect } from "react-router-dom";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Button, InputLabel, Input, FormControl, Typography } from '@material-ui/core';




const Register = (props) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const onSubmit = e => {
        e.preventDefault();
        if (password !== password2) {
            props.createMessage({ passwordNotMatch: "Passwords do not match" });
        } else {
            const newUser = {
                username,
                password,
                email
            };
            props.register(newUser);
        }
    };

    if (props.isAuthenticated) {
        return <Redirect to="/" />;
    }
    return (

        <Container maxWidth="md" >
            <Box variant="contained" color="secondary" p={3} >
                <Typography variant='h4'>Register</Typography>
                <FormControl >
                    <InputLabel htmlFor="username">Username: </InputLabel>
                    <Input onChange={e => { setUsername(e.target.value) }} type='text'
                        value={username} placeholder={"your username goes here"}
                        input={<Input name="username" />}
                    />
                </FormControl>
                <br />
                <FormControl >
                    <InputLabel htmlFor="email">Email: </InputLabel>
                    <Input onChange={e => { setEmail(e.target.value) }} type='email'
                        value={email} placeholder={"your email goes here"}
                        input={<Input name="email" />}
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
                <br />
                <FormControl >
                    <InputLabel htmlFor="password2">Password2: </InputLabel>
                    <Input onChange={e => { setPassword2(e.target.value) }} type='password2'
                        value={password2} placeholder={"your password2 goes here"}
                        input={<Input name="password2" />}
                    />
                </FormControl>
                <Button variant="contained" color="secondary" onClick={onSubmit}>Register</Button>
                <br />
                <br />

                <Typography style={{ marginTop: '40px' }}>Already have an account?   </Typography>
                <Button variant="contained" color="secondary" href='/#/Login' >Login
                </Button>


            </Box>
        </Container>
    );
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { register, createMessage }
)(Register);