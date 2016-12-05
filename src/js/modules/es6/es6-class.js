/**
 * Created by runningSnail on 2016/11/22.
 */

import React,{Component} from 'react';
import Highlight from 'react-highlight';

import snailUtils,{snailBusinessUtils} from '../../common/snailUtils'


export default class Es6ClassView extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        snailBusinessUtils.overflow2ElPosition();
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
                        <li className="snail_content_nav_item"><a href="javaScript:void(0)" data-skip-anchor="createObjectByOldMethod">旧的创建对象的方式</a></li>
                        <li className="snail_content_nav_item"><a href="javaScript:void(0)" data-skip-anchor="createObjectByNewMethod">新的创建对象的方式</a></li>
                    </ul>

                    <h2 data-anchor="createObjectByOldMethod" className="two-level-title">
                        旧的创建对象的方式
                    </h2>
                <Highlight>
                    {
                        "function Circle(radius){\n"+
                        "   this.radius = radius;\n"+
                        "   Circle.circlesMade++;\n"+
                        "}\n"+

                        "//es5的新方法\n"+
                        "Object.defineProperty(Circle,\"circlesMade\",{\n"+
                        "   get:function(){\n"+
                        "       return this._count?this._count:0;\n"+
                        "    },\n"+
                        "   set:function(count){\n"+
                        "       this._count = count;\n"+
                        "   }\n"+
                        "})\n"+

                        "Circle.prototype = {\n"+
                        "   square:function(){\n"+
                        "       .....\n"+
                        "   }\n"+
                        "}\n"+

                        "Object.defineProperty(Circle.prototype,\"radius\" ,{\n"+
                        "   get:function(){\n"+
                        "       return this._radisu;\n"+
                        "   },\n"+
                        "   set:function(val){\n"+
                        "       if(!Number.isInteger(val)){\n"+
                        "           throw Error (`半径只能为整数`)\n"+
                        "       }\n"+
                        "   this._radius = val;\n"+
                        "   }\n"+
                        "})\n"
                        }
                    }
                    }
                </Highlight>
                <h2 data-anchor="createObjectByNewMethod" className="two-level-title">
                    新的创建对象的方式
                </h2>
                <Highlight>
                    {
                '    class Circle{ \n'+
                '       constructor(radius){\n'+
                '            this.radius = radius;\n'+
                '            Circle.circlesMade++;\n'+
                '        }\n'+
                '        static get circlesMade(){\n'+
                '           return this._count;\n'+
                '        }\n'+
                '        static set circlesMade(count){\n'+
                '             this._count = count;\n'+
                '        }\n'+
                '        \n'+
                '        get radius(){\n'+
                '            return this._radius;\n'+
                '        }\n'+
                '        \n'+
                '         set radius(radius){\n'+
                '            this._radius = radius;\n'+
                '        }\n'+
                '   \n '+
                '        square(){\n'+
                '            .....\n'+
                '        }\n'+
                '\n'+
                '   }\n'
                    }
                </Highlight>
            </div>
        )
    }
}