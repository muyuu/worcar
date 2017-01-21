import React, {Component} from 'react';

import {action} from '../../dispatcher/dispatcher';
import PostStateSwitchBtn from './PostStateSwitchBtn';

export default class EditPost extends Component {
    constructor(props){
        super(props);

        this.props = props;

        if (!this.props.showedPost){
            action.showDetail(this.props.params.slug);
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

    render(){
        if (this.props.showedPost === null) return (<div/>);

        return (
            <div className="detailPost">
                <div className="detailPost__head">
                    <PostStateSwitchBtn slug={this.props.params.slug} showType={this.props.showType}/>
                </div>

                <div className="detailPost__body">
                    <div className="detailPost__title">
                        <div className="detailPost__caption">
                            <input type="text"
                                ref={(title) => this.title = title}
                                defaultValue={this.props.showedPost.title}
                            />
                        </div>
                    </div>
                    <div className="detailPost__body">
                        <div className="detailPost__raw">
                            <textarea name="" id="" cols="30" rows="10"
                                ref={(raw) => this.raw = raw}
                                defaultValue={this.props.showedPost.raw}
                            >
                            </textarea>
                        </div>
                    </div>
                    <div className="detailPost__btn">
                        <button onClick={this.updatePost}>update</button>
                    </div>
                </div>
            </div>
        );
    }
}
