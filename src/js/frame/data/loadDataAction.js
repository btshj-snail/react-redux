/**
 * Created by snail on 2016/11/3.
 */

import snailUtils from '../../common/snailUtils'

export const CHANGE_LOADING = "CHANGE_LOADING"
export const SET_MESSAGE = "SET_MESSAGE"


export function changeLoading(flag){
    return {
        type:CHANGE_LOADING,
        flag
    }
}

export function setMessage(message){
    return {
        type:SET_MESSAGE,
        message
    }
}


export function fetchJsonFile(url){
    return (dispatch)=>{
        dispatch(changeLoading(true));
        let promise = snailUtils.fetchJsonFile(url);
            promise.then((data)=>{
                dispatch(changeLoading(false));
                return data;
            },(msg)=>{
                dispatch(changeLoading(false));
                dispatch(setMessage(msg));
            })
        return promise;
    }
}