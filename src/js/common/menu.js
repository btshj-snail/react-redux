/**
 * Created by runningSnail on 2016/10/30.
 */
import React,{Component,PropTypes} from 'react'
require('../../css/snailMenu.less')

export default class Menu extends Component{
    constructor(props){
        super(props);
        // <li className="snail_menu_item"><a>首页</a></li>
        // <li className="snail_menu_item"><a>规范</a></li>
        //     <li className="snail_menu_item snail_menu_item_selected"><a>组件</a></li>
        //     <li className="snail_menu_item"><a>模式</a></li>
        //     <li className="snail_menu_item"><a>实践</a></li>
    }

    handleClick(item){
        this.props.onclickMenuItem && this.props.onclickMenuItem(item.id,item.text);
    }

    render(){
        let self = this,
            menuClass = this.props.mode=="vertical"?"snail_menu snail_menu_vertical":"snail_menu",
            menuList = this.props.menuList.map((item)=>{
                let className = 'snail_menu_item';
                if(self.props.defaultSelectedId && item.id===self.props.defaultSelectedId){
                    className = className +" snail_menu_item_selected";
                }
                return  <li key={item.id} className={className} onClick={this.handleClick.bind(this,item)}><a>{item.text}</a></li>
             })
        return (
            <ul className={menuClass}>
                {menuList}
            </ul>
        )
    }
}

Menu.propTypes = {
    menuList:PropTypes.array.isRequired,
    defaultSelectedId:PropTypes.string,
}