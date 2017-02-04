/**
 * Created by runningSnail on 2016/12/7.
 */
import React , {Component} from 'react';
import Highlight from 'react-highlight';

import snailUtils , {snailBusinessUtils} from '../../common/snailUtils';

export default class Es6Object extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        snailBusinessUtils.overflow2ElPosition();
    }

    render(){
        return (
            <div>
                <h1 className="colorLight sub_container_head">ES6-对象</h1>
                <div className="snail_panel">
                    <div className="snail_panel_content">
                        ES6加强了对对象的操作，主要在于简化和增强对对象的操作。
                    </div>
                </div>

                <ul className="snail_content_nav">
                    <li className="snail_content_nav_item">
                        <a href="javaScript:void(0)" data-skip-anchor="attributeSimpleShowMethod">属性的简洁表示法</a>
                    </li>
                    <li className="snail_content_nav_item">
                        <a href="javaScript:void(0)" data-skip-anchor="attributeNameExpression">属性名表达式</a>
                    </li>
                    <li className="snail_content_nav_item">
                        <a href="javaScript:void(0)" data-skip-anchor="repeatFunction">repeat() </a>
                    </li>
                    <li className="snail_content_nav_item">
                        <a href="javaScript:void(0)" data-skip-anchor="padStartAndPadEnd">padStart()，padEnd() </a>
                    </li>
                </ul>

                <h2 data-anchor="attributeSimpleShowMethod" className="two-level-title">
                    属性的简洁表示法
                </h2>
                <p className="code_chunk_desc">
                    ES6允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁
                </p>
                <Highlight className="code_chunk">
                    {
                        'let foo = "bar";\n'+
                        'let baz = {foo};\n'+
                        'console.log(baz); //{foo:"bar"}\n'+
                        '//等同于\n'+
                        'let baz = {foo:foo}'
                    }
                </Highlight>
                <p className="code_chunk_desc">
                    上面的列子可以表明，ES6允许在对象中直接写变量。这时属性名为变量名，属性值为变量值。下面是另一个例子
                </p>
                <Highlight className="code_chunk">
                    {
                        'function(x,y){\n'+
                        '    return {x,y}\n'+
                        '}\n'+
                        '//等同于\n'+
                        'function(x,y){\n'+
                        '    return {x:x,y:y}\n'+
                        '}\n'+
                        '\n'+
                        'var o = {\n'+
                        '    method(){\n'+
                        '        return "Hello"\n'+
                        '    }\n'+
                        '}\n'+
                        '//等同于\n'+
                        'let o = {\n'+
                        '    method:function(){\n'+
                        '        return "Hello"    \n'+
                        '    }\n'+
                        '}\n'
                    }
                </Highlight>

                <h2 data-anchor="attributeNameExpression" className="two-level-title">
                    属性名表达式
                </h2>
                <p className="code_chunk_des">
                    ES6允许字面量定义对象时，以表达式作为属性名，即把表达式放在方括号内。
                </p>
                <Highlight className="code_chunk">
                    {
                        'let proKey = "foo";\n'+
                        'let obj = {\n'+
                        '    [proKey]:"Jack"\n'+
                        '}\n'+
                        'console.log(obj.foo);//Jack\n'+
                        '\n'+
                        '//表达式还可以定义方法名\n'+
                        'let say = "say";\n'+
                        'let obj = {\n'+
                        '    [say+"Hello"] (){\n'+
                        '        return "hi"\n'+
                        '    }\n'+
                        '}\n'+
                        'console.log(obj.sayHello());//hi\n'
                    }
                </Highlight>
            </div>
        )
    }
}