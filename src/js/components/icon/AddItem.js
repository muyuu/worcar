import React from 'react';
import {browserHistory} from 'react-router';
import {action} from '../../dispatcher/dispatcher';

const AddItem = () =>{
    const addItem = ()=>{
        action.moveNewPost();
        browserHistory.push('/new');
        // e.preventDefault();
    };

    return(
        <div onClick={addItem}>
            <i className="fa fa-plus-circle fa-2x"></i>
        </div>
    );
};

export default AddItem;
