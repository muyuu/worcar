import React, {Component, Children} from 'react';
import {action, store} from '../dispatcher/dispatcher';

import PostList from './list/PostList';
import Spinner from './icon/Spinner';


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
        store.on('UPDATE_STORE', this.updateState.bind(this));
    }

    updateState(newState){
        this.setState(newState);

        // 一覧見取得時は取得
        if (this.state.isLogin && !this.state.isGetUserPosts){
            action.getUserPosts();
        }
    }

    setChildren(){
        let count = 0;
        return Children.map(this.props.children, child =>{
            return React.cloneElement(child, Object.assign(this.state, { key: ++count }));
        });
    }

    render(){
        let spinner = "";
        if (this.state.isDataFetch){
            spinner = <Spinner/>;
        }

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
                {spinner}
            </div>
        );
    }
}
