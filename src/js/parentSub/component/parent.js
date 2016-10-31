/**
 * Created by snail on 2016/10/31.
 */
import React,{Component} from 'react';


export default class Parent extends Component{

    render() {
        return (
            <div style={{height:"400px",width:"400px",background:"red"}}>
                <div style={{height:"40px",width:"100%",background:"black"}}>title</div>
                <div style={{height:"360px",width:"100%"}}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}