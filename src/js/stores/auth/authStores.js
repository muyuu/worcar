const firebase = require('firebase');
require('../../config/firebase');
require("firebase/auth");
import {LOGIN_CHECK, ALREADY_LOGIN, ALREADY_LOGOUT, SIGNUP, LOGIN, LOGOUT} from "../../actions/actionTypes";

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
        auth.onAuthStateChanged((user) =>{
            if (user){
                this.isLogin = true;
                this.uid = user.uid;
                this.emit(ALREADY_LOGIN);
            } else {
                this.isLogin = false;
                this.uid = null;
                this.emit(ALREADY_LOGOUT);
            }
        });
    }
};

const signup = {
    type  : SIGNUP,
    action: function signup(data){
        auth.createUserWithEmailAndPassword(data.email, data.password)
            .then(() =>{
                this.emit(SIGNUP);
            })
            .catch((error) =>{
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
};

const login = {
    type  : LOGIN,
    action: function login(data){
        auth.signInWithEmailAndPassword(data.email, data.password)
            .then(() =>{
                this.isLogin = true;
                this.emit(LOGIN);
            })
            .catch((error) =>{
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    },
    getter: [{
        name  : 'isLogin',
        action: function isLogin(){
            return this.isLogin;
        }
    }]
};


const logout = {
    type  : LOGOUT,
    action: function logout(){
        auth.signOut().then(() =>{
            this.emit(LOGOUT);
        }, (error) =>{
            console.log("error! not sign out");
        });
    }
};

export default {
    loginCheck,
    login,
    signup,
    logout,
};
