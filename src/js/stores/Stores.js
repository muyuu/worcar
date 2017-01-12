import EventEmitter from "../dispatcher/EventEmitter";

const firebase = require('firebase');
require("firebase/auth");


export default class Store extends EventEmitter {
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
        firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
                this.emit("LOGIN");
            } else {
                this.emit("LOGOUT");
            }
        });
    }

    login(data){
        firebase.auth()
            .signInWithEmailAndPassword(data.email, data.password)
            .then(()=>{
                this.emit("CHANGE");
            })
            .catch((error)=>{
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });

    }
}
