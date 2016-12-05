/**
 * Created by snail on 16-11-28.
 */


import React , {Component} from 'react';
import Highlight from 'react-highlight';

import snailUtils,{snailBusinessUtils} from '../../common/snailUtils'

export default class CustomAttribute extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        snailBusinessUtils.overflow2ElPosition();
    }

    render(){
        return (
            <div>
                <h1 className="colorLight sub_container_head">html5下的标签自定义属性</h1>
                <div className="snail_panel">
                    <div className="snail_panel_content">
                        在html5之前，标签自定义属性非常随意。在hmlt5中，定义标签的属性则必须按照指定的规则来进行，否则虽然浏览器不会报错，但是css的属性选择器，以及js获取属性值就会出现异常。
                        在html5 中，定义标签自定义属性，必须以data-开头，并且单词与单词之间用-连接。比如，data-user-name。在css的属性选择器中，则需要[data-user-name='jack']这样进行获取，
                        在js中，标签自定义属性的信息则是保存在dataset中，并且去掉-，使用驼峰命名的方式表示自定义属性。比如：dom.dataset.userName。
                    </div>
                </div>

                <ul className="snail_content_nav">
                    <li className="snail_content_nav_item"><a href="#oldCreateObject">自定义标签属性</a></li>
                    <li className="snail_content_nav_item"><a href="#">使用css属性选择器</a></li>
                    <li className="snail_content_nav_item"><a href="#">目前面临的问题</a></li>
                </ul>

                <h2 id="oldCreateObject" className="two-level-title">
                    自定义标签属性
                </h2>
                <Highlight className="code_chunk">
                    {
                        '\<div\>\n'+
                        '    \<div id="name" data-user-name="jack"\>\</div\>\n'+
                        '\</div\>\n'
                    }
                </Highlight>
                <p className="code_chunk_desc">
                    这里在第二个div标签中，增加了一个叫做data-user-name的自定义属性，并且赋值为jack
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

                <h2 id="newCreateObject" className="two-level-title">
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