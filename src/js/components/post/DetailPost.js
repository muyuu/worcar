import React, {Component} from 'react';

import {action} from '../../dispatcher/dispatcher';

export default class DetailPost extends Component {
    constructor(props){
        super(props);

        this.props = props;

        // dummy data
        console.log(this.props);
        this.title = this.props.title;
        this.raw = this.props.raw;
    }

    render(){
        return (
            <div className="detailPost">
                <div className="detailPost__title">
                    <div className="detailPost__caption">
                        {this.title}
                    </div>
                </div>
                <div className="detailPost__body">
                    <div className="detailPost__raw">
                        {this.raw}
                    </div>
                </div>
            </div>
        );
    }
}
