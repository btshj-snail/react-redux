/**
 * Created by snail on 2016/10/29.
 */
import React, { Component } from 'react';

export default class FrameView extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="pageContainer">
            <div className="pageHead">11</div>
            <div id="react-content">
            {this.props.children}
             </div>
                </div>
        )
    }
}