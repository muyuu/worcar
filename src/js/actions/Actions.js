import {LOGIN_CHECK, SIGNUP, LOGIN, LOGOUT, NEW_POST} from "./actionTypes";

export default class Actions {
    constructor(dispatcher){
        this.dispatcher = dispatcher;
    }

    loginCheck(){
        this.dispatcher.emit(LOGIN_CHECK);
    }

    signup(email, password){
        const data = {email, password};
        this.dispatcher.emit(SIGNUP, data);
    }

    login(email, password){
        const data = {email, password};
        this.dispatcher.emit(LOGIN, data);
    }

    logout(){
        this.dispatcher.emit(LOGOUT);
    }

    // --------------------------------------
    // post
    // --------------------------------------
    newPost(uid, post){
        const data = post;
        data.uid = uid;
        this.dispatcher.emit(NEW_POST, data);
    }
}
