/**
 * Created by snail on 2016/11/2.
 */
import React, {Component,PropTypes} from 'react';
import Menu, {MenuItem, Divider, SubMenu, ItemGroup} from 'rc-menu';
import {Link} from 'react-router';

import snailUtils from '../../common/snailUtils'
require('../../../css/snailMenu.less')

export default  class PageRightMenu extends Component {
    constructor(props){
        super(props);
        let o = !this.props.openkeys?[]:Array.isArray(this.props.openkeys)?this.props.openkeys:[this.props.openkeys];
        this.state = {
            openkeys:o
        }
    }
    loop(list){
        let self = this;
        return  list.map((item)=>{
            if(item.items && item.items.length>0){
                let ary = self.loop(item.items);
                return <SubMenu key={item.id} title={item.text}>{ary}</SubMenu>
            }else if((!item.items || item.items.length==0) && item.path){

                return <MenuItem key={item.id}><Link to={item.path?item.path:""}>{item.text}</Link></MenuItem>
            }else{
                return <MenuItem key={item.id}>{item.text}</MenuItem>
            }
        })
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.openkeys!=null && Array.isArray(nextProps.openkeys)){
            if(this.props.openkeys==null || !snailUtils.isArrayEqual(nextProps.openkeys,this.props.openkeys) ){
                this.setState({openkeys:!nextProps.openkeys?[]:Array.isArray(nextProps.openkeys)?nextProps.openkeys:[nextProps.openkeys]});
            }
        }


    }

    handleOpenChange(openKeys){
        this.setState({openkeys:openKeys});
    }

    render() {
        let ary = this.loop(this.props.menuList);
        return (
            <Menu mode="inline" openKeys={this.state.openkeys} onOpenChange={this.handleOpenChange.bind(this)}>
                {ary}
            </Menu>
        )
    }
}

PageRightMenu.propTypes = {
    openkeys:PropTypes.array
}

// <SubMenu title="首页">
//     <MenuItem><Link to="/siteIntroduce">简书</Link></MenuItem>
//     <MenuItem><Link to="/notDevelop">规划</Link></MenuItem>
// </SubMenu>
// <SubMenu title="React">
//     <MenuItem><Link to="/react">webpack配置</Link></MenuItem>
//
//     <SubMenu title="Redux">
//     <MenuItem><Link to="/notDevelop">redux理解</Link></MenuItem>
//     <MenuItem><Link to="/notDevelop">redux流程</Link></MenuItem>
//     <MenuItem><Link to="/notDevelop">redux示例</Link></MenuItem>
//     </SubMenu>
//
//     </SubMenu>
//
//     <SubMenu title="ES6">
//     <MenuItem><Link to="/es6">解构</Link></MenuItem>
//     <MenuItem><Link to="/notDevelop">对象</Link></MenuItem>
//     <MenuItem><Link to="/notDevelop">迭代器</Link></MenuItem>
//     </SubMenu>
//     <SubMenu title="CSS3">
//     <MenuItem><Link to="/css3">解构</Link></MenuItem>
//     <MenuItem><Link to="/notDevelop">对象</Link></MenuItem>
//     <MenuItem><Link to="/notDevelop">迭代器</Link></MenuItem>
//     </SubMenu>
//     <SubMenu title="js其他技术点">
//     <MenuItem><Link to="/jsSkillPoint">技术点尝试</Link></MenuItem>
//     <MenuItem><Link to="/notDevelop">技术点理解</Link></MenuItem>
//     </SubMenu>
//     <SubMenu title="css技术点">
//     <MenuItem><Link to="/cssSkillPoint">技术点尝试</Link></MenuItem>
//     <MenuItem><Link to="/notDevelop">技术点理解</Link></MenuItem>
//     </SubMenu>
