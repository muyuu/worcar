import React, {Component} from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

// app
import App from './App';

// auth
import Login from './auth/Login';
import Logout from './auth/Logout';
import Signup from './auth/Signup';

// layout
import Layout from './Layout';


export default class Root extends Component {
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
