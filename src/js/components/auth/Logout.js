import React, {Component} from 'react';

import {action} from '../../dispatcher/dispatcher';

export default props =>{

    const logout = ()=>{
        action.logout();
    };

    return (
        <div className="logoutBox">
            <div className="logoutBox__head">
                <div className="logoutBox__caption">Log out</div>
            </div>
            <div className="logoutBox__btn">
                <button
                    id="logout"
                    onClick={logout}
                >
                    log out
                </button>
            </div>
        </div>
    );
};
