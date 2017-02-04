import React, {Component} from 'react';
import {action} from '../../dispatcher/dispatcher';

export default class Signup extends Component {

    constructor(props){
        super(props);

        this.state = {
            signupEmail: "",
            signupPassword: "",
        };

        // binding
        this.onChangeMail = this.onChangeMail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.signup = this.signup.bind(this);
    }


    onChangeMail(e){
        this.setState({
            signupEmail: e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            signupPassword: e.target.value
        });
    }

    signup(){
        action.signup(this.state.signupEmail, this.state.signupPassword);
        this.setState({
            signupEmail: "",
            signupPassword: "",
        });
    }

    render(){
        return (
            <div className="overlay">
                <div className="inputsBox">
                    <div className="inputsBox__head">
                        <div className="inputsBox__caption">Sign up</div>
                    </div>
                    <div className="inputsBox__input">
                        <input type="email" name="email" title="email" placeholder="sample@example.com"
                            id="signupEmail"
                            value={this.state.signupEmail}
                            onChange={this.onChangeMail}
                        />
                    </div>

                    <div className="inputsBox__input">
                        <input type="password" name="passwords" title="passwords" placeholder="inputpasswords"
                             id="signupPassword"
                             value={this.state.signupPassword}
                             onChange={this.onChangePassword}
                        />
                    </div>

                    <div className="inputsBox__btn">
                        <button id="signup" className="btn btn-block" onClick={this.signup}>sign up</button>
                    </div>
                </div>
            </div>
        );
    }
}
