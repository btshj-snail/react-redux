/**
 * Created by snail on 2016/10/29.
 */
const snailUtils = {
    getRandomStr(length=16,hasTime=true){
        let str='qwertyuiopasdfghjklzxcvbnmQWERTYUIOPSADFGHJKLZXCVBNM1234567890';
        let ary= str.split(""),strAry=[];
        let count =0;
        while(count<=16){
            strAry.push(ary[++count]);
        }
        return strAry.join("")+(hasTime?new Date().getTime():"");
    }
}

export default snailUtils;