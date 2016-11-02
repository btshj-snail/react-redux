/**
 * Created by snail on 2016/11/2.
 */
import {QUERY_ALL_MENU_LIST,QUERY_SUB_MENU_LIST} from './menuAction';
import {combineReducers} from 'redux';
const initMenuList = [
    {id:"1",text:"首页",path:'',items:[
        {id:"1-1",text:'简书',path:'/welcome',items:[]},
        {id:"1-2",text:'规划',path:'/siteIntroduce',items:[]},
    ]},
    {id:"2",text:"React",path:'',items:[
        {id:"2-1",text:'webPack配置',path:'/react',items:[]},
        {id:"2-2",text:'Redux',path:'/notDevelop',items:[
            {id:'2-2-1',text:'Redux理解',path:'/notDevelop',items:[]},
            {id:'2-2-2',text:'Redux流程',path:'/notDevelop',items:[]},
            {id:'2-2-3',text:'Redux示例',path:'/notDevelop',items:[]},
        ]},
    ]},
    {id:"3",text:"ES6",path:'',items:[
        {id:"3-1",text:'解构',path:'/es6',items:[]},
        {id:"3-2",text:'对象',path:'/notDevelop',items:[]},
        {id:"3-3",text:'迭代器',path:'/notDevelop',items:[]},
    ]},
    {id:"4",text:"CSS3",path:'',items:[
        {id:"4-1",text:'解构',path:'/css3',items:[]},
        {id:"4-2",text:'对象',path:'/notDevelop',items:[]},
        {id:"4-3",text:'迭代器',path:'/notDevelop',items:[]},
    ]},
    {id:"5",text:"JS其他技术",path:'',items:[
        {id:"5-1",text:'解构',path:'/jsSkillPoint',items:[]},
        {id:"5-2",text:'对象',path:'/notDevelop',items:[]},
        {id:"5-3",text:'迭代器',path:'/notDevelop',items:[]},
    ]},
    {id:"6",text:"CSS其他技术",path:'',items:[
        {id:"6-1",text:'解构',path:'/cssSkillPoint',items:[]},
        {id:"6-2",text:'对象',path:'/notDevelop',items:[]},
        {id:"6-3",text:'迭代器',path:'/notDevelop',items:[]},
    ]},
]
function querySubMenuList(data,parentId){
    if(data==null){data = []}
    for(let item of data){
        if(item.id==parentId){
            return item.items;
        }
    }
    return [];
}

function menuList(state=initMenuList,action){
    switch(action.type){
        case QUERY_ALL_MENU_LIST :
            return [...state];
        case QUERY_SUB_MENU_LIST  :
            return querySubMenuList(state,action.parentId);
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