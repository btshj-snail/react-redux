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
    getDomHeight(dom){
       let height =  typeof dom.height =='string' && dom.height.indexOf("px")!=-1 ? Number(dom.height.replace("px","")):dom.height;
        height +=  typeof dom.marginBottom =='string' && dom.marginBottom.indexOf("px")!=-1 ? Number(dom.marginBottom.replace("px","")):dom.marginBottom;
        height +=  typeof dom.marginTop =='string' && dom.marginTop.indexOf("px")!=-1 ? Number(dom.marginTop.replace("px","")):dom.marginTop;
        height +=  typeof dom.paddingTop =='string' && dom.paddingTop.indexOf("px")!=-1 ? Number(dom.paddingTop.replace("px","")):dom.paddingTop;
        height +=  typeof dom.paddingBottom =='string' && dom.paddingBottom.indexOf("px")!=-1 ? Number(dom.paddingBottom.replace("px","")):dom.paddingBottom;
return height;
    }
    choseClassName(){
        let sHeight = document.documentElement.clientHeight;

        let headDom = document.getElementById("pageHead");
        let headHeight = this.getDomHeight(headDom);
        let contentDom = document.getElementById("mainWrapper");
        let contentHeight = this.getDomHeight(contentDom);
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
        snailUtils.debug(systemInfo)
        let version  = !!systemInfo && !!systemInfo.version ? systemInfo.version : "";
        return (
            <footer  className={this.state.className}>
               <div className="page_footer_content"> <span className="page_footer_content_text">© 2016 Snail Group </span> <span className="page_footer_content_text"> Version：{version} </span><span className="page_footer_content_text page_footer_content_text_right"><a href="https://github.com/btshj"> gitHub:https://github.com/btshj </a></span></div>
            </footer>
        )
    }
}