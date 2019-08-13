import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider} from 'react-redux'
import AppLogic from '../components/appMain/AppLogic';
import rootReducer from '../reducers/rootReducer'

const Store = () => {


    const store = createStore(rootReducer, applyMiddleware(
        thunkMiddleware
    ));


    return (
        <Provider store={store}>
            <AppLogic />
        </Provider>
    )

}
export default Store