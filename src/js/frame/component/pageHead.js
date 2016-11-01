/**
 * Created by runningSnail on 2016/10/30.
 */

import React,{Component} from 'react';
import Menu from '../../common/menu'

export default class PageHead extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id="pageHead" className="pageHead">
                <div className="siteInfo">
                    <img className="siteInfo_logo" src={require('../../../imgs/logo.png')}/>
                    <span className="siteInfo_siteName">the note of snail</span>
                </div>
                <div className="siteToolbar">
                    <div className="site_nav">
                        <Menu/>
                    </div>
                </div>
            </div>
        )
    }
}