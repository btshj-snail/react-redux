/**
 * Created by snail on 2016/11/2.
 */
import {QUERY_ALL_MENU_LIST,QUERY_SUB_MENU_LIST,SET_MENU_LIST} from './menuAction';
import {combineReducers} from 'redux';

function querySubMenuList(data,parentId){
    if(data==null){data = []}
    for(let item of data){
        if(item.id==parentId){
            return item.items;
        }
    }
    return [];
}

function menuList(state=[],action){
    switch(action.type){
        case QUERY_ALL_MENU_LIST :
            return [...state];
        case QUERY_SUB_MENU_LIST  :
            return querySubMenuList(state,action.parentId);
        case SET_MENU_LIST :
            return [...action.menuList];
        default:return state;
    }
}

function menuListReducer(state={},action){
   return menuList(state.menuList,action)
}
function selectedMenuIdRender(state={},action){
    return selectedMenuId(state.selectedMenuId,action)
}
function selectedMenuId(state="",action){
    switch(action.type){
        case 'SET_SELECTED_MENU_ID':
            return action.menuId;
        default : return state;
    }
}

const menu = combineReducers({
    menuList:menuListReducer,
    selectedMenuId:selectedMenuIdRender,
})
export default menu;