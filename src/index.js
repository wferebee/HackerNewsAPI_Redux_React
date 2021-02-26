import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style.css";

import store from './Redux/store.js'
import {Provider} from 'react-redux'
//wrapping App in the proider
ReactDOM.render(
    <Provider store={store}>          
        <App />
    </Provider>, document.getElementById('root')
);
