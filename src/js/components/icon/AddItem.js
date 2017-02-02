import React from 'react';
import {Link} from 'react-router';

const AddItem = props =>{
    const addItem = (e)=>{
    };

    return(
        <Link
            to={'/new'}
            onClick={addItem.bind(this)}
        >
            <i className="fa fa-plus fa-3x"></i>
        </Link>
    );
};

export default AddItem;
