/**
 * Created by snail on 2016/11/2.
 */

import {combineReducers} from 'redux';
import menu from './js/frame/data/menuReducer';
import userReducer from './js/user/userReducers';

const rootReducer = combineReducers({
    menu:menu,
    userList:userReducer
})


export default rootReducer;