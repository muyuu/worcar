import React, {Component} from 'react';

import {action, store} from '../../dispatcher/dispatcher';

export default class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            loginEmail: "",
            loginPassword: "",
        };

        // binding
        this.onChangeMail = this.onChangeMail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.login = this.login.bind(this);
    }


    onChangeMail(e){
        this.setState({
            loginEmail: e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            loginPassword: e.target.value
        });
    }

    login(){
        action.login(this.state.loginEmail, this.state.loginPassword);
        this.setState({
            loginEmail: "",
            loginPassword: "",
        });
    }

    render(){
        return (
            <div className="loginBox">
                <div className="loginBox__head">
                    <div className="loginBox__caption">log in</div>
                </div>
                <div className="loginBox__input">
                    <input type="email" name="email" title="email" placeholder="sample@example.com"
                        id="loginEmail"
                        value={this.state.loginEmail}
                        onChange={this.onChangeMail}
                    />
                </div>
                <div className="loginBox__input">
                    <input type="password" name="passwords" title="passwords" placeholder="inputpasswords"
                        id="loginPassword" 
                         value={this.state.loginPassword}
                         onChange={this.onChangePassword}
                    />
                </div>
                <div className="loginBox__btn">
                    <button id="login" onClick={this.login}>log in</button>
                </div>
            </div>
        );
    }
}


