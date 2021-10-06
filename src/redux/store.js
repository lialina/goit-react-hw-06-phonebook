// With Redux Toolkit
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { name: 'Aria Stark', number: '459-12-56', id: 'id-1' },
    { name: 'Paul Atreides', number: '443-89-12', id: 'id-2' },
    { name: 'Hermione Granger', number: '645-17-79', id: 'id-3' },
    { name: 'Frodo Baggins', number: '227-91-26', id: 'id-4' },
  ],
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContact(state, action) {
      return { ...state, contacts: [...state.contacts, action.payload] };
    },
    deleteContact(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload,
        ),
      };
    },
  },
});

// The store now has redux-thunk added and the Redux DevTools Extension is turned on
export const store = configureStore({ reducer: phonebookSlice.reducer });

// // Before Redux Toolkit
// import { createStore } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
// import { phoneBook } from './reducer';
// // import { contactsReducer } from './reducer';

// export const store = createStore(phoneBook, devToolsEnhancer());

// // "contactsReducer" when we use switch
// // or "phoneBook" instead of "contactsReducer" after handlers setup
