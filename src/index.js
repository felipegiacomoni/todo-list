import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import App from "./App";
import reducers from "./reducers";
import reduxThunk from 'redux-thunk';
import { Provider } from "react-redux";

const store = createStore(
    reducers,
    compose(applyMiddleware(reduxThunk))
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)