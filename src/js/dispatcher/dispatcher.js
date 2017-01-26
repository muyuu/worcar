import EventEmitter from './EventEmitter';
import ActionCreator from '../actions/Actions';
import Store from '../stores/Stores';

// set stores
import authStore, {authProps} from '../stores/auth/authStores';
import postStore, {postProps} from '../stores/post/postStores';
const stores = Object.assign(
    {},
    authStore,
    postStore,
);
const props = [].concat(
    authProps,
    postProps,
);

const dispatcher = new EventEmitter();
export const action = new ActionCreator(dispatcher);
export const store = new Store(dispatcher, stores, props);
