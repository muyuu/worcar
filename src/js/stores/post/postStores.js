const firebase = require('firebase');
require('../../config/firebase');
require("firebase/auth");
import {NEW_POST, GET_USER_POSTS, SHOW_DETAIL} from "../../actions/actionTypes";

// getter setter
export const postProps = [];


const newPost = {
    type  : NEW_POST,
    action: function newPost(data){
        const uid = data.uid;

        const ref = firebase.database().ref();
        const newPostKey = ref.child('post').push().key;

        // make new post
        const updates = {};
        updates[`/post/${newPostKey}`] = data;
        updates[`/user-post/${uid}/${newPostKey}`] = data;

        // post data
        ref.update(updates);

        this.emit(NEW_POST);
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
    action: function showDetail(key){
        const detailPost = firebase.database().ref(`/post/${key}`);
        detailPost.on('value', data=>{
            const post = data.val();
            this.emit(SHOW_DETAIL, post);

        });
    }
};


export default {
    newPost,
    getUserPosts,
    showDetail,
};
