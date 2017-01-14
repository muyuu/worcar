const firebase = require('firebase');
require('../../config/firebase');
require("firebase/auth");


const loginCheck = {
    type: "LOGIN_CHECK",
    action: function loginCheck(){
        firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
                console.log('already login');
                this.emit("LOGIN");
            } else {
                this.emit("LOGOUT");
            }
        });
    }
};

const signup = {
    type: "SIGNUP",
    action: function signup(data){
        firebase.auth()
                .createUserWithEmailAndPassword(data.email, data.password)
                .then(()=>{
                    this.emit("SIGNUP");
                })
                .catch((error)=>{
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
    }
};

const login = {
    type: "LOGIN",
    action: function login(data){
        firebase.auth()
                .signInWithEmailAndPassword(data.email, data.password)
                .then(()=>{
                    this.emit("LOGIN");
                })
                .catch((error)=>{
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                });
    }
};


const logout = {
    type: "LOGOUT",
    action: function logout(){
        firebase.auth().signOut().then(()=>{
            this.emit("LOGOUT");
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
