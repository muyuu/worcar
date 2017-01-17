// @flow
import EventEmitter from "../dispatcher/EventEmitter";

export default class Store extends EventEmitter {
    // dispatcherを受け取る
    constructor(dispatcher: Object, obj: Object){
        super();
        this.attachMethod(obj, dispatcher);
    }


    attachMethod(functions: Object, dispatcher: Object){
        Object.keys(functions).forEach((methodName: string) =>{
            const type = functions[methodName].type;
            const method = functions[methodName].action;

            this.setMethod(type, methodName, method, dispatcher);
        });

    }

    setMethod(type: string, methodName: string, method: Function, dispatcher: Object){
        this.__proto__[methodName] = method;
        dispatcher.on(type, this[methodName].bind(this));
    }

    getCount(){
        return this.count;
    }
}
