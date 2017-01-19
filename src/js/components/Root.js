import React, {Component} from 'react';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';

import App from './App';

// auth
import Login from './auth/Login';
import Logout from './auth/Logout';
import Signup from './auth/Signup';

// post
import NewPost from './post/NewPost';
import DetailPost from './post/DetailPost';

export default class Root extends Component {
    render(){
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/logout" component={Logout}/>

                    <Route path="/new" component={NewPost}/>
                    <Route path="/post/:key" component={DetailPost}/>
                </Route>
            </Router>
        );
    }
}
