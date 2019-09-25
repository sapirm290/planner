import React from 'react';
import Store from './appWide/Store'
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const alertOptions = {
    timeout: 3000,
    position: "top center"
};
function App() {
    return (
        <AlertProvider template={AlertTemplate} {...alertOptions}>
            <Store>
            </Store>
        </AlertProvider >
    );
}

export default App;
