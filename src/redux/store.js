import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
// import { contactsReducer } from './reducer';
import { phoneBook } from './reducer';

export const store = createStore(phoneBook, devToolsEnhancer());

// contactsReducer при использовании switch
// или phoneBook вместо contactsReducer после настройки handlers
