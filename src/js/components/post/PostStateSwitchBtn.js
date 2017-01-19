import React, {Component} from 'react';
import {Link} from 'react-router';

export default class DetailPost extends Component {
    constructor(props){
        super(props);

        this.props = props;
    }

    render(){
        return (
            <div className="btns">
                <Link
                    to={"/post/" + this.props.slug}
                    className="btns__btn btns__btn--first"
                >
                    <span className="btns__ico"><i className="fa fa-eye"></i></span>
                    <span className="btns__label">VIEW</span>
                </Link>
                <Link
                    to={"/post/" + this.props.slug + "/edit"}
                    className="btns__btn btns__btn--first"
                >
                    <span className="btns__ico"><i className="fa fa-edit"></i></span>
                    <span className="btns__label">EDIT</span>
                </Link>
            </div>
        );
    }
}
