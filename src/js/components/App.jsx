import React, {Component} from 'react';
import {action, store} from '../dispatcher/dispatcher';


export default class Layout extends Component {
    constructor(props){
        super(props);

        this.state = {
        };

        store.on("LOGIN", this.login.bind(this));
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
            <div className="app">
                {this.props.children}
            </div>
        );
    }
}
