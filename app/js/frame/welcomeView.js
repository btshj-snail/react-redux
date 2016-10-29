/**
 * Created by snail on 2016/10/29.
 */

import React,{Component} from 'react';
import {Link} from 'react-router'

export default class WelcomeView extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<div>
            <ul role="nav">
                <li><Link to="/welcome" activeStyle={{color: 'red'}}>welcome</Link></li>
                <li><Link to="/user" activeStyle={{color: 'red'}}>user</Link></li>
            </ul>
        </div>)
    }
}