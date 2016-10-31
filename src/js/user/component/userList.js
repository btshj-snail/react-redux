/**
 * Created by snail on 2016/10/28.
 */
import React ,{Component} from  'react'
import UserItem from './userItem';

export default class UserList extends Component{
    constructor(props){
        super(props);
    }
    handleOnclickDeleteRow(id){
        this.props.onClickDeleteRow(id);
    }


    render(){
        let userItems = this.props.userList.map(item=>{
            return <UserItem onClickDelete={this.handleOnclickDeleteRow.bind(this)} key={item.id} id={item.id} name={item.name} age={parseInt(item.age)} sex={item.sex}/>
        });
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>sex</th>
                    </tr>

                    {
                        userItems
                    }
                    </tbody>

                </table>
            </div>
        )
    }
}