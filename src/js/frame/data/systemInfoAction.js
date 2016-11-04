/**
 * Created by snail on 2016/11/4.
 */

export const SET_SYSTEM_INFO = "SET_SYSTEM_INFO";

export function setSystemInfo(systemInfo){
    return {
        type:SET_SYSTEM_INFO,
        systemInfo
    }
}