import { types } from './types';

export const addContact = data => ({
  type: types.ADD_CONTACT,
  payload: data,
});

export const deleteContact = id => ({
  type: types.DELETE_CONTACT,
  payload: id,
});
