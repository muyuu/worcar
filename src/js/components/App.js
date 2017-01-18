import React, {Component, Children} from 'react';
import {action, store} from '../dispatcher/dispatcher';
import {ALREADY_LOGIN, ALREADY_LOGOUT} from "../actions/actionTypes";
const firebase = require('firebase');
require("firebase/database");

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
    }

    alreadyLogin(){
        this.setState({
            isLogin: store.isLogin,
            uid: store.uid
        });
        this.readList();
    }

    readList(){
        const userPostsRef = firebase.database().ref(`/user-post/${this.state.uid}`);

        userPostsRef.orderByChild('updateAt')
                    .on('value', this.updatePostData.bind(this));

    }

    updatePostData(data){
        console.log('data changed');
            const posts = data.val();
            const postList = Object.keys(posts).map(val=> posts[val]);
            this.setState({ postList });
    }

    logout(){
        this.setState({
            isLogin: store.isLogin
        });
    }

    updateProps(PostListProps){
        this.setState({ PostListProps });
    }

    getList(){
        return this.state.postList;
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
                        <PostList list={this.getList()}/>
                    </div>
                    <div className="l-col8 app__detailview">
                        {this.setChildren()}
                    </div>
                </div>
            </div>
        );
    }
}
