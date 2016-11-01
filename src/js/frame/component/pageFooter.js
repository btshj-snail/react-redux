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
        return (
            <footer  className={this.state.className}>
               <div className="page_footer_content"> © 2016 Snail Group ; Version：1.0.0 ; gitHub:https://github.com/btshj</div>
            </footer>
        )
    }
}