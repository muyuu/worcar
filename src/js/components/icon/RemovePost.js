import React from 'react';
import {action} from '../../dispatcher/dispatcher';

const RemovePost = props =>{

    const removePost = ()=>{
        const uid = props.uid;
        const key = props.postKey;
        const slug = props.slug;
        action.removePost({uid, key, slug});
    };

    return(
        <div onClick={removePost}>
            <i className="fa fa-trash-o fa-2x"></i>
        </div>
    );
};

export default RemovePost;
