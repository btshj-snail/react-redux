/**
 * Created by snail on 2016/11/4.
 */

import {SET_SYSTEM_INFO} from './systemInfoAction'

function systemInfoReducer(state={},action){
    switch(action.type){
        case SET_SYSTEM_INFO:
          return  Object.assign({},state,action.systemInfo);
        default : return state;
    }
}

export default  systemInfoReducer;