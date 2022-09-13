import { createReducer } from '@reduxjs/toolkit';

import { addContact, removeContact } from './items-action';

export const contactsReducers = createReducer([], {
  [addContact]: (store, { payload }) => [...store, payload],
  [removeContact]: (store, { payload }) =>
    store.filter(item => item.id !== payload),
});
