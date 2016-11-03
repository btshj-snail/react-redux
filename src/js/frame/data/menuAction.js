/**
 * Created by snail on 2016/11/2.
 */

export const QUERY_ALL_MENU_LIST = 'QUERY_ALL_MENU_LIST';
export const QUERY_SUB_MENU_LIST = 'QUERY_SUB_MENU_LIST';
export const SET_SELECTED_MENU_ID = 'SET_SELECTED_MENU_ID';
export const SET_MENU_LIST = 'SET_MENU_LIST';

export function queryAllMenu(){
    return {
        type:QUERY_ALL_MENU_LIST
    }
}

export function querySubMenu(parentId){
    return {
        type:QUERY_SUB_MENU_LIST,
        parentId:parentId
    }
}
export function setSelectedMenuId(menuId){
    return {
        type:SET_SELECTED_MENU_ID,
        menuId:menuId
    }
}
export function setMenuList(menuList){
    return {
        type:SET_MENU_LIST,
        menuList
    }
}