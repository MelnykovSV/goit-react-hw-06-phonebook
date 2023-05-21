import { createSlice } from '@reduxjs/toolkit';

import shortid from 'shortid';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        return [action.payload, ...state];
      },
      prepare(name, number) {
        return {
          payload: {
            id: shortid(),
            name: name,
            number: number,
          },
        };
      },
    },

    deleteContact(state, action) {
      const contactId = action.payload;

      const newState = state.filter(item => {
        return item.id !== contactId;
      });
      return newState;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContact, deleteContact } = contactsSlice.actions;
