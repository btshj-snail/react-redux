/**
 * Created by snail on 2016/10/29.
 */
import 'whatwg-fetch'

/**
 * 系统参数配置
 * @type {boolean}
 */
const sysConfig = {
    //日志输出的类别。在系统中最好遵循以下规范：
    // info输出关键逻辑处理点。 snailUtils.info() 或者snailUtils.writeLog(msg,'info')
    // log输出记录信息。 snailUtils.log() 或者snailUtils.writeLog(msg,'log')
    // debug，调试时的一些数据流向。snailUtils.debug()或者snailUtils.writeLog(msg,'debug')
    // warn，不影响系统以及业务流程的信息，有可能会导致系统或者业务异常的信息。snailUtils.warn()或者snailUtils.writeLog(msg,'warn')
    // error 影响系统以及业务流程的报错信息。snailUtils.error()或者snailUtils.writeLog(msg,'error')
    loggerOutputType:["info","debug","warn","log","error"],
}
const snailUtils = {
    basePath(){
        if(sysConfig.basePath){
            return sysConfig.basePath;
        }else{
            let href = window.location.href;
            let ary = href.split("/")
            return ary[0]+"//"+ary[2];
        }
    },
    getRandomStr(length=16,hasTime=true){
        let str='qwertyuiopasdfghjklzxcvbnmQWERTYUIOPSADFGHJKLZXCVBNM1234567890';
        let ary= str.split(""),strAry=[];
        let count =0;
        while(count<=16){
            strAry.push(ary[++count]);
        }
        return strAry.join("")+(hasTime?new Date().getTime():"");
    },
    addEvent(dom,name,fun=()=>{}){
        if (window.attachEvent) {
            dom.attachEvent(`on${name}`, fun);
        } else {
            dom.addEventListener(name, fun, false);
        }
    },
    writeLog(msg,type="log"){
        if (window.console) {
            if (!!sysConfig.loggerOutputType &&
                Array.isArray(sysConfig.loggerOutputType)) {
                if (sysConfig.loggerOutputType.indexOf(type) != -1) {
                    // console对象的上面5种方法，都可以使用printf风格的占位符。不过，占位符的种类比较少，只支持字符（%s）、整数（%d或%i）、浮点数（%f）和对象（%o）四种。
                    let placeholder = "%s"
                    if (typeof msg == "string") {
                        placeholder = '%s'
                    } else if (typeof msg == 'object') {
                        placeholder = '%o'
                    } else if (typeof msg == 'number' && msg.toString().indexOf('.') != -1) {
                        placeholder = '%f'
                    } else if (typeof msg == 'number' && msg.toString().indexOf('.') == -1) {
                        placeholder = '%d'
                    }
                    switch (type) {
                        case 'log' :
                            console.log(placeholder, msg);
                            break;  //用于输出普通信息
                        case 'info' :
                            console.info(placeholder, msg);
                            break; //用于输出提示性信息
                        case 'warn' :
                            console.warn(placeholder, msg);
                            break; //用于输出警示信息
                        case 'error' :
                            console.error(placeholder, msg);
                            break; //用于输出错误信息
                        case 'debug' :
                            console.debug(placeholder, msg);
                            break; //用于输出调试信息
                    }

                }
            } else {
                console.warn(`您调用了输出日志相关方法，但是没有设置日志输出类型。请联系开发人员在sysConfig中设置将要显示日志的类型`)
            }
        }
    },
    log(msg){
        snailUtils.writeLog(msg);
    },
    info(msg){
        snailUtils.writeLog(msg,"info");
    },
    error(msg){
        snailUtils.writeLog(msg,"error");
    },
    warn(msg){
        snailUtils.writeLog(msg,"warn");
    },
    debug(msg){
        snailUtils.writeLog(msg,"debug");
    },
    /**
     * 判断两个数组是否相等。数组中的元素最好是值类型，如果是引用类型，那么必然不会相等
     * @param aAry
     * @param bAry
     * @returns {boolean}
     */
    isArrayEqual(aAry,bAry){
        if(aAry.length!=bAry.length){
            return false;
        }else{
            for(let item of aAry){
                if(bAry.indexOf(item)==-1){
                    return false;
                }
            }
            return true;
        }
    },
    fetch(url,param={},method="POST",mode="no-cors"){

        let headers = new Headers();
        headers.append('Accept','application/json');
        headers.append('Content-Type','application/json');

        let config = {
            method:method,
            mode:mode,
            headers:headers,
        }
        //处理参数
        if(method=="GET"){
           url = assembleParamToUrl(url,param);
        }else{
            config.body = JSON.stringify(param)
        }

        let promise = fetch(url,config);

        return promise.then(
            function (response) {
                if(response.status>=200 && response.status<300){
                    return response.json();
                }else{
                    snailUtils.writeLog(`向服务端发送[${url}]请求,响应状态为${response.status}`);
                    throw response.status;
                }
            },
            function (ex) {
                    throw ex;
            })
            .catch(function(ex){
                if(ex==404){
                    snailUtils.writeLog(`请求服务失败,404`)
                }else if(ex==500){
                    snailUtils.writeLog(`请求服务失败,500`)
                }else if(ex.message=='Failed to fetch'){
                    snailUtils.writeLog(`请求服务失败，可能是您的网络或者服务器出现异常`)
                }else if(ex.message=='Network request failed'){
                    snailUtils.writeLog(`请求服务失败，请检查网络和地址`)
                }else{
                    snailUtils.writeLog(`请求服务失败`)
                }

            })

        function assembleParamToUrl(url,param){
            let ary=[];
            for(let name in param){
                ary.push(`${name}=${param[name]}`);
            }
            if(ary.length>0){
                if(url.indexOf("?")==-1){
                    url = `${url}?${ary.join("&")}`;
                }else{
                    url = `${url}&${ary.join("&")}`;
                }
            }
            return url;
        }


    },

    fetchSnail(url,param={},method="POST",mode="no-cors"){
        let promise = snailUtils.fetch(url, param, method, mode);
        //按照后台格式解析数据
        //指定数据格式为
        // {
        // code:1,  1  正常（message无信息）   -1 异常（message有信息）
        // message:"",
        // data:{}
        // }
       return promise.then(function (json) {
            if(json.code=="1"){
                return json.data;
            }else{
                throw json.message;
            }
        }, function () {

        })
            .catch(function(message){
                snailUtils.writeLog(message);
            })
    },

    fetchJsonFile(url){
        return fetch(url,null,"GET");
    }

}

export default snailUtils;