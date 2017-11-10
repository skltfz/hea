import React from "react";
// import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Game from "./ctrl/Game";
import AboutUs from "./ctrl/AboutUs";
import MyProfile from "./ctrl/MyProfile";
import Home from "./ctrl/Home";

import MainMenu from "./view/MainMenu"
import {Switch, Route} from 'react-router-dom'

require("!style-loader!css-loader!sass-loader!../scss/App.scss");

const reactLogo = require('./react_logo.svg');
const MainRoute = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/game' component={Game}/>
            <Route path='/aboutus' component={AboutUs}/>
            <Route path='/myprofile' component={MyProfile}/>
        </Switch>
    </div>
)
class App extends React.Component {
    render() {
        return (
            <div>
                <MainMenu/> {this.props.children}
                {/* <Footer /> */}
                <MainRoute/>
            </div>
        );
    }
}

export default App;