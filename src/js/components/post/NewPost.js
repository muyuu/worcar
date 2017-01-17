import React, {Component} from 'react';

import {action} from '../../dispatcher/dispatcher';

export default class NewPost extends Component {
    constructor(props){
        super(props);

        this.props = props;

        this.state = {
            title: "",
            raw: "",
        };

        // binding
        this.addPost = this.addPost.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeRaw = this.onChangeRaw.bind(this);
    }


    onChangeTitle(e){
        this.setState({
            title: e.target.value
        });
    }

    onChangeRaw(e){
        this.setState({
            raw: e.target.value
        });
    }

    addPost(){
        const data = {
            title: this.state.title,
            raw: this.state.raw,
            createdAt: parseInt( new Date() /1000 ),
            updatedAt: parseInt( new Date() /1000 ),
        };
        const uid = this.props.uid;
        action.newPost(uid, data);
    }

    render(){
        return (
            <div className="newPost">
                <div className="newPost__title">
                    <input type="text" onChange={this.onChangeTitle} />
                </div>
                <div className="newPost__raw">
                    <textarea name="" id="" cols="30" rows="10" onChange={this.onChangeRaw}></textarea>
                </div>
                <div className="newPost__btn">
                    <button onClick={this.addPost}>post</button>
                </div>
            </div>
        );
    }
}
