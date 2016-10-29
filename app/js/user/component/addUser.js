/**
 * Created by snail on 2016/10/28.
 */

import React,{Component,PropTypes} from 'react';
import snailUtils from '../../common/snailUtils';

export default  class AddUser extends Component{
    constructor(props){
        super(props);
    }
    handleClickAdd(){
        let id = snailUtils.getRandomStr();

        const nameNode = this.refs.name;
        const name = nameNode.value.trim();

        const ageNode = this.refs.age;
        const age = ageNode.value.trim();

        const sexNode = this.refs.sex;
        const sex = sexNode.value.trim();

        this.props.onAddClick({id,name,age,sex});
    }
    render(){
        return (
            <div>
                <p>姓名：</p>
                <input ref="name"/>

                <p>年龄：</p>
                <input ref="age"/>

                <p>性别：</p>
                <select ref="sex">
                    <option value="man">男</option>
                    <option value="woman">女</option>
                </select>
                <button onClick={this.handleClickAdd.bind(this)}>新增</button>
            </div>
        )
    }
}