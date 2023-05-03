import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const addContact = createAction(
  'contacts/addContact',
  (name, number) => {
    return {
      payload: {
        id: shortid(),
        name: name,
        number: number,
      },
    };
  }
);

export const deleteContact = createAction('contacts/deleteContact');

export const setFilter = createAction('filter/setFilter');
