/**
 * Created by snail on 2016/10/28.
 */
import React,{Component,PropTypes} from 'react';

export default class UserItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
           <li>
               <span>{this.props.name}</span><span>{this.props.age}</span><span>{this.props.sex}</span>
           </li>
        )
    }
}

UserItem.propTypes = {
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    sex:PropTypes.string.isRequired
}