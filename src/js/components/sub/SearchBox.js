import React, {Component} from 'react';
import {action} from '../../dispatcher/dispatcher';

export default class SearchBox extends Component {
    constructor(props){
        super(props);
    }

    onChange(e){
        const query = e.target.value;
        action.searchList(query);
    }

    render(){
        return (
            <div className="searchBox">
                <div className="searchBox__input">
                    <input type="text" placeholder="Search..." onChange={this.onChange.bind(this)}/>
                    <i className="fa fa-search"></i>
                </div>
            </div>
        );
    }
}
