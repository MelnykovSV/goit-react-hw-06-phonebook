import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';
import { IContact } from '../../interfaces';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { IState } from '../../interfaces';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [] as IContact[],
  reducers: {
    addContact: {
      reducer: (state, action: PayloadAction<IContact>) => {
        state.unshift(action.payload);
      },
      prepare: (name: string, phone: string) => {
        console.log(name);
        console.log(phone);
        return {
          payload: {
            id: shortid(),
            name: name,
            phone: phone,
          },
        };
      },
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      const contactId = action.payload;
      const newState = state.filter(item => item.id !== contactId);
      return newState;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

export const getContacts = (state: IState) => state.contacts;
