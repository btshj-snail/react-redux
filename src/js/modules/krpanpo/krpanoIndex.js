/**
 * Created by snail on 2016/11/21.
 */

import React , {Component} from 'react';


require('../../../css/krpano.less');
export default class Krpano extends  Component{

    componentDidMount(){
        embedpano({
            swf:"/third_component/krpanpo/player.swf",
            xml:"/third_component/krpanpo/videopano.xml",
            target:"pano",
            html5:"auto",
            passQueryParameters:true,
            onready:function(krpano){
                console.log(krpano);
            }
        });
    }


    render(){
        return (
            <div>
                <div id="pano" className="playerView">

                </div>
            </div>
        )
    }
}