const firebase = require('firebase');
require('./config');
require("firebase/auth");
require("firebase/database");


// user
const user = firebase.auth().currentUser;
console.log(user);

// on auth changed
firebase.auth().onAuthStateChanged((user)=>{
    "use strict";
    if (user){
        console.log('already login');
    } else {
        console.log("not login");
    }
});


const signup = (email, password)=>{
    firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((error)=>{
            "use strict";
            const errorCode = error.code;
            const errorMessage = error.message;
        });
};


const login = (email, password)=>{
    firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .catch((error)=>{
            "use strict";
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
};


const logout = ()=>{
    firebase.auth().signOut().then(()=>{
        console.log('sign out');
    }, (error)=>{
        console.log("error! not sign out");
    });
};

export {signup, login, logout};
