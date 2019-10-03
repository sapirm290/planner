import React, { useEffect } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { loadUser } from './actions/auth'
import rootReducer from './reducers/root'
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import blueGrey from '@material-ui/core/colors/blueGrey';
import AppRouter from './components/main/AppRouter'


const alertOptions = {
    timeout: 2000,
    position: "top center"
};

const theme = createMuiTheme({
    palette: {
        primary: teal,
        secondary: blueGrey
    }
});
const store = createStore(rootReducer, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
// const store = createStore(rootReducer,
//     applyMiddleware(thunkMiddleware),
// );

function App() {
    useEffect(() => { store.dispatch(loadUser()) }, [])
    return (
        <Provider store={store}>
            <AlertProvider template={AlertTemplate} {...alertOptions}>
                <MuiThemeProvider theme={theme}>
                    <AppRouter />
                </MuiThemeProvider>
            </AlertProvider>
        </Provider>
    );
}

export default App;
