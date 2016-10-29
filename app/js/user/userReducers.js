/**
 * Created by snail on 2016/10/28.
 */

import {ADD_USER,DELETE_USER,UPDATE_USER} from './userActions';


const initialState =  {userList:[{id:"1111",name:"jack",age:2,sex:"man"}]};


function addUser(state=[],action){
    return [
        ...state,
        action.user
    ]
}

function deleteUser(state=[],action){
    let ary = [...state];
    let id = action.id;
    return ary.filter((user)=>{
        return user.id!==id;
    })
}

function updateUser(state=[],action){
    let newUser = action.user;
   return  state.map((user)=>{
        if(user.id===newUser.id){
            return newUser;
        }
        return user;
    })
}

function userList (state=[],action){
    switch(action.type){
        case ADD_USER : return addUser(state,action);
        case DELETE_USER : return deleteUser(state,action);
        case UPDATE_USER : return updateUser(state,action);
        default:return state;
    }
}

function userReducer(state=[],action){
    return {
        userList:userList(state.userList,action)
    }
}


export default userReducer;