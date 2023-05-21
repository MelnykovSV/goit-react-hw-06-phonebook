import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IContact, ContactsState } from '../../interfaces';

import shortid from 'shortid';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

const contactsInitialState = [] as ContactsState;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action: PayloadAction<IContact>) {
        state.unshift(action.payload);
      },
      prepare(name: string, number: string) {
        return {
          payload: {
            id: shortid(),
            name: name,
            number: number,
          },
        };
      },
    },

    deleteContact(state, action: PayloadAction<string>) {
      const contactId = action.payload;

      const newState = state.filter((item: IContact) => {
        return item.id !== contactId;
      });
      return newState;
    },
  },
});

// export const contactsReducer = contactsSlice.reducer;

const persistConfig = {
  key: 'persist-contacts',
  storage,
  // blacklist: ['filter'],
};

export const persistedReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
