const firebase = require('firebase');
require('../../config/firebase');
require("firebase/auth");
import {NEW_POST} from "../../actions/actionTypes";

export const postProps = [
];


const newPost = {
    type: NEW_POST,
    action: function newPost(data){
        const uid = data.uid;
        const post = {
            title: data.title,
            raw: data.raw,
            createdAt: data.createdAt,
        }
        const newPostKey = firebase.database().ref().child('post').push().key;
        const updates = {};
        updates[`/post/${newPostKey}`] = data;
        updates[`/user-post/${uid}/${newPostKey}`] = data;
        firebase.database().ref().update(updates);
        this.emit(NEW_POST);
    }
};


export default {
    newPost,
};
