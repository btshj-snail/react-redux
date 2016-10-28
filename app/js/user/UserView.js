/**
 * Created by snail on 2016/10/28.
 */
import React, {Component, PropTypes} from 'react';

import {connect} from 'react-redux'

import {addUser, deleteUser, updateUser} from './userActions';

import AddUser from './component/addUser'
import UserList from './component/userList'

 class UserView extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {dispatch,userList} = this.props;
        return (
            <div>
            <AddUser
                onAddClick = {user=>{
                    dispatch(addUser(user));
                }}
            />
                {userList!=null && userList.length==0?<UserList
                    userList = {userList}
                />:null}
        </div>
        )
    }
}
UserView.propTypes={
}

function select(state){
    return {
        userList:state.userList
    }
}

export default connect(select)(UserView)
