import React, {Component} from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import {action, store} from '../dispatcher/dispatcher';


// app
import App from './App.jsx';

// auth
import Login from './auth/Login.jsx';
import Logout from './auth/Logout.jsx';
import Signup from './auth/Signup.jsx';

// layout
import Layout from './Layout.jsx';


export default class Root extends Component {
    constructor(props){
        super(props);

        this.state = {
        };
    }


    render(){
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Layout} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/logout" component={Logout} />
                </Route>
            </Router>
        );
    }
}
