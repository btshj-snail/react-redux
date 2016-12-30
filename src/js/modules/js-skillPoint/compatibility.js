/**
 * Created by snail on 16-11-28.
 */


import React , {Component} from 'react';
import Highlight from 'react-highlight';

import snailUtils,{snailBusinessUtils} from '../../common/snailUtils'

export default class Compatibility extends Component{
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
                <h1 className="colorLight sub_container_head">js兼容性处理</h1>
                <div className="snail_panel">
                    <div className="snail_panel_content">
                       各大浏览器厂商对标准API支持的力度不同导致有些标准API 在某些版本浏览器上出现异常情况。以下则是开发和学习过程中遇到的兼容性的问题的集合，以及处理方法或方案。
                    </div>
                </div>

                <ul className="snail_content_nav">
                    <li className="snail_content_nav_item"><a href="#innerHTMLinnerText">innerHTML、innerText、textContent</a></li>
                    <li className="snail_content_nav_item"><a href="#">使用css属性选择器</a></li>
                    <li className="snail_content_nav_item"><a href="#">目前面临的问题</a></li>
                </ul>

                <h2 id="innerHTMLinnerText" className="two-level-title">
                    innerHTML、innerText
                </h2>
                <p className="code_chunk_desc">
                    innerText 该方法是dom对象的一个方法，其本意是获取或者设置该节点的文本信息。
                    innerHTML 该方法是dom对象的一个方法，其本意是获取或者设置该节点的信息（包括html标签）
                    textContent 该方法是dom对象的一个方法，其本意是获取或者设置该节点的文本信息。和innerText基本一致。

                    innerHTML是符合W3C标准的属性，而innerText只适用于IE浏览器，因此，尽可能地去使用innerHTML，而少用innerText，如果要输出不含HTML标签的内容，可以使用innerHTML取得包含HTML标签的内容后，再用正则表达式去除HTML标签。
                    但是textContent可以获取所有标签的文本信息，包括script标签，style标签。而innerText则不行。并且innerText不能获取用css隐藏的标签元素的文本信息，但是textContent则可以。
                    并且firefox不支持innerText，而ie8不支持textContent
                </p>

            </div>
        )
    }
}