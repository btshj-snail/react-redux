/**
 * Created by runningSnail on 2016/10/30.
 */
import React,{Component} from 'react'
require('../../css/snailMenu.css')

export default class Menu extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let menuClass = this.props.mode=="vertical"?"snail_menu snail_menu_vertical":"snail_menu";
        return (
            <ul className={menuClass}>
                <li className="snail_menu_item"><a>首页</a></li>
                <li className="snail_menu_item"><a>规范</a></li>
                <li className="snail_menu_item snail_menu_item_selected"><a>组件</a></li>
                <li className="snail_menu_item"><a>模式</a></li>
                <li className="snail_menu_item"><a>实践</a></li>
            </ul>
        )
    }
}