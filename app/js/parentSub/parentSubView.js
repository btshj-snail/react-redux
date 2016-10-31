/**
 * Created by snail on 2016/10/31.
 */


import React ,{Component} from 'react';
import Parent from './component/parent'
import Sub from './component/sub'

export default  class ParentSubView extends Component{


    render() {
        return (
            <div style={{width:"500px",height:"600px"}}>
                <Parent>
                    <Sub/>
                </Parent>
            </div>
        )
    }

}