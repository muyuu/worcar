export default class Actions {
    constructor(dispatcher){
        this.dispatcher = dispatcher;
    }

    loginCheck(){
        this.dispatcher.emit("LOGIN_CHECK");
    }

    signup(email, password){
        const data = {email, password};
        this.dispatcher.emit("SIGNUP", data);
    }

    login(email, password){
        const data = {email, password};
        this.dispatcher.emit("LOGIN", data);
    }

    logout(email, password){
        this.dispatcher.emit("LOGOUT");
    }
}
