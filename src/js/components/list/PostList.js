import React, {Component} from 'react';
import {Link} from 'react-router';

import {action} from '../../dispatcher/dispatcher';

export default class App extends Component {
    constructor(props){
        super(props);
    }

    showDetail(e){
        const slug = e.currentTarget.getAttribute('data-slug');
        action.showDetail(slug);
    }

    render(){
        const items = this.props.list.map(item =>{
            return (
                <li key={item.key} className="item">
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
