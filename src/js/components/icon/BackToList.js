import React from 'react';
import {action} from '../../dispatcher/dispatcher';

const BackToList = () =>{
    const backList = ()=>{
        action.backList();
    };

    return(
        <div onClick={backList}>
            <i className="fa fa-angle-left fa-2x"></i>
            <span>List</span>
        </div>
    );
};

export default BackToList;
