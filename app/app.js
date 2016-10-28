/**
 * Created by snail on 2016/10/28.
 */

import React,{Component} from 'react';

import reactDOM from 'react-dom';

import {createStore} from 'redux';

import {Provider} from 'react-redux';

import userReducer from './js/user/userReducers';

import UserView from './js/user/UserView'

let store = createStore(userReducer);

let rootElement = document.getElementById('root');

reactDOM.render(
    <Provider store = {store}>
        <UserView/>
    </Provider>,
    rootElement
)
