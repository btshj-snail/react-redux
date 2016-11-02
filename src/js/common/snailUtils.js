/**
 * Created by snail on 2016/10/29.
 */
const devFlag = true;
const snailUtils = {
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
    writeLog(msg){
        if(devFlag &&　window.console){
            console.log(msg);
        }
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
    }
}

export default snailUtils;