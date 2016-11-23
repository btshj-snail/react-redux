/**
 * Created by snail on 2016/10/29.
 */

import React, { Component,PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory,IndexRoute } from 'react-router';
import ParentSub from '../parentSub/parentSubView'
import TextToFunction from '../skillPoint/textToFunction'
import UserView from '../user/userView'
import WelcomeView from './welcomeView'
import FrameView from './frameView'
import NotDevelopView from './notDevelop';

import ReactIntroduceView from '../modules/react/react-introduce';
import ES6View from '../modules/es6/es6';
import Es6ClassView from '../modules/es6/es6-class';
import Css3View from '../modules/css3/css3';
import JsSkillPointView from '../modules/js-skillPoint/js_skillPoint';
import Krpano from '../modules/krpanpo/krpanoIndex.js';
import CssSkillPointView from '../modules/css-skillPoint/css_skillPoint';
import IntroduceView from '../modules/siteIntroduce/introduce';




class Root extends Component{
    render(){
        return (
            <Provider store={this.props.store}>
                <Router history={hashHistory}>
                    <Route path="/" component={FrameView} >
                        <IndexRoute component={WelcomeView} />
                        <Route path="/welcome" component={WelcomeView} />
                        <Route path="/notDevelop" component={NotDevelopView} />
                        <Route path="/siteIntroduce" component={IntroduceView} />
                        <Route path="/react" component={ReactIntroduceView} />
                        <Route path="/es6" component={ES6View} />
                        <Route path="/es6Class" component={Es6ClassView} />
                        <Route path="/css3" component={Css3View} />
                        <Route path="/jsSkillPoint" component={JsSkillPointView} />
                        <Route path="/krpano" component={Krpano} />
                        <Route path="/cssSkillPoint" component={CssSkillPointView} />
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