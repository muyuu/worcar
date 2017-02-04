import EventEmitter from './EventEmitter';
import ActionCreator from '../actions/Actions';
import Store from '../stores/Stores';

// set stores
import authStore, {authProps} from '../stores/auth/authStores';
import postStore, {postProps} from '../stores/post/postStores';
import listStore, {listProps} from '../stores/list/listStores';
const stores = Object.assign(
    {},
    authStore,
    postStore,
    listStore,
);
const props = [].concat(
    authProps,
    postProps,
    listProps,
);

const dispatcher = new EventEmitter();
export const action = new ActionCreator(dispatcher);
export const store = new Store(dispatcher, stores, props);
