/**
 * Created by snail on 2016/11/2.
 */

import {combineReducers} from 'redux';

import userReducer from './js/user/userReducers';
import loadInfoReducer from './js/frame/data/loadDataReducer';
import systemInfoReducer from './js/frame/data/systemInfoReducer';
import menuReducer from './js/frame/data/menuReducer';

const rootReducer = combineReducers({
    menu:menuReducer,
    systemInfo:systemInfoReducer,
    loadInfo:loadInfoReducer,
    userList:userReducer
})


export default rootReducer;