import React, { Component, Fragment, useEffect } from "react";
import { useAlert } from 'react-alert'
import { connect } from "react-redux";
// import PropTypes from "prop-types";


const Alerts = ({ error, message }) => {
    const alert = useAlert()
    const showError = (error) => {
        if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
        if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
        if (error.msg.message)
            alert.error(`Message: ${error.msg.message.join()}`);
        if (error.msg.non_field_errors)
            alert.error(error.msg.non_field_errors.join());
        if (error.msg.username) alert.error(error.msg.username.join());
    }
    const showMessage = (message) => {

        if (message.deleteTodo) alert.success(message.deleteTodo);
        if (message.addTodo) alert.success(message.addTodo);
        if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
    }
    useEffect(() => { showError(error) }, [error])
    useEffect(() => { showMessage(message) }, [message])
    return (
        <Fragment />
    )
}


const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(Alerts);