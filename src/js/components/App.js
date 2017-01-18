import React, {Component, Children} from 'react';
import {action, store} from '../dispatcher/dispatcher';
import {ALREADY_LOGIN, ALREADY_LOGOUT, GET_USER_POSTS} from "../actions/actionTypes";

import PostList from './list/PostList';


export default class Layout extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLogin : store.isLogin,
            uid     : null,
            postList: [],
        };

        // login check
        action.loginCheck();

        // subscribe
        store.on(ALREADY_LOGIN, this.alreadyLogin.bind(this));
        store.on(ALREADY_LOGOUT, this.logout.bind(this));
        store.on(GET_USER_POSTS, this.getUserPosts.bind(this));
    }

    alreadyLogin(){
        this.setState({
            isLogin: store.isLogin,
            uid: store.uid
        });

        action.getUserPosts();
    }

    logout(){
        this.setState({
            isLogin: store.isLogin
        });
    }

    getUserPosts(data){
        this.setState({
            postList: data
        });
    }

    setChildren(){
        let count = 0;
        return Children.map(this.props.children, child =>{
            return React.cloneElement(child, Object.assign(this.state, { key: ++count }));
        });
    }

    render(){
        return (
            <div className="app">
                <div className="l-row">
                    <div className="l-col4 app__listview">
                        <PostList list={this.state.postList}/>
                    </div>
                    <div className="l-col8 app__detailview">
                        {this.setChildren()}
                    </div>
                </div>
            </div>
        );
    }
}
