import firebase from '../../config/firebase';
import {LOGIN_CHECK, SIGNUP, LOGIN, LOGOUT} from "../../actions/actionTypes";
import {browserHistory} from 'react-router';

const auth = firebase.auth();

// getter setter
export const authProps = [
    {
        name  : "uid",
        getter: function(){
            return this.state.uid;
        },
        setter: function(val){
            this.state.uid = val;
        }
    },
    {
        name  : "isLogin",
        getter: function(){
            return this.state.isLogin;
        },
        setter: function(val){
            this.state.isLogin = val;
        }
    }
];

const loginCheck = {
    type  : LOGIN_CHECK,
    action: function loginCheck(){

        // start loading...
        this.setState({
            isDataFetch: true,
        });

        auth.onAuthStateChanged((user) =>{
            if (user){
                this.setState({
                    isLogin: true,
                    uid    : user.uid,
                    isDataFetch: false,
                    loadedUserPost: false,
                });
            } else {
                this.setState({
                    isLogin: false,
                    uid    : null,
                    isDataFetch: false,
                });
            }
        });
    }
};

const signup = {
    type  : SIGNUP,
    action: function signup(data){
        auth.createUserWithEmailAndPassword(data.email, data.password)
            .then(() =>{
                browserHistory.push('/');
            });
    }
};

const login = {
    type  : LOGIN,
    action: function login(data){
        auth.signInWithEmailAndPassword(data.email, data.password)
            .then(() =>{
                browserHistory.push('/');
                this.emit(SIGNUP);
            });
    }
};


const logout = {
    type  : LOGOUT,
    action: function logout(){
        auth.signOut()
            .then(() =>{
                browserHistory.push('/');
            });
    }
};

export default {
    loginCheck,
    login,
    signup,
    logout,
};
