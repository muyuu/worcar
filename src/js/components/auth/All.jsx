import React, {Component} from 'react';
import firebase from 'firebase';

import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';


export default class All extends Component {
    render(){
        return (
            <div className="authBoxes">
                <div className="l-container">
                    <h2>auth boxes</h2>
                    <div className="l-row">
                        <div className="l-col5">
                            <Signup />
                        </div>
                        <div className="l-col5">
                            <Login />
                        </div>
                        <div className="l-col2">
                            <Logout />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
