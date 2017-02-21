import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';
import App from './App';

// auth
import Login from './auth/Login';
import Logout from './auth/Logout';
import Signup from './auth/Signup';

// post
import NewPost from './post/NewPost';
import DetailPost from './post/DetailPost';
import EditPost from './post/EditPost';

// register keyboard shortcut
import keymap from '../keymaps';
import {ShortcutManager} from 'react-shortcuts';
const shortcutManager = new ShortcutManager(keymap);

export default class Root extends Component {
    getChildContext(){
        return { shortcuts: shortcutManager };
    }

    render(){
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/logout" component={Logout}/>

                    <Route path="/new" component={NewPost}/>
                    <Route path="/post/:slug" component={DetailPost}/>
                    <Route path="/post/:slug/edit" component={EditPost}/>
                </Route>
            </Router>
        );
    }
}

Root.childContextTypes = {
    shortcuts: React.PropTypes.object.isRequired
};
