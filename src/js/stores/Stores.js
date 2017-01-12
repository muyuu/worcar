import EventEmitter from "../dispatcher/EventEmitter";

const firebase = require('firebase');
require('../config/firebase');
require("firebase/auth");

export default class Store extends EventEmitter {
    // dispatcherを受け取る
    constructor(dispatcher){
        super();

        // observe event
        dispatcher.on("LOGIN_CHECK", this.loginCheck.bind(this));
        dispatcher.on("SIGNUP", this.signup.bind(this));
        dispatcher.on("LOGIN", this.login.bind(this));
        dispatcher.on("LOGOUT", this.logout.bind(this));
    }

    getCount(){
        return this.count;
    }

    loginCheck(){
        firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
                this.emit("LOGIN");
            } else {
                this.emit("LOGOUT");
            }
        });
    }

    signup(data){
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(()=>{
                this.emit("SIGNUP");
            })
            .catch((error)=>{
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    login(data){
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

    logout(){
        firebase.auth().signOut().then(()=>{
            this.emit("LOGOUT");
        }, (error)=>{
            console.log("error! not sign out");
        });
    }
}
