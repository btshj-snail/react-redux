/**
 * Created by snail on 2016/10/29.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {setSelectedMenuId} from './data/menuAction'

import PageHead from './component/pageHead';
import PageFooter from './component/pageFooter';
import PageRightMenu from './component/pageRightMenu.js';



 class FrameView extends Component{
    constructor(props){
        super(props);
    }
     handleClickMenuItem(id,text){
         this.props.dispatch(setSelectedMenuId(id));
     }

    render(){
        let {dispatch,menu} = this.props;
        let {menuList,selectedMenuId} = menu;
        let subMenuList = menuList.filter((item)=>{
            if(item.id==selectedMenuId){
                return item;
            }
        });
        subMenuList = subMenuList.length==0?menuList:subMenuList;
        let subMenuOpenkeys = subMenuList.length>0?[subMenuList[0].id]:null;
        return (
            <div className="pageContainer">
                <PageHead menuList = {menuList} defaultSelectedId={selectedMenuId} onClickMenuItem={this.handleClickMenuItem.bind(this)}/>
                <div id="mainWrapper" className="main_wrapper main_wrapper_media">
                    <div className="main_wrapper_left">
                        <PageRightMenu menuList={subMenuList} openkeys={subMenuOpenkeys}/>
                    </div>
                    <div className="main_wrapper_right" style={{height:"900px"}}>
                        {this.props.children}
                    </div>

                </div>
                <PageFooter/>
            </div>
        )
    }
}

function select(state){
    return {
        menu:state.menu
    }
}
export default connect(select)(FrameView)