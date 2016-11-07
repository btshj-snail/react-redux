/**
 * Created by snail on 2016/11/4.
 */

import {SET_SYSTEM_INFO} from './systemInfoAction'

function systemInfoReducer(state={},action){
    switch(action.type){
        case SET_SYSTEM_INFO:
            let obj = Object.assign({},state,action.systemInfo);
            if(obj!==state){
                console.debug('确实和原来的state对象不相等哦');
            }
          return  obj;
        default : return state;
    }
}

export default  systemInfoReducer;