import { createReducer } from '@reduxjs/toolkit';

import { addContact, removeContact, fetchContacts } from './items-action';

export const contactsReducers = createReducer([], {
  [fetchContacts]: async store => {},
  [addContact]: (store, { payload }) => [...store, payload],
  [removeContact]: (store, { payload }) =>
    store.filter(item => item.id !== payload),
});
