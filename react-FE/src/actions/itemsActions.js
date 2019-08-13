import { LOADITEMS } from './actionTypes'
import { getCookie } from '../utils/webUtils'

export const loadItems = dispatch => {

    fetch("api/items", {
        method: "get",
        headers: {
            "Accept": "application/json",
        }
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        dispatch({ type: LOADITEMS, items: data });
    }).catch(function (ex) {
        console.log("parsing failed", ex);
    });

}
export const addItem = (dispatch, item) => {
    console.log('item')
    console.log(item)
    fetch("api/items/", {
        method: "post",
        credentials: "same-origin",
        headers: {
            "X-CSRFToken": getCookie("csrftoken"),
            "Accept": "application/json",
            "Content-Type": "application/json",
            body: JSON.stringify(item),
        }
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        dispatch(loadItems);
    }).catch(function (ex) {
        console.log("parsing failed", ex);
    });

}

