import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { contactsReducer } from './reducer';

export const store = createStore(contactsReducer, devToolsEnhancer());
