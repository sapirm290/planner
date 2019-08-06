import React from 'react'
import AppPresentational from './AppPresentational';
import LoginPage from '../LoginPage'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom";
const REMOVE = "REMOVE"
const SETDONE = "SETDONE"
const SETSTARRED = "SETSTARRED"
const ADD = "ADD"
const SAVE = "SAVE"
const LOAD = "LOAD"

const AppContainer = () => {
    const initialState = {
        taskIndex: 1,
        todos: [
            {
                content: { summary: "Example", description: "Description example" },
                time: { years: 2019, months: 7, days: 6, hours: 14, minutes: 27 },
                features: { index: 0, category: "todo", isStarred: false }
            }
        ]
    }
    const rootReducer = (state = initialState, action) => {
        let newState;
        switch (action.type) {
            case (SAVE):
                localStorage.saveCopy = JSON.stringify(state)
                return state
            case (LOAD):
                if (localStorage.hasOwnProperty("saveCopy"))
                    return JSON.parse(localStorage.saveCopy)
                return state
            case (ADD):
                newState = Object.assign({}, state)
                newState.todos.push({
                    content: { summary: action.item.content.summary, description: action.item.content.description },
                    time: {
                        years: action.item.time.years, months: action.item.time.months, days: action.item.time.days,
                        hours: action.item.time.hours, minutes: action.item.time.minutes
                    },
                    features: { index: newState.taskIndex, isStarred: false, category: "todo" }
                })
                newState.taskIndex++;
                return newState
            case (REMOVE):
                newState = Object.assign({}, state)
                let indexToRemove = newState.todos.indexOf(newState.todos.find(element => element.features.index === action.index))
                newState.todos.splice(indexToRemove, 1)
                return newState;
            case (SETDONE):
                newState = Object.assign({}, state)
                let indexToSetDone = newState.todos.indexOf(newState.todos.find(element => element.features.index === action.index))
                newState.todos[indexToSetDone].features.category = newState.todos[indexToSetDone].features.category === "todo" ? "done" : "todo";
                return newState
            case (SETSTARRED):
                console.log("getting starred" + action.index)
                newState = Object.assign({}, state)
                let indexToSetStarred = newState.todos.indexOf(newState.todos.find(element => element.features.index === action.index))
                newState.todos = [...newState.todos]
                newState.todos[indexToSetStarred].features.isStarred = !newState.todos[indexToSetStarred].features.isStarred;
                return newState

            default:
                return state;
        }

    }

    const store = createStore(rootReducer);

    const mapStateToProps = (state) => {
        let listsForRendering = [
            state.todos.filter(item => item.features.category === "todo")
                .sort((a, b) => b.features.isStarred - a.features.isStarred).map(element => element.features.index),
            state.todos.filter(item => item.features.category === "done")
                .sort((a, b) => b.features.isStarred - a.features.isStarred).map(element => element.features.index)
        ]
        return { listsForRendering: listsForRendering }
    }
    const mapDispatchToProps = dispatch => {
        return {
            saveItems: () => {
                dispatch({ type: SAVE })
            },
            loadItems: () => {
                dispatch({ type: LOAD })
            }
        }
    }

    const ConnectedApp = connect(
        mapStateToProps,
        mapDispatchToProps
    )(AppPresentational)
    
    return (
        <Router>
            <Provider store={store}>
                <Route exact path="/" component={ConnectedApp} />
                <Route path="/login" component={LoginPage} />
            </Provider>
        </Router>
    )
}

export default AppContainer
