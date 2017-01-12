import React, {Component} from 'react';

import {logout} from '../../model/auth';

export default class Logout extends Component {
    constructor(props){
        super(props);

        // binding
        this.logout = this.logout.bind(this);
    }

    logout(){
        logout();
    }

    render(){
        return (
            <div className="logoutBox">
                <div className="logoutBox__head">
                    <div className="logoutBox__caption">Log out</div>
                </div>
                <div className="logoutBox__btn">
                    <button
                        id="logout"
                        onClick={this.logout}
                    >
                        log out
                    </button>
                </div>
            </div>
        );
    }
}
