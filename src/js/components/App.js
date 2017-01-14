import React, {Component, Children} from 'react';
import {action, store} from '../dispatcher/dispatcher';
import {LOGIN, LOGOUT} from "../actions/actionTypes";

export default class Layout extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLogin: false
        };

        // login check
        action.loginCheck();

        // subscribe
        store.on(LOGIN, this.login.bind(this));
        store.on(LOGOUT, this.logout.bind(this));
    }

    login(){
        this.setState({
            isLogin: true
        });
    }

    logout(){
        this.setState({
            isLogin: false
        });
    }

    setChildren(){
        let count = 0;
        return Children.map(this.props.children, child =>{
            return React.cloneElement(child, Object.assign(this.state, {key: ++count}));
        });
    }

    render(){
        return (
            <div className="app">
                {this.setChildren()}
            </div>
        );
    }
}
