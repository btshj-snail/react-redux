/**
 * Created by snail on 2016/10/29.
 */
import React, { Component } from 'react';
import PageHead from './component/pageHead';
import Menu from '../common/menu';

export default class FrameView extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="pageContainer">
                <PageHead/>
                <div className="main_wrapper">
                    <div className="main_wrapper-left">
                        <Menu mode="vertical" />
                    </div>
                    <div className="main_wrapper-right">
                        {this.props.children}
                    </div>

                </div>
            </div>
        )
    }
}