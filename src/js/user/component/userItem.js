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
           <tr id={this.props.id}>
               <td>{this.props.name}</td>
               <td>{this.props.age}</td>
               <td>{this.props.sex}</td>
               <td><a href="javaScript:void(0)" onClick={this.props.onClickDelete.bind(this,this.props.id)}>delete</a></td>
           </tr>
        )
    }
}

UserItem.propTypes = {
    id:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    sex:PropTypes.string.isRequired
}