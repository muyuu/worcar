import React, {Component} from 'react';

import {addPost} from '../../model/post/newPost';

export default class NewPost extends Component {
    constructor(props){
        super(props);

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
        addPost(this.state);
    }

    render(){
        return (
            <div className="newPost">
                <div className="newPost__title"></div>
                <div className="newPost__raw"></div>
                <div className="newPost__btn">
                    <button onClick={this.addPost}></button>
                </div>
            </div>
        );
    }
}
