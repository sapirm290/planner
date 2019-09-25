import { combineReducers } from 'redux'
import items from './items'
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";



export default combineReducers({
    items,
    errors,
    messages,
    auth
});