import React from "react";
import ReactDOM from "react-dom";

import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./reducers";
import App from "./App";
import Auth from "./components/authentication/auth";
import * as serviceWorker from "./serviceWorker";
import {createMuiTheme} from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )
);

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00675b',
        },
    },
});

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Auth>
                <App />
            </Auth>
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
