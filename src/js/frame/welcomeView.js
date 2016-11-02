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
        return(
            <div>
                <h1 className="colorLight">Snail Home</h1>
                <img className="welcome_img" src={require('../../imgs/welcome.png')} />
                <div className="welcome_text">
                    本网站立志于记录在工作和学习过程中，学到的有关web前端的各种知识点、技巧、思想。也是对所学到的知识的尝试地。

                    本网站使用react框架作为UI层，redux作为数据控制层，webpack作为打包编译工具。在1.0.0版本中，本网站只是一个静态网站，再后期根据时间再使用nodeJs编写后台服务。
                </div>
            </div>
        )
    }
}