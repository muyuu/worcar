import React, {Component} from 'react';

import {action, store} from '../dispatcher/dispatcher';


import PostList from './list/PostList.jsx';

const firebase = require('firebase');
require("firebase/auth");
require("firebase/database");

let PostListProps = [];
const refMeta = firebase.database().ref('/post/meta');

export default class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            PostListProps
        };

        store.on("LOGIN", this.login.bind(this));

        refMeta.once('value').then((snapshot)=>{
            PostListProps = snapshot.val();
            this.updateProps(PostListProps);
        });

        refMeta.on('child_changed', (data)=>{
            PostListProps = data.val();
            this.updateProps(PostListProps);
        });
    }

    login(){
    }

    updateProps(PostListProps){
        this.setState({PostListProps});
    }

    getListProps(){
        return this.state.PostListProps;
    }


    render(){
        return (
            <div className="app l-row">
                <div className="l-col4 app__listview">
                    <PostList list={this.getListProps()}/>
                </div>
                <div className="l-col8 app__detailview">
                </div>
            </div>
        );
    }
}
