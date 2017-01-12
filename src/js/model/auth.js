const firebase = require('firebase');
require('./config');
require("firebase/auth");
require("firebase/database");

import {browserHistory} from "react-router";

console.log('load auth.js');

const signup = (email, password)=>{
    firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
        });
};


const login = (email, password)=>{
    firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
};


const logout = ()=>{
    firebase.auth().signOut().then(()=>{
        console.log('sign out');
    }, (error)=>{
        console.log("error! not sign out");
    });
};

export {signup, login, logout};
