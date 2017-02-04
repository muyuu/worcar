const firebase = require('firebase');
require('../../config/firebase');
require("firebase/auth");
const shortid = require('shortid');
import {NEW_POST, UPDATE_POST, REMOVE_POST, CHANGE_DETAIL_TYPE, GET_USER_POSTS, SHOW_DETAIL} from "../../actions/actionTypes";
import {browserHistory} from 'react-router';

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
        ref.update(updates).then(()=>{
            this.setState({
                addNewPost: true,
                newPostSlug,
            });
        });
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
        ref.update(updates).then(()=>{
            browserHistory.push(`/post/${slug}`);
        });

    }
};

const removePost = {
    type  : REMOVE_POST,
    action: function removePost(data){
        const key = data.key;
        const uid = data.uid;
        const slug = data.slug;

        const updates = {};
        updates[`/post/${key}`] = null;
        updates[`/post-by-slug/${slug}`] = null;
        updates[`/user-post/${uid}/${key}`] = null;

        // remove data
        ref.update(updates).then(()=>{
            browserHistory.push(`/`);
        });
    }
};

const changeDetailType = {
    type: CHANGE_DETAIL_TYPE,
    action: function changeDetailType(showType){
        this.setState({
            showType
        });
    }
};

const getUserPosts = {
    type  : GET_USER_POSTS,
    action: function getUserPosts(){

        // start loading...
        this.setState({
            isDataFetch: true,
            loadedUserPost: true,
        });

        // firebase user post ref
        const userPostsRef = firebase.database().ref(`/user-post/${this.uid}`);

        userPostsRef.orderByChild('updateAt').on('value', data =>{
            const posts = data.val();
            const postList = Object.keys(posts).map(val =>{
                const postData = Object.assign({}, posts[val]);
                postData.key = val;
                return postData;
            });

            this.setState({
                postList,
                isGetUserPosts: true,
                isDataFetch: false,
            });
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
            this.setState({
                showedPost: post,
                showType: showType,
            });
        });
    }
};


export default {
    newPost,
    updatePost,
    removePost,
    getUserPosts,
    showDetail,
    changeDetailType,
};
