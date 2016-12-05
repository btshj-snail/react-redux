/**
 * Created by snail on 2016/12/5.
 */

import React,{Component} from 'react';
import Highlight from 'react-highlight';

import snailUtils , {snailBusinessUtils} from '../../common/snailUtils';

export default class Es6Array extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        snailBusinessUtils.overflow2ElPosition();
    }

    render(){
        return(
            <div>
                <h1 className="colorLight sub_container_head">ES6-数组</h1>
                <div className="snail_panel">
                    <div className="snail_panel_content">
                       数组是前端开发中，最常用的一种数据格式。因此该对象的api变化相对其他对象较多。

                    </div>
                </div>

                <ul className="snail_content_nav">
                    <li className="snail_content_nav_item"><a href="javaScript:void(0)" data-skip-anchor="arrayFrom">Array.from() </a></li>
                    <li className="snail_content_nav_item"><a href="javaScript:void(0)" data-skip-anchor="findAndFindIndex">数组实例化的find()和findIndex()</a></li>
                    <li className="snail_content_nav_item"><a href="javaScript:void(0)" data-skip-anchor="fillFunction">数组实例化的fill()</a></li>
                </ul>

                <h2 data-anchor="baseUse" className="two-level-title">
                    Array.from()
                </h2>
                <p className="code_chunk_desc">
                    Array.from方法可以将两类对象转化为真正的数组对象：类数组对象（只包含使用从零开始，且自然递增的整数做键名，并且定义了length表示元素个数的对象，我们就认为他是类数组对象）和可遍历对象（map，set等等）；
                </p>
                <Highlight className="code_chunk">
                    {
                        'let obj = {\n'+
                        '   "a":"a1",\n'+
                        '   "b":"b1",\n'+
                        '   "length":2\n'+
                        '   }\n'+
                        'let newAry = Array.from(obj);\n'+
                        'console.log(newAry);  // [undefined,undefined]\n'+
                        'let obj = {\n'+
                        '   "0":"a1",\n'+
                        '   "1":"b1",\n'+
                        '   "length":2\n'+
                        '   }\n'+
                        'let newAry = Array.from(obj);\n'+
                        'console.log(newAry);  // [a1,b1]\n'
                    }
                </Highlight>
                <p className="code_chunk_desc">
                    一定要注意类数组的定义.
                </p>
                <Highlight className="code_chunk">
                    {
                        'let map = new Map();\n'+
                        'map.set("a","a");\n'+
                        'map.set("b","a1");\n'+
                        'map.set("c","a2");\n'+
                        'console.log(Array.from(map)) //[[a,a],[b,a1],[c,a2]]\n'+
                        '\n'+
                        'let set = new Set();\n'+
                        'set.add("a");\n'+
                        'set.add("a1");\n'+
                        'set.add("a2");\n'+
                        'console.log(Array.from(set)) // [a,a1,a2] \n'
                    }
                </Highlight>
                <p className="code_chunk">
                    如果Array.from()方法里面传递了一个真正的数组，那么他会返回一个全新的一模一样的数组。如果传递了两个参数，那么第二个参数可以是一个函数，其效果和作用相当于执行了array.map

                </p>
                <Highlight className="code_chunk">
                    {
                        'let ary = ["a","b","c"];\n'+
                        'let newAry = Array.from(ary);\n'+
                        'console.log(newAry); //["a","b","c"]\n'+
                        'console.log(newAry===ary); //false\n'+
                        '\n'+
                        '//按照相应的规则生成新的数组\n'+
                        'let ary1 = [1,2,3,4,5,6]\n'+
                        'let newAry1 = Array.from(ary1,(item)=>{\n'+
                        'if(item>5){\n'+
                        'return true;\n'+
                        '}\n'+
                        'return false;\n'+
                        '})\n'+
                        'console.log(newAry1)\n'
                    }
                </Highlight>
                <h2 data-anchor="findAndFindIndex" className="two-level-title">
                    数组实例化的find()和findIndex()
                </h2>
                <p className="code_chunk_desc">
                    这是一个非常有用的api。在我们开发过程中，经常会遇到数组的元素是一个对象，这个时候需要对象中某个属性符合条件的元素。以前我们是写for循环，然后通过对比来实现。现在find和findIndex则帮我们实现了。
                </p>
                <Highlight className="code_chunk">
                    {
                        'let a = [{name:"jack",age:11},{name:"tom",age:13},{name:"lucy",age:15}]\n'+
                        'let obj = a.find((item,index,arr)=>{\n'+
                        'if(item.name=="tom1"){\n'+
                        'return true;\n'+
                        '   }\n'+
                        '   });\n'+
                        'console.log(obj);\n'
                    }
                </Highlight>
                <p className="code_chunk_desc">
                    findIndex跟find差不多，只不过他返回的是匹对上的元素的位置。如果都不匹对，那么findIndex返回-1 ，find返回undefined。注意这两个方法，都可以接受第二个参数，该参数用于绑定回调函数的this对象。
                </p>

                <h2 data-anchor="fillFunction"  className="two-level-title">
                    数组实例化的fill()
                </h2>
                <Highlight className="code_chunk">
                    {
                        'let b = new Array(4);\n'+
                        'console.log(b);\n'+
                        'b.fill("d")\n'+
                        'console.log(b);\n'
                    }
                </Highlight>
                <p className="code_chunk_desc">
                    该方法用于填充数组每个元素的数据。这在给数组赋初始值时非常有用。
                </p>
            </div>
        )
    }
}