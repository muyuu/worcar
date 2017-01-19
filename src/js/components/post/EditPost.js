import React, {Component} from 'react';

import {action} from '../../dispatcher/dispatcher';
import PostStateSwitchBtn from './PostStateSwitchBtn';

export default class DetailPost extends Component {
    constructor(props){
        super(props);

        this.props = props;

        if (!this.props.showedPost){
            console.log('run action show detail');
            action.showDetail(this.props.params.slug);
        }

        const title = this.props.showedPost ? this.props.showedPost.title : "";
        const raw = this.props.showedPost ? this.props.showedPost.raw : "";
        this.state = {
            title: title,
            raw  : raw,
        };

        // binding
        this.updatePost = this.updatePost.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeRaw = this.onChangeRaw.bind(this);

        console.log('constructor');
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

    updatePost(){
        const uid = this.props.uid;
        const key = this.props.showedPost.key;
        const slug = this.props.params.slug;
        const data = {
            title: this.state.title,
            raw  : this.state.raw,
        };

        action.updatePost(uid, key, slug, data);
    }

    render(){
        if (this.props.showedPost === null) return (<div/>);

        return (
            <div className="detailPost">
                <div className="detailPost__head">
                    <PostStateSwitchBtn slug={this.props.params.slug}/>
                </div>

                <div className="detailPost__body">
                    <div className="detailPost__title">
                        <div className="detailPost__caption">
                            <input type="text"
                                onChange={this.onChangeTitle}
                                defaultValue={this.props.showedPost.title}
                            />
                        </div>
                    </div>
                    <div className="detailPost__body">
                        <div className="detailPost__raw">
                            <textarea name="" id="" cols="30" rows="10"
                                onChange={this.onChangeRaw}
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
