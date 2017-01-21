import React, {Component} from 'react';
const ReactMarkdown = require('react-markdown');
import {action} from '../../dispatcher/dispatcher';
import PostStateSwitchBtn from './PostStateSwitchBtn';

export default class DetailPost extends Component {
    constructor(props){
        super(props);
        this.props = props;

        if (!this.props.showedPost){
            action.showDetail(this.props.params.slug);
        }
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
                            {this.props.showedPost.title}
                        </div>
                    </div>
                    <div className="detailPost__body">
                        <div className="detailPost__raw">
                            <ReactMarkdown source={this.props.showedPost.raw}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
