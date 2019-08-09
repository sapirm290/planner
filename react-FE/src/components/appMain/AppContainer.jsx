import React, { useEffect } from 'react'
import AppVisual from './AppVisual';

import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import '../utils/webUtils'
const REMOVE = "REMOVE"
const SETDONE = "SETDONE"
const SETSTARRED = "SETSTARRED"
const ADD = "ADD"
const SAVE = "SAVE"
const LOAD = "LOAD"
const SAVELS = "SAVELS"
const LOADLS = "LOADLS"
const SETAPPSTATE = "SETAPPSTATE"

const AppContainer = () => {
    const initialState = {
        // taskIndex: 1,
        appStatus: 'loading',
        items:
            [
                // {
                //     content: { summary: "Example", description: "Description example" },
                //     time: { years: 2019, months: 7, days: 6, hours: 14, minutes: 27 },
                //     features: { index: 0, category: "items", isStarred: false }
                // }
            ]
    }

    const fetchItem = () => {
        fetch("api/items", {
            method: "get",
            // credentials: "same-origin",
            headers: {
                // "X-CSRFToken": webUtils.getCookie("csrftoken"),
                "Accept": "application/json",
                // "Content-Type": "application/json"
            }
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            store.dispatch({ type: LOAD, items: data })
        }).catch(function (ex) {
            console.log("parsing failed", ex);
        });
    }


    const rootReducer = (state = initialState, action) => {
        let newState;
        switch (action.type) {
            case (SETAPPSTATE):
                state.appStatus = action.appStatus
                console.log('current App state' + state.appStatus)
                return state
            case (SAVELS):
                localStorage.saveCopy = JSON.stringify(state)
                return state
            case (LOADLS):
                if (localStorage.hasOwnProperty("saveCopy"))
                    return JSON.parse(localStorage.saveCopy)
                return state
            case (LOAD):
                newState = { ...state, items: action.items, appStatus: 'fine' }
                return newState
            case (ADD):
                newState = Object.assign({}, state)
                newState.items.push({
                    content: { summary: action.item.content.summary, description: action.item.content.description },
                    time: {
                        years: action.item.time.years, months: action.item.time.months, days: action.item.time.days,
                        hours: action.item.time.hours, minutes: action.item.time.minutes
                    },
                    features: { index: newState.taskIndex, isStarred: false, category: "items" }
                })
                newState.taskIndex++;
                return newState
            case (REMOVE):
                newState = Object.assign({}, state)
                let indexToRemove = newState.items.indexOf(newState.items.find(element => element.features.index === action.index))
                newState.items.splice(indexToRemove, 1)
                return newState;
            case (SETDONE):
                newState = Object.assign({}, state)
                let indexToSetDone = newState.items.indexOf(newState.items.find(element => element.features.index === action.index))
                newState.items[indexToSetDone].features.category = newState.items[indexToSetDone].features.category === "items" ? "done" : "items";
                return newState
            case (SETSTARRED):
                newState = Object.assign({}, state)
                let indexToSetStarred = newState.items.indexOf(newState.items.find(element => element.features.index === action.index))
                newState.items = [...newState.items]
                newState.items[indexToSetStarred].features.isStarred = !newState.items[indexToSetStarred].features.isStarred;
                return newState

            default:
                return state;
        }

    }

    const store = createStore(rootReducer);

    const mapStateToProps = (state) => {
        return { listsForRendering: state.items }
    }


    const ConnectedApp = connect(
        mapStateToProps,
        null
    )(AppVisual)

    useEffect(() => {
        fetchItem()
    });

    return (
        <Provider store={store}>
            <ConnectedApp />
        </Provider>
    )
}

export default AppContainer
