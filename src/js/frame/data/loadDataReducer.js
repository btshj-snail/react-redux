/**
 * Created by snail on 2016/11/3.
 */


import {SET_MESSAGE,CHANGE_LOADING} from './loadDataAction';

function loadInfo(state={},action){
    switch(action.type){
        case SET_MESSAGE : return Object.assign({},state,{errorMsg:action.message});
        case CHANGE_LOADING:return Object.assign({},state,{loading:action.flag});
        default: return state;
    }
}
export default loadInfo;