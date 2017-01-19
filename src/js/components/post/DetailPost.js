import React, {Component} from 'react';

import {action} from '../../dispatcher/dispatcher';

export default class DetailPost extends Component {
    constructor(props){
        super(props);

        this.props = props;

        action.showDetail(this.props.params.slug);

        // dummy data
    }

    render(){
        if (this.props.showedPost === null) return (<div/>);

        return (
            <div className="detailPost">
                <div className="detailPost__head">

                </div>

                <div className="detailPost__body">
                    <div className="detailPost__title">
                        <div className="detailPost__caption">
                            {this.props.showedPost.title}
                        </div>
                    </div>
                    <div className="detailPost__body">
                        <div className="detailPost__raw">
                            {this.props.showedPost.raw}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
