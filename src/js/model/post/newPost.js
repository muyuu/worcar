const firebase = require('firebase');
require("firebase/database");
require("firebase/auth");


const addPost = (state)=>{
    const ref = firebase.database().ref().child('post');
    const newKey = ref.push().key;

    const title = state.title;
    const raw = state.raw;

    let updates = {};
    updates['/post/meta/' + newKey] = {title};
    updates['/user-post/meta/' + newKey] = {title};

};

export {addPost};
