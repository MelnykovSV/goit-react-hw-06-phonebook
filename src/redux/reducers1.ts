// import { PayloadAction, createReducer } from '@reduxjs/toolkit';

// import { addContact, deleteContact, setFilter } from './actions';

// import { IContact } from '../interfaces';

// const contactsInitialState = localStorage.getItem('contacts')
//   ? JSON.parse(localStorage.getItem('contacts')!)
//   : [];

// export const contactsReducer = createReducer(contactsInitialState, {
//   [addContact.type]: (state, action: PayloadAction<string>) => {
//     return [action.payload, ...state];
//   },
//   [deleteContact.type]: (state, action: PayloadAction<string>) => {
//     const contactId = action.payload;

//     const newState = state.filter((item: IContact) => {
//       return item.id !== contactId;
//     });
//     return newState;
//   },
// });

// export const filterReducer = createReducer('', {
//   [setFilter.type]: (state, action: PayloadAction<string>) => {
//     return action.payload;
//   },
// });
