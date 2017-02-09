import React, {Component} from 'react';
import {Link} from 'react-router';
import {action} from '../../dispatcher/dispatcher';

export default class PostList extends Component {
    constructor(props){
        super(props);
    }

    showDetail(e){
        const slug = e.currentTarget.getAttribute('data-slug');
        action.showDetail(slug);
    }

    render(){
        const items = this.props.list.filter(v =>{
            if (this.props.query === "") return true;
            return v.title.indexOf(this.props.query) !== -1;
        }).map(item =>{
            let selectedClass = "item";
            if (this.props.current === item.slug) {
               selectedClass += " item--current";
            }

            return (
                <li key={item.key} className={selectedClass}>
                    <Link
                        to={"/post/" + item.slug}
                        onClick={this.showDetail}
                        data-slug={item.slug}
                        className="item__link"
                    >
                        {item.title}
                    </Link>
                </li>
            );
        });

        return (
            <ul className="items">
                {items}
            </ul>
        );
    }
}
