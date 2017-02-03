import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Splash extends Component {
    action(e){
        return;
    }
    render(){
        console.log(this.props);
        if (this.props.isLogin) return (<div/>);

        return (
            <div className="splash">
                <div className="splash__logo">
                    <img src="/icon.png" alt="worcar"/>
                </div>

                <div className="splash__btn">
                    <Link
                        to={"/login"}
                        onClick={this.action.bind(this)}
                        className="btn btn-block"
                    >
                        Login
                    </Link>
                </div>
                <div className="splash__btn">
                    <Link
                        to={"/signup"}
                        onClick={this.action.bind(this)}
                        className="btn btn-block"
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        );
    }
}
