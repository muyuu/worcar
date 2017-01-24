import React, {Component} from 'react';
import {Link} from 'react-router';
import {action} from '../../dispatcher/dispatcher';

export default class DetailPost extends Component {
    constructor(props){
        super(props);
    }

    changeDetailType(e){
        const type = e.currentTarget.getAttribute('data-type');
        action.changeDetailType(type);
    }

    render(){
        let post = <div/>;
        let edit = <div/>;

        if(this.props.showType === 'edit'){
            post = <Link
                    to={"/post/" + this.props.slug}
                    className="btn"
                    onClick={this.changeDetailType}
                    data-type="view"
                >
                    <span className="btn__ico"><i className="fa fa-eye"></i></span>
                    <span className="btn__label">VIEW</span>
                </Link>;

            edit = <span
                    className="btn btn--passive"
                >
                    <span className="btn__ico"><i className="fa fa-edit"></i></span>
                    <span className="btn__label">EDIT</span>
                </span>;
        } else {
            post = <span
                    className="btn btn--passive"
                >
                <span className="btn__ico"><i className="fa fa-eye"></i></span>
                <span className="btn__label">VIEW</span>
            </span>;

            edit = <Link
                to={"/post/" + this.props.slug + "/edit"}
                className="btn"
                onClick={this.changeDetailType}
                data-type="edit"
            >
                <span className="btn__ico"><i className="fa fa-edit"></i></span>
                <span className="btn__label">EDIT</span>
            </Link>;
        }
        return (
            <div className="btns">
                {post}
                {edit}
            </div>
        );
    }
}
