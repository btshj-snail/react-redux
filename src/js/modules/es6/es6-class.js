/**
 * Created by runningSnail on 2016/11/22.
 */

import React,{Component} from 'react';

export default class Es6ClassView extends Component{
    constructor(props){
        super(props);
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
                        <li className="snail_content_nav_item"><a href="#">目前面临的问题</a></li>
                        <li className="snail_content_nav_item"><a href="#">目前面临的问题</a></li>
                        <li className="snail_content_nav_item"><a href="#">目前面临的问题</a></li>
                    </ul>
            </div>
        )
    }
}