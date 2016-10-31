/**
 * Created by snail on 2016/10/31.
 */
import React , {Component} from 'react';
import ReactDOM from 'react-dom';

export default  class TextToFunction extends Component{
constructor(props){
    super(props)
    this.state={
        val:'{\n' +
        '"name":"Jack",\n' +
        '"done":function(){\nalert(1);\n}\n'+
        '}\n',
        showPre:true,
    }
}
    textToFunction (text){
        let json = (new Function("","return "+text))();
        return json;
    }
    openPre(){
        this.setState({showPre:true})
    }
    closePre(){
        this.setState({showPre:false})
    }
    handleClickDoJSON(){
        let node = this.refs.textarea;
        let value = ReactDOM.findDOMNode(node).value;
        if(!!value){
            this.openPre();
            this.setState({val:value})
        }
    }
    handleDoubleClickPre(){
        this.closePre();
    }
    render(){
        let json  = this.textToFunction(this.state.val);
        return (
            <div>
                {this.state.showPre? <pre onDoubleClick={this.handleDoubleClickPre.bind(this)}>{this.state.val}</pre>:<textarea ref="textarea"  style={{height:"200px",width:"200px"}} defaultValue={this.state.val}/>}
                <button onClick={this.handleClickDoJSON.bind(this)}>do it</button>
                <div onClick={json.done.bind(this)}>done</div>
            </div>
        )
    }
}