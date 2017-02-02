import React, {Component} from 'react';
const ReactMarkdown = require('react-markdown');
import {action} from '../../dispatcher/dispatcher';
import PostStateSwitchBtn from './PostStateSwitchBtn';

export default class DetailPost extends Component {
    constructor(props){
        super(props);

        if (!this.props.showedPost){
            action.showDetail(this.props.params.slug, 'view');
        }
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
            <div className="post">
                <div className="post__head">
                    <PostStateSwitchBtn slug={this.props.params.slug} showType={this.props.showType}/>

                    <div className="post__delete">
                        <i className="fa fa-trash-o fa-2x" onClick={this.removeItem.bind(this)}></i>
                    </div>
                </div>

                <div className="post__body">
                    <div className="post__title">
                        <div className="post__caption">
                            {this.props.showedPost.title}
                        </div>
                    </div>
                    <div className="post__content">
                        <div className="post__raw markdown">
                            <ReactMarkdown source={this.props.showedPost.raw}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
