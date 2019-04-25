import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import {doLogin} from './reducers/index';
import { StoreState } from './types/index';
import { Provider } from 'react-redux';
import { LoginAction } from './actions';

declare var window: any;

const initialState = {
    userName: 'default'
}
/* tslint-disable */
const store = createStore<LoginAction, any, any, any>( 
    doLogin as any, 
    initialState as any,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* tslint-enable */


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();