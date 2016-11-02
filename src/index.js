/**
 * Created by snail on 2016/10/28.
 */
import React,{Component} from 'react';
import reactDOM from 'react-dom';
import Root from './js/frame/root'
import {createStore} from 'redux';
import rootReducer from './rootReducer'

require("./css/main.less")
require("./css/iconfont.css")

let store = createStore(rootReducer);
let rootElement = document.getElementById('root');

reactDOM.render(
    <Root store={store}/>,
    rootElement
)
