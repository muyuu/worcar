const firebase = require('firebase');
require('../../config/firebase');
require("firebase/auth");
const shortid = require('shortid');
import {NEW_POST, UPDATE_POST, CHANGE_DETAIL_TYPE, GET_USER_POSTS, SHOW_DETAIL} from "../../actions/actionTypes";

// getter setter
export const postProps = [];

const ref = firebase.database().ref();

const newPost = {
    type  : NEW_POST,
    action: function newPost(data){
        const uid = data.uid;

        const newPostKey = ref.child('post').push().key;
        const newPostSlug = shortid.generate();

        data.key = newPostKey;
        data.slug = newPostSlug;
        data.createdAt = parseInt(new Date() / 1000);
        data.updatedAt = parseInt(new Date() / 1000);

        // make new post
        const updates = {};
        updates[`/post/${newPostKey}`] = data;
        updates[`/post-by-slug/${newPostSlug}`] = data;
        updates[`/user-post/${uid}/${newPostKey}`] = data;

        // post data
        ref.update(updates);

        this.emit(NEW_POST);
    }
};

const updatePost = {
    type  : UPDATE_POST,
    action: function updatePost(data){
        const key = data.key;
        const uid = data.uid;
        const slug = data.slug;
        data.updateAt = parseInt(new Date() / 1000);

        // make new post
        const updates = {};
        updates[`/post/${key}`] = data;
        updates[`/post-by-slug/${slug}`] = data;
        updates[`/user-post/${uid}/${key}`] = data;

        // post data
        ref.update(updates);

        this.emit(UPDATE_POST);
    }
};

const changeDetailType = {
    type: CHANGE_DETAIL_TYPE,
    action: function changeDetailType(showType){
        this.emit(CHANGE_DETAIL_TYPE, showType);
    }
};

const getUserPosts = {
    type  : GET_USER_POSTS,
    action: function getUserPosts(){

        // firebase user post ref
        const userPostsRef = firebase.database().ref(`/user-post/${this.uid}`);

        userPostsRef.orderByChild('updateAt').on('value', data =>{
            const posts = data.val();
            const postList = Object.keys(posts).map(val =>{
                const postData = Object.assign({}, posts[val]);
                postData.key = val;
                return postData;
            });
            this.emit(GET_USER_POSTS, postList);
        });

    }
};

const showDetail = {
    type  : SHOW_DETAIL,
    action: function showDetail(data){
        const {slug, showType} = data;
        const detailPost = firebase.database().ref(`/post-by-slug/${slug}`);
        detailPost.on('value', data =>{
            const post = data.val();
            this.emit(SHOW_DETAIL, post, showType);
        });
    }
};


export default {
    newPost,
    updatePost,
    getUserPosts,
    showDetail,
    changeDetailType,
};
