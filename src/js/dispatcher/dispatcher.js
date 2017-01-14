import EventEmitter from './EventEmitter';

const dispatcher = new EventEmitter();

import ActionCreator from '../actions/Actions';
import Sotre from '../stores/Stores';

// set stores
import authSotre from '../stores/auth/authStores';
const stores = Object.assign(
    {},
    authSotre
);

export const action = new ActionCreator(dispatcher);
export const store = new Sotre(dispatcher, stores);

