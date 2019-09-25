import React, { useEffect } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import Theme from './Theme';
import rootReducer from '../reducers/root'
import { loadUser } from '../actions/auth'

const Store = () => {


    const store = createStore(rootReducer, compose(
        applyMiddleware(thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    useEffect(() => { store.dispatch(loadUser()) }, [])


    return (
        <Provider store={store}>
            <Theme />
        </Provider>
    )

}
export default Store