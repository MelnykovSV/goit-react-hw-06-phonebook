import { createReducer } from '@reduxjs/toolkit';

import { addContact, deleteContact, setFilter } from './actions';

const contactsInitialState = localStorage.getItem('contacts')
  ? JSON.parse(localStorage.getItem('contacts'))
  : [];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    return [action.payload, ...state];
  },
  [deleteContact]: (state, action) => {
    const contactId = action.payload;

    const newState = state.filter(item => {
      return item.id !== contactId;
    });
    return newState;
  },
});

export const filterReducer = createReducer('', {
  [setFilter]: (state, action) => {
    return action.payload;
  },
});
