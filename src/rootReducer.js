/**
 * Created by snail on 2016/11/2.
 */

import {combineReducers} from 'redux';
import menu from './js/frame/data/menuReducer';
import userReducer from './js/user/userReducers';
import loadInfo from './js/frame/data/loadDataReducer';
import systemInfoReducer from './js/frame/data/systemInfoReducer';

const rootReducer = combineReducers({
    menu:menu,
    systemInfo:systemInfoReducer,
    loadInfo:loadInfo,
    userList:userReducer
})


export default rootReducer;