import React, {Component} from 'react';
import {Link} from 'react-router';

import {action} from '../../dispatcher/dispatcher';

export default class App extends Component {
    constructor(props){
        super(props);
    }

    showDetail(e){
        const key = e.currentTarget.getAttribute('data-key');
        action.showDetail(key);
    }

    render(){
        const items = this.props.list.map(item =>{
            return (
                <li key={item.key}>
                    <Link to={"/post/" + item.key} onClick={this.showDetail} data-key={item.key}>
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
