/**
 * Created by snail on 2016/10/28.
 */

export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const QUERY_ALL_USER = 'QUERY_ALL_USER';


/**
 * 新增
 * @param user
 * @returns {{type: string, user: *}}
 */
export function addUser(user){
    return {
        type:ADD_USER,
        user,
    }
}

export function deleteUser(id){
    return {
        type:DELETE_USER,
        id,
    }
}

export function updateUser(user){
    return {
        type:UPDATE_USER,
        user,
    }
}