import React, {Component, Children} from 'react';
import {action, store} from '../dispatcher/dispatcher';

import Splash from './init/Splash';
import PostList from './sub/PostList';
import SearchBox from './sub/SearchBox';
import Spinner from './icon/Spinner';
import AddItem from './icon/AddItem';

export default class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLogin   : store.isLogin,
            uid       : null,
            postList  : [],
            showedPost: null,
            searchQuery: "",
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

        if(this.props.children === null && !this.alreadyLogin()){
            return <Splash/>;
        }

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

    render(){
        let spinner = this.isFetching() ? <Spinner/> : "";
        let notLoginComponent = this.isInitialLoading() ? <div>{this.setChildren()}</div> : "";

        let panelsClass = "panels";
        if (this.state.isDetail) {
            panelsClass += " s-detail";
        }

        return (
            <div className="app">
                {this.alreadyDependShowedData() ? (
                    <div className={panelsClass}>
                        <div className="panel panel--list">
                            <div className="sub">
                                <div className="sub__search">
                                    <SearchBox/>
                                </div>

                                <div className="sub__list">
                                    <PostList
                                        list={this.state.postList}
                                        query={this.state.searchQuery}
                                        current={this.state.currentItem}
                                    />
                                </div>

                                <div className="sub__add">
                                    <AddItem/>
                                </div>
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
