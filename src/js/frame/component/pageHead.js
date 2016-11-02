/**
 * Created by runningSnail on 2016/10/30.
 */

import React,{Component,PropTypes} from 'react';
import snailUtils from '../../common/snailUtils'
import Menu from '../../common/menu'

export default class PageHead extends Component{
    constructor(props){
        super(props);
    }
    handleClickMenuItem(id,text){
        this.props.onClickMenuItem && this.props.onClickMenuItem(id,text)
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
                        <Menu menuList={this.props.menuList} defaultSelectedId={this.props.defaultSelectedId} onclickMenuItem={this.handleClickMenuItem.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}

PageHead.propTypes = {
    menuList:PropTypes.array.isRequired,
    onClickMenuItem:PropTypes.func,
    defaultSelectedId:PropTypes.string
}