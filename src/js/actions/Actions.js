export default class Actions {
    constructor(dispatcher){
        this.dispatcher = dispatcher;
    }

    loginCheck(){
        this.dispatcher.emit("LOGIN_CHECK");
    }

    login(email, password){
        const data = {email: password};
        this.dispatcher.emit("LOGIN", data);
    }
}
