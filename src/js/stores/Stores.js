// @flow
import EventEmitter from "../dispatcher/EventEmitter";

export default class Store extends EventEmitter {
    // dispatcherを受け取る
    constructor(dispatcher: Object, obj: Object){
        super();
        this.state = {};
        this.attachMethod(obj, dispatcher);
    }

    attachMethod(functions: Object, dispatcher: Object){
        Object.keys(functions).forEach((methodName: string) =>{
            const type = functions[methodName].type;
            const method = functions[methodName].action;
            const getter = functions[methodName].getter;

            this.setMethod(type, methodName, method, dispatcher);
            this.setGetter(getter);
        });
    }

    setMethod(type: string, methodName: string, method: Function, dispatcher: Object){
        this.__proto__[methodName] = method;
        dispatcher.on(type, this[methodName].bind(this));
    }

    setGetter(getter: Array){
        if (!getter) return;
        getter.forEach( val => this.__defineGetter__(val.name, val.action) );
    }
}
