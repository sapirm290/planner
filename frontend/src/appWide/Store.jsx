import React, { useEffect } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import Theme from './Theme';
import rootReducer from '../reducers/root'
import { loadUser } from '../actions/auth'
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const alertOptions = {
    timeout: 2000,
    position: "top center"
};

const Store = () => {
    // const store = createStore(rootReducer, compose(
    //     applyMiddleware(thunkMiddleware),
    //     window.devToolsExtension ? window.devToolsExtension() : f => f
    // ));
    const store = createStore(rootReducer,
        applyMiddleware(thunkMiddleware),
    );
    useEffect(() => { store.dispatch(loadUser()) }, [])


    return (
        <Provider store={store}>
            <AlertProvider template={AlertTemplate} {...alertOptions}>
                <Theme />
            </AlertProvider>
        </Provider>
    )

}
export default Store