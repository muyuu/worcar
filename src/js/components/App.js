import React, {Component, Children} from 'react';
import ReactDOM from 'react-dom';
import {action, store} from '../dispatcher/dispatcher';
import { Shortcuts } from 'react-shortcuts';


// child components
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

        // binding
        this._handleShortcuts = this._handleShortcuts.bind(this);
    }

    updateState(newState){
        this.setState(newState);

        // 一覧未取得時は取得
        if (this.state.isLogin && !this.state.loadedUserPost){
            action.getUserPosts();
        }
    }


    _handleShortcuts(actionFromKey, event){
        switch (actionFromKey) {
            case 'MOVE_NEW_POST':
                action.moveNewPost();
                event.preventDefault();
                break;
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
                    <Shortcuts
                        name='ROOT'
                        handler={this._handleShortcuts}
                        tabIndex={1}
                        global={true}
                    >
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
                    </Shortcuts>
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
