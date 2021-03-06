import React from 'react';

import {action} from '../../dispatcher/dispatcher';

const Logout = ()=>{
    const logout = ()=>{
        action.logout();
    };

    return (
        <div className="overlay">
            <div className="inputsBox">
                <div className="inputsBox__head">
                    <div className="inputsBox__caption">Log out?</div>
                </div>
                <div className="inputsBox__btn">
                    <button
                        id="logout"
                        className="btn btn-block"
                        onClick={logout}
                    >
                        log out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Logout;
