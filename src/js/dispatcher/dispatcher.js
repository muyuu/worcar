import EventEmitter from './EventEmitter';
import ActionCreator from '../actions/Actions';
import Sotre from '../stores/Stores';

// set stores
import authSotre, {authProps} from '../stores/auth/authStores';
import postSotre, {postProps} from '../stores/post/postStores';
const stores = Object.assign(
    {},
    authSotre,
    postSotre,
);
const props = [].concat(
    authProps,
    postProps,
);

const dispatcher = new EventEmitter();
export const action = new ActionCreator(dispatcher);
export const store = new Sotre(dispatcher, stores, props);
