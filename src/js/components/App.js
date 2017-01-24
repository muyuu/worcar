import React, {Component, Children} from 'react';
import {action, store} from '../dispatcher/dispatcher';
import {ALREADY_LOGIN, ALREADY_LOGOUT, GET_USER_POSTS, SHOW_DETAIL, CHANGE_DETAIL_TYPE} from "../actions/actionTypes";

import PostList from './list/PostList';


export default class Layout extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLogin   : store.isLogin,
            uid       : null,
            postList  : [],
            showedPost: null,
        };

        // login check
        action.loginCheck();

        // subscribe
        store.on(ALREADY_LOGIN, this.alreadyLogin.bind(this));
        store.on(ALREADY_LOGOUT, this.logout.bind(this));
        store.on(GET_USER_POSTS, this.getUserPosts.bind(this));
        store.on(SHOW_DETAIL, this.showDetail.bind(this));
        store.on(CHANGE_DETAIL_TYPE, this.changeDetailType.bind(this));
    }

    alreadyLogin(){
        this.setState({
            isLogin: store.isLogin,
            uid    : store.uid
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

    getUserPosts(data){
        this.setState({
            postList: data
        });
    }

    setPostList(){
        return this.state.postList;
    }

    setChildren(){
        let count = 0;
        return Children.map(this.props.children, child =>{
            return React.cloneElement(child, Object.assign(this.state, { key: ++count }));
        });
    }

    showDetail(post, showType){
        this.setState({
            showedPost: post,
            showType: showType,
        });
    }

    changeDetailType(showType){
        this.setState({
            showType: showType,
        });
    }

    render(){
        return (
            <div className="app">
                <div className="panels">
                    <div className="panel panel--list">
                        <PostList list={this.state.postList}/>
                    </div>
                    <div className="panel panel--content">
                        {this.setChildren()}
                    </div>
                </div>
            </div>
        );
    }
}
