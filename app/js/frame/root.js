/**
 * Created by snail on 2016/10/29.
 */

import React, { Component,PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory,IndexRoute } from 'react-router';
import UserView from '../user/userView'
import WelcomeView from './welcomeView'
import FrameView from './frameView'


class Root extends Component{
    render(){
        return (
            <Provider store={this.props.store}>
                <Router history={hashHistory}>
                    <Route path="/" component={FrameView} >
                        <IndexRoute component={WelcomeView} />
                        <Route path="/welcome" component={WelcomeView} />
                        <Route path="/user" component={UserView} />
                    </Route>
                </Router>
            </Provider>
        )

    }
}


Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;