import EventEmitter from './EventEmitter';
import ActionCreator from '../actions/Actions';
import Sotre from '../stores/Stores';

// set stores
import authSotre from '../stores/auth/authStores';
import postSotre from '../stores/post/postStores';
const stores = Object.assign(
    {},
    authSotre,
    postSotre,
);

const dispatcher = new EventEmitter();
export const action = new ActionCreator(dispatcher);
export const store = new Sotre(dispatcher, stores);

