import React, {Component} from 'react';

export default class App extends Component {
    constructor(props){
        super(props);

        // binding
        this.showDetail = this.showDetail.bind(this);
    }

    showDetail(){}

    render(){
        const items = this.props.list.map((item, key)=>{
        return <li onClick={this.showDetail()} key={(key+1).toString()}>{item.title}</li>;
        });

        return (
            <ul>
                {items}
            </ul>
        );
    }
}
