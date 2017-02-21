import React from 'react';
import {action} from '../../dispatcher/dispatcher';

const AddItem = () =>{
    const addItem = ()=>{
        action.moveNewPost();
    };

    return(
        <i className="fa fa-plus-circle fa-2x" onClick={addItem}></i>
    );
};

export default AddItem;
