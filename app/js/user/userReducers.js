/**
 * Created by snail on 2016/10/28.
 */
import {combineReducers} from 'redux';

import {ADD_USER,DELETE_USER,UPDATE_USER} from './userActions';


const initialState =  [{name:2,age:2,sex:"man"}];


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

function userList (state=initialState,action){
    switch(action.type){
        case ADD_USER : return addUser(state,action);
        case DELETE_USER : return deleteUser(state,action);
        case UPDATE_USER : return updateUser(state,action);
        default:return state;
    }
}

const userReducer = combineReducers({
    userList
})

export default userReducer;