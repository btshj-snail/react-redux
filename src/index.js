/**
 * Created by snail on 2016/10/28.
 */

import 'babel-polyfill'
import React,{Component} from 'react';
import reactDOM from 'react-dom';
import Root from './js/frame/root'
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './rootReducer'

import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk'



require("./css/main.less")
require("./css/iconfont.css")

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
)(createStore);



let store = createStoreWithMiddleware(rootReducer);
let rootElement = document.getElementById('root');

reactDOM.render(
    <Root store={store}/>,
    rootElement
)
