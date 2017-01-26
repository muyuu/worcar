// @flow
import EventEmitter from "../dispatcher/EventEmitter";

export default class Store extends EventEmitter {
    // dispatcherを受け取る
    constructor(dispatcher: Object, obj: Object, props: Array<Object>){
        super();
        this.state = {};
        this.attachMethod(obj, dispatcher);
        this.setProps(props);
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

    setProps(getter: Array<Object>){
        if (!getter) return;
        getter.forEach( val => {
            this.__defineGetter__(val.name, val.getter);
            this.__defineSetter__(val.name, val.setter);
        });
    }

    /**
     * update Store.state method
     * @param changedState
     */
    setState(changedState: Object){
        this.state = Object.assign({}, this.state, changedState);
        this.emit('UPDATE_STORE', this.state);
        return;
    }
}
