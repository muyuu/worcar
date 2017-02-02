import React, {Component, Children} from 'react';
import {Link} from 'react-router';
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

        // 一覧未取得時は取得
        if (this.state.isLogin && !this.state.loadedUserPost){
            action.getUserPosts();
        }
    }

    setChildren(){
        let count = 0;
        return Children.map(this.props.children, child =>{
            return React.cloneElement(child, Object.assign(this.state, { key: ++count }));
        });
    }

    isFetching(){
        return this.state.isDataFetch;
    }

    alreadyFetch(){
        return !this.state.isDataFetch && this.state.isDataFetch !== undefined;
    }

    alreadyLogin(){
        return this.state.isLogin;
    }

    notLogin(){
        return !this.state.isLogin || this.state.isLogin === undefined;
    }

    isInitialLoading(){
        return this.alreadyFetch() && this.notLogin();
    }

    alreadyDependShowedData(){
        return this.alreadyFetch() && this.alreadyLogin();
    }

    addItem(e){
    }

    render(){
        let spinner = this.isFetching() ? <Spinner/> : "";
        let notLoginComponent = this.isInitialLoading() ? <div>{this.setChildren()}</div> : "";

        return (
            <div className="app">
                {this.alreadyDependShowedData() ? (
                    <div className="panels">
                        <div className="panel panel--list">
                            <PostList list={this.state.postList}/>

                            <div className="panel__add">
                                <Link
                                    to={'/new'}
                                    onClick={this.addItem.bind(this)}
                                >
                                    <i className="fa fa-plus fa-3x" ></i>
                                </Link>
                            </div>
                        </div>
                        <div className="panel panel--content">
                            {this.setChildren()}
                        </div>
                    </div>
                ) : (
                    <div className="panels">
                        {notLoginComponent}
                    </div>
                )}
                {spinner}
            </div>
        );
    }
}
