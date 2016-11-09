/**
 * Created by snail on 2016/11/4.
 */

export const SET_SYSTEM_INFO = "SET_SYSTEM_INFO";

export function setSystemInfo(systemInfo){
    let obj = {
        version :systemInfo && systemInfo.version?systemInfo.version:"",
        repository:systemInfo && systemInfo.repository && systemInfo.repository.git ? systemInfo.repository.git : ""
    }
    return {
        type:SET_SYSTEM_INFO,
        systemInfo:obj
    }
}