/**
 * Created by snail on 2016/11/22.
 */

import React,{Component} from 'react';

export default class KrpanoOfficialExample extends Component{

    componentDidMount(){
        // embedpano({
        //     swf:"/third_component/krpanpo/player.swf",
        //     xml:"/third_component/krpanpo/videopano.xml",
        //     target:"pano",
        //     html5:"auto",
        //     passQueryParameters:true,
        //     onready:function(krpano){
        //         console.log(krpano);
        //     }
        // });

        embedpano({xml:"/third_component/krpanpoOfficialExample/example.xml", swf:"/third_component/krpanpo/player.swf", target:"pano", html5:"false", mobilescale:1.0, passQueryParameters:true});
    }


    render(){
        return (
            <div id="pano" style={{width:'100%',height:'600px'}}>

            </div>
        )
    }
}