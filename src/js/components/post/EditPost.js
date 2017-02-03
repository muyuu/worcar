import React, {Component} from 'react';

import {action} from '../../dispatcher/dispatcher';
import PostStateSwitchBtn from './PostStateSwitchBtn';

export default class EditPost extends Component {
    constructor(props){
        super(props);

        if (!this.props.showedPost){
            action.showDetail(this.props.params.slug, 'edit');
        }

        // binding
        this.updatePost = this.updatePost.bind(this);
    }


    updatePost(){
        const uid = this.props.uid;
        const key = this.props.showedPost.key;
        const slug = this.props.params.slug;
        const data = {
            title: this.title.value,
            raw  : this.raw.value,
        };

        action.updatePost(uid, key, slug, data);
    }


    removeItem(){
        const uid = this.props.uid;
        const key = this.props.showedPost.key;
        const slug = this.props.params.slug;
        action.removePost({uid, key, slug});
    }


    render(){
        if (this.props.showedPost === null) return (<div/>);

        return (
            <div className="post post--edit">
                <div className="post__head">
                    <PostStateSwitchBtn slug={this.props.params.slug} showType={this.props.showType}/>

                    <div className="post__delete">
                        <i className="fa fa-trash-o fa-2x" onClick={this.removeItem.bind(this)}></i>
                    </div>
                </div>

                <div className="post__body">
                    <div className="post__inner">
                        <div className="post__title">
                            <input type="text"
                                ref={(title) => this.title = title}
                                className="post__caption"
                                defaultValue={this.props.showedPost.title}
                            />
                        </div>
                        <div className="post__content">
                            <textarea name="" id="" cols="30" rows="10"
                                className="post__raw"
                                ref={(raw) => this.raw = raw}
                                defaultValue={this.props.showedPost.raw}
                            >
                            </textarea>
                        </div>
                    </div>
                    <div className="post__btn">
                        <button className="btn" onClick={this.updatePost}>update</button>
                    </div>
                </div>
            </div>
        );
    }
}
