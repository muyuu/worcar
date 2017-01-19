import React, {Component} from 'react';
import {Link} from 'react-router';

import {action} from '../../dispatcher/dispatcher';

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const items = this.props.list.map(item =>{
            return (
                <li key={item.key}>
                    <Link to={"/post/" + item.slug}>
                        {item.title}
                    </Link>
                </li>
            );
        });

        return (
            <ul>
                {items}
            </ul>
        );
    }
}
