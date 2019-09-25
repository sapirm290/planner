import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";
import { GET_TODOS, ADD_TODO, DELETE_TODO } from "./types";

// import { getCookie } from '../utils/webUtils'



// GET LEADS
export const getTodos = () => (dispatch, getState) => {
    console.log('inside get todos')
    axios
        .get("/api/todos", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_TODOS,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

// DELETE LEAD
export const deleteTodo = id => (dispatch, getState) => {
    axios
        .delete(`/api/todos/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteTodo: "Todo Deleted" }));
            dispatch({
                type: DELETE_TODO,
                payload: id
            });
        })
        .catch(err => console.log(err));
};

// ADD LEAD
export const addTodo = todo => (dispatch, getState) => {
    axios
        .post("/api/todos/", todo, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addTodo: "Todo Added" }));
            dispatch({
                type: ADD_TODO,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};