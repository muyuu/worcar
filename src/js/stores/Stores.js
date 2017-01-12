import EventEmitter from "../dispatcher/EventEmitter";

const firebase = require('firebase');
require("firebase/auth");


export default class UserStore extends EventEmitter {
    // dispatcherを受け取る
    constructor(dispatcher){
        super();

        // observe event
        dispatcher.on("LOGIN_CHECK", this.loginCheck.bind(this));
        dispatcher.on("LOGIN", this.login.bind(this));
    }

    getCount(){
        return this.count;
    }

    loginCheck(){
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log('already login');
                this.emit("LOGIN");
            } else {
                console.log('not login');
                this.emit("LOGOUT");
            }
        });
    }

    login(data){
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .catch((error)=>{
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });

        // emit "CHANGE" --> self
        this.emit("CHANGE");
    }
}
