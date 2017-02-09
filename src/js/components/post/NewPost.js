import React, {Component} from 'react';

import {action} from '../../dispatcher/dispatcher';

// components
import BackToList from '../icon/BackToList';

export default class NewPost extends Component {
    constructor(props){
        super(props);

        this.props = props;

        this.state = {
            title: "",
            raw  : "",
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

    backList(){
        action.backList();
    }

    addPost(){
        const uid = this.props.uid;
        const data = {
            title: this.state.title,
            raw  : this.state.raw,
        };
        action.newPost(uid, data);
    }

    render(){
        return (
            <div className="post post--edit">
                <div className="post__head">
                    <div className="post__back">
                        <BackToList/>
                    </div>
                </div>

                <div className="post__body">
                    <div className="post__inner">
                        <div className="post__title">
                            <input type="text" placeholder="Write title here..."
                                className="post__caption"
                                onChange={this.onChangeTitle}/>
                        </div>
                        <div className="post__content">
                            <textarea name="" id="" cols="30" rows="10" placeholder="Please write..."
                                className="post__raw"
                                onChange={this.onChangeRaw}
                            ></textarea>
                        </div>
                        <div className="post__btn">
                            <button className="btn" onClick={this.addPost}>post</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
