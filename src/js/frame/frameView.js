/**
 * Created by snail on 2016/10/29.
 */
import React, { Component } from 'react';
import PageHead from './component/pageHead';
import Menu, { MenuItem, Divider, SubMenu, ItemGroup } from 'rc-menu';
require('../../css/snailMenu.css')


export default class FrameView extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="pageContainer">
                <PageHead/>
                <div className="main_wrapper main_wrapper_media">
                    <div className="main_wrapper_left">
                        <Menu mode="inline">
                            <SubMenu title="首页">
                                <MenuItem>简书</MenuItem>
                                <MenuItem>规划</MenuItem>
                            </SubMenu>
                            <SubMenu title="React">
                                <MenuItem>webpack配置</MenuItem>

                                <SubMenu title="Redux">
                                    <MenuItem>redux理解</MenuItem>
                                    <MenuItem>redux流程</MenuItem>
                                    <MenuItem>redux示例</MenuItem>
                                </SubMenu>

                            </SubMenu>

                            <SubMenu title="ES6">
                                <MenuItem>解构</MenuItem>
                                <MenuItem>对象</MenuItem>
                                <MenuItem>迭代器</MenuItem>
                            </SubMenu>
                            <SubMenu title="CSS3">
                                <MenuItem>解构</MenuItem>
                                <MenuItem>对象</MenuItem>
                                <MenuItem>迭代器</MenuItem>
                            </SubMenu>
                            <SubMenu title="js其他技术点">
                                <MenuItem>技术点尝试</MenuItem>
                                <MenuItem>技术点理解</MenuItem>
                            </SubMenu>
                            <SubMenu title="css技术点">
                                <MenuItem>技术点尝试</MenuItem>
                                <MenuItem>技术点理解</MenuItem>
                            </SubMenu>
                        </Menu>
                    </div>
                    <div className="main_wrapper_right" style={{height:"900px"}}>
                        {this.props.children}
                    </div>

                </div>
            </div>
        )
    }
}