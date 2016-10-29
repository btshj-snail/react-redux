/**
 * Created by snail on 2016/10/28.
 */
import React,{Component} from 'react';
import reactDOM from 'react-dom';
import Root from './js/frame/root'
import {createStore} from 'redux';
import userReducer from './js/user/userReducers'

require("./css/main.css")

let store = createStore(userReducer);
let rootElement = document.getElementById('root');

reactDOM.render(
    <Root store={store}/>,
    rootElement
)
