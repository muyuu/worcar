import * as type from "./actionTypes";

export default class Actions {
    constructor(dispatcher){
        this.dispatcher = dispatcher;
    }

    // --------------------------------------
    // auth
    // --------------------------------------
    loginCheck(){
        this.dispatcher.emit(type.LOGIN_CHECK);
    }

    signup(email, password){
        const data = { email, password };
        this.dispatcher.emit(type.SIGNUP, data);
    }

    login(email, password){
        const data = { email, password };
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

    updatePost(uid, key, slug, post){
        post.uid = uid;
        post.key = key;
        post.slug = slug;
        this.dispatcher.emit(type.UPDATE_POST, post);
    }

    getUserPosts(){
        this.dispatcher.emit(type.GET_USER_POSTS);
    }

    showDetail(slug){
        this.dispatcher.emit(type.SHOW_DETAIL, slug);
    }
}
