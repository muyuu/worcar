import React, {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router';

import {action, store} from '../dispatcher/dispatcher';

// auth
import Login from './auth/Login.jsx';
import Logout from './auth/Logout.jsx';
import Signup from './auth/Signup.jsx';

// layout
import Layout from './Layout.jsx';

export default class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLogin: false,
        };

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                this.setState({isLogin: true});
            } else {
                this.setState({isLogin: false});
            }
        });
    }


    render(){
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Layout}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <Route path="/logout" component={Logout}/>
            </Router>
        );
    }
}
