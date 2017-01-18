import * as type from "./actionTypes";

export default class Actions {
    constructor(dispatcher){
        this.dispatcher = dispatcher;
    }

    loginCheck(){
        this.dispatcher.emit(type.LOGIN_CHECK);
    }

    signup(email, password){
        const data = {email, password};
        this.dispatcher.emit(type.SIGNUP, data);
    }

    login(email, password){
        const data = {email, password};
        this.dispatcher.emit(type.LOGIN, data);
    }

    logout(){
        this.dispatcher.emit(type.LOGOUT);
    }

    // --------------------------------------
    // post
    // --------------------------------------
    newPost(uid, post){
        const data = post;
        data.uid = uid;
        this.dispatcher.emit(type.NEW_POST, data);
    }

    getUserPosts(){
        this.dispatcher.emit(type.GET_USER_POSTS);
    }
}
