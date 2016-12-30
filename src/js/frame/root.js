/**
 * Created by snail on 2016/10/29.
 */

import React, { Component,PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory,IndexRoute } from 'react-router';
import ParentSub from '../parentSub/parentSubView'
import TextToFunction from '../skillPoint/textToFunction'
import WelcomeView from './welcomeView'
import FrameView from './frameView'
import NotDevelopView from './notDevelop';

import ReactIntroduceView from '../modules/react/react-introduce';
import ES6View from '../modules/es6/es6';
import Es6ClassView from '../modules/es6/es6-class';
import Es6DestructionView from '../modules/es6/es6-destruction';
import Es6String from '../modules/es6/es6-string';
import Es6Array from '../modules/es6/es6-array';
import Css3View from '../modules/css3/css3';
import JsSkillPointView from '../modules/js-skillPoint/js_skillPoint';
import Compatibility from '../modules/js-skillPoint/compatibility';
import Krpano from '../modules/krpanpo/krpanoIndex';
import CustomAttribute from '../modules/js-skillPoint/customAttribute';
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
                        <Route path="/es6Destruction" component={Es6DestructionView} />
                        <Route path="/es6String" component={Es6String} />
                        <Route path="/es6Array" component={Es6Array} />
                        <Route path="/css3" component={Css3View} />
                        <Route path="/jsSkillPoint" component={JsSkillPointView} />
                        <Route path="/compatibility" component={Compatibility} />
                        <Route path="/krpano" component={Krpano} />
                        <Route path="/customAttribute" component={CustomAttribute} />
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