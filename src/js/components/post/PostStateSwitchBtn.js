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
            let iconType = label === 'view' ? 'eye' : 'edit';
            let iconClass = "fa fa-${iconType}";
            return(
                <span>
                    <span className="btn__ico">
                        <i className={iconClass}></i>
                    </span>
                    <span className="btn__label">
                        {label}
                    </span>
                </span>
            );
        };

        if(this.props.showType === 'edit'){
            post = <Link
                    to={"/post/" + this.props.slug}
                    className="btn"
                    onClick={this.changeDetailType}
                    data-type="view"
                >
                    {labels("VIEW")}
                </Link>;

            edit = <span
                className="btn btn--passive"
            >
                {labels("EDIT")}
            </span>;
        } else {
            post = <span
                className="btn btn--passive"
            >
                {labels("VIEW")}
            </span>;

            edit = <Link
                to={"/post/" + this.props.slug + "/edit"}
                className="btn"
                onClick={this.changeDetailType}
                data-type="edit"
            >
                {labels("EDIT")}
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
