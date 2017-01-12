import EventEmitter from './EventEmitter';

const dispatcher = new EventEmitter();

import ActionCreator from '../actions/Actions';
import Sotre from '../stores/Stores';

export const action = new ActionCreator(dispatcher);
export const store = new Sotre(dispatcher);
