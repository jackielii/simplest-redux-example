# Simple React-Redux Example
Redux is a state management tool. While it’s mostly used with React, it can be used with any other JavaScript framework or library. It is lightweight at 2KB (including dependencies), so you don’t have to worry about it making your application’s asset size bigger.

With Redux, the state of your application is kept in a store and each component can access any state that it needs from this store. Let’s dive a little deeper to see why you might need a state management tool.

## Required PACKAGES
 - React Redux [React Redux documentation](https://www.npmjs.com/package/react-redux) to know more about package in detail.
 - Redux [Redux documentation](https://www.npmjs.com/package/redux) to know more about package in detail.
 - Redux Thunk [Redux Thunk documentation](https://www.npmjs.com/package/redux-thunk) to know more about package in detail.

#### Configuration redux structure
 - Set up the redux strucure in react we required to create a store which contains all the variable or globle variable value so that whole redux strucutre or DOM will manupulate using that store.
 - We require create a store from base or root, so that each component or DOM will get access of that store.
 - Store value can be access using applying middleware to our whole application.


 ````
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import Reducer from './../src/redux/reducer';

const store = createStore(
    Reducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
 ````

In App.js file using above declaration code, we can create the store and apply middleware to access those store values.


 