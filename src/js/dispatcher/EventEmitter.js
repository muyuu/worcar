export default class EventEmitter {
    constructor(){
        this._handlers = {};
    }

    on(type, handler){
        if(typeof this._handlers[type] === 'undefined'){
            this._handlers[type] = [];
        }
        this._handlers[type].push(handler);
    }

    emit(type, data){
        let handlers = this._handlers[type] || [];
        for (let i = 0; i < handlers.length; i++){
            let handler = handlers[i];
            handler.call(this, data);
        }
    }
}

