/**
 * Created by runningSnail on 2016/10/30.
 */

import React,{Component} from 'react';
import snailUtils from '../../common/snailUtils';

export default class PageFooter extends Component{
    constructor(props){
        super(props);
        this.state = {
            className:"page_footer"
        }
        this.timer = null
    }
    choseClassName(){
        let sHeight = document.documentElement.clientHeight;
        let headHeight = document.getElementById("pageHead").clientHeight;
        let contentHeight = document.getElementById("mainWrapper").clientHeight;
        snailUtils.debug(`可見區域高度：${sHeight},頭部高度：${headHeight},內容高度：${contentHeight}`);
        let className = sHeight>(headHeight+contentHeight)?"page_footer":"page_footer page_footer_no_absolute";
        this.setState({className:className});
    }
    componentDidMount(){
       let self = this;
        self.choseClassName();
        snailUtils.addEvent(window,'resize',()=>{
            self.timer && clearTimeout(self.timer);
            self.timer = setTimeout(()=>{
                self.choseClassName();
            },300)
        })



    }
    render(){
        let systemInfo = this.props.systemInfo;
        let version  = !!systemInfo && !!systemInfo.version ? systemInfo.version : "";
        return (
            <footer  className={this.state.className}>
               <div className="page_footer_content"> <span className="page_footer_content_text">© 2016 Snail Group </span> <span className="page_footer_content_text"> Version：{} </span><span className="page_footer_content_text page_footer_content_text_right"><a href="https://github.com/btshj"> gitHub:https://github.com/btshj </a></span></div>
            </footer>
        )
    }
}