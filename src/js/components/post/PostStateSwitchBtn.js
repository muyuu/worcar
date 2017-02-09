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

        let labels = label =>{
            return(
                <span className="pill__label">
                    {label}
                </span>
            );
        };

        if(this.props.showType === 'edit'){
            post = <Link
                    to={"/post/" + this.props.slug}
                    className="pill"
                    onClick={this.changeDetailType}
                    data-type="view"
                >
                    {labels("VIEW")}
                </Link>;

            edit = <span
                className="pill pill--passive"
            >
                {labels("EDIT")}
            </span>;
        } else {
            post = <span
                className="pill pill--passive"
            >
                {labels("VIEW")}
            </span>;

            edit = <Link
                to={"/post/" + this.props.slug + "/edit"}
                className="pill"
                onClick={this.changeDetailType}
                data-type="edit"
            >
                {labels("EDIT")}
            </Link>;
        }
        return (
            <div className="pills">
                {post}
                {edit}
            </div>
        );
    }
}
