const firebase = require('firebase');
require('../../config/firebase');
require("firebase/auth");
import {LOGIN_CHECK, ALREADY_LOGIN, ALREADY_LOGOUT, SIGNUP, LOGIN, LOGOUT} from "../../actions/actionTypes";


const loginCheck = {
    type: LOGIN_CHECK,
    action: function loginCheck(){
        firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
                this.emit(ALREADY_LOGIN, user.uid);
            } else {
                this.emit(ALREADY_LOGOUT);
            }
        });
    }
};

const signup = {
    type: SIGNUP,
    action: function signup(data){
        firebase.auth()
                .createUserWithEmailAndPassword(data.email, data.password)
                .then(()=>{
                    this.emit(SIGNUP);
                })
                .catch((error)=>{
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
    }
};

const login = {
    type: LOGIN,
    action: function login(data){
        firebase.auth()
                .signInWithEmailAndPassword(data.email, data.password)
                .then(()=>{
                    this.emit(LOGIN);
                })
                .catch((error)=>{
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                });
    }
};


const logout = {
    type: LOGOUT,
    action: function logout(){
        firebase.auth().signOut().then(()=>{
            this.emit(LOGOUT);
        }, (error)=>{
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
