/**
 * Created by snail on 2016/10/28.
 */
import React ,{Component} from  'react'
import UserItem from './userItem';

export default class UserList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <ul>
                    {
                        this.props.userList.map(item=>{
                            <UserItem name={item.name} age={item.age} sex={item.sex}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}