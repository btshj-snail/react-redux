/**
 * Created by snail on 2016/10/29.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'

import snailUtils from '../common/snailUtils';

import {setSelectedMenuId,setMenuList} from './data/menuAction'
import {fetchJsonFile} from './data/loadDataAction'
import {setSystemInfo} from './data/systemInfoAction'

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

     componentDidMount(){
         let self = this;
         let promise = this.props.dispatch(fetchJsonFile(snailUtils.basePath()+"/data/menuList.json"));
         promise.then((json)=>{
             snailUtils.debug(json.menuList);
             self.props.dispatch(setMenuList(json.menuList));
         }).then(()=>{
             return self.props.dispatch(fetchJsonFile(snailUtils.basePath()+"/package.json"));
         }).then((json)=>{
             snailUtils.debug(`请求系统信息：%o`,json);
             self.props.dispatch(setSystemInfo(json));
         })
     }

    render(){
        let {dispatch,menu,systemInfo} = this.props;
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
                    <div className="main_wrapper_left" style={{minHeight:document.documentElement.clientHeight-80-50-24-24-24}}>
                        <PageRightMenu menuList={subMenuList} openkeys={subMenuOpenkeys}/>
                    </div>
                    <div className="main_wrapper_right" style={{minHeight:document.documentElement.clientHeight-80-50-24-24-24}}>
                        {this.props.children}
                    </div>

                </div>
                <PageFooter systemInfo={systemInfo}/>
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