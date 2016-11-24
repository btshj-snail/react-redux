/**
 * Created by runningSnail on 2016/11/22.
 */

import React,{Component} from 'react';

export default class Es6ClassView extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let codeDom = document.getElementById('oldCreateObjectCode');
        if(!!codeDom){
            codeDom.innerText = 'function Circle(radius){<br>'+
                'this.radius = radius;'+
            'Circle.circlesMade++;'+
            '}'+

            '//es5的新方法'+
            'Object.defineProperty(Circle,"circlesMade",{'+
            'get:function(){'+
            '    return this._count?this._count:0;'+
            '},'+
            'set:function(count){'+
            '    this._count = count;'+
            '}'+
            '})'+

            'Circle.prototype = {'+
            '    square:function(){'+
            '        .....'+
            '   }'+
            '}'+

            'Object.defineProperty(Circle.prototype,\'radius\',{'+
            '    get:function(){'+
                '    return this._radisu;'+
            '    },'+
            '    set:function(val){'+
            '        if(!Number.isInteger(val)){'+
            '            throw Error (`半径只能为整数`)'+
            '        }'+
            '        this._radius = val;'+
            '    }'+
            ' })'
            }
    }
    render(){
        return (
            <div>
                    <h1 className="colorLight sub_container_head">ES6之class</h1>
                    <div className="snail_panel">
                        <div className="snail_panel_content">
                        在Es6中引入了一个新的关键字，class。该关键字跟java中的class意思很相近，都是定义一个类。从而跟着引入了其他的关键字，比如：extend、static等。接下来我们看看这个class到底给我们带来了什么便利。
                         </div>
                    </div>

                    <ul className="snail_content_nav">
                        <li className="snail_content_nav_item"><a href="#oldCreateObject">旧的创建对象的方式</a></li>
                        <li className="snail_content_nav_item"><a href="#">新的创建对象的方式</a></li>
                        <li className="snail_content_nav_item"><a href="#">目前面临的问题</a></li>
                    </ul>

                    <h2 id="oldCreateObject" className="two-level-title">
                        旧的创建对象的方式
                    </h2>
                    <pre >
                        <code id="oldCreateObjectCode">

                        </code>
                    </pre>
            </div>
        )
    }
}