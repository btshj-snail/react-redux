/**
 * Created by snail on 16-11-29.
 */

import React , {Component} from 'react';
import Highlight from 'react-highlight';

export default class Es6DestructionView extends Component{

    componentDidMount(){
        let doms = document.querySelectorAll('a[data-skip-anchor]');
        for(let dom of doms){
            dom.onclick = (event)=>{
                let anchor = dom.dataset.skipAnchor;
                if(!!anchor){
                   let targetDom =  document.querySelector(`[data-anchor=${anchor}]`);
                    if(targetDom){
                       window.scrollTo(0,200)
                    }
                }
            }
        }

    }



    render(){
        return (
            <div>
                <h1 className="colorLight sub_container_head">ES6-解构</h1>
                <div className="snail_panel">
                    <div className="snail_panel_content">
                        ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

                    </div>
                </div>

                <ul className="snail_content_nav">
                    <li className="snail_content_nav_item"><a href="javaScript:void(0)" data-skip-anchor="baseUse">基本用法</a></li>
                    <li className="snail_content_nav_item"><a href="#">使用css属性选择器</a></li>
                    <li className="snail_content_nav_item"><a href="#">目前面临的问题</a></li>
                </ul>

                <h2 data-anchor="baseUse" className="two-level-title">
                    基本用法
                </h2>
                <Highlight className="code_chunk">
                    {
                        '\<div\>\n'+
                        '    \<div id="name" data-user-name="jack"\>\</div\>\n'+
                        '\</div\>\n'
                    }
                </Highlight>
                <p className="code_chunk_desc">
                    本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。下面是一些使用嵌套数组进行解构的例子。
                </p>
                <h2 id="newCreateObject" className="two-level-title">
                    使用css属性选择器
                </h2>
                <Highlight className="code_chunk">
                    {
                        'div[data-user-name="jack"]{\n' +
                        'color:red;\n' +
                        '}\n'
                    }
                </Highlight>
                <p className="code_chunk_desc">
                    通过标签选择器和属性选择器，我们就能访问到第二个div，并且将其里面的文本内容字体颜色变为红色。
                </p>

                <h2 data-anchor="baseUse1" id="newCreateObject" className="two-level-title">
                    使用css属性选择器
                </h2>
                <Highlight className="code_chunk">
                    {
                        'let dom = document.getElementById("name");\n'+
                        'dom.dataset.userName = "snail"\n'
                    }
                </Highlight>
                <p className="code_chunk_desc">
                    通过id选择器，查找到第二个div，并且将第二个div中的自定义属性值改为snail。
                </p>
            </div>
        )
    }


}