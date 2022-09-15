import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, removeContact } from './items-operations';

const intitialStore = {
  items: [],
  loading: false,
  error: null,
};

export const contactsReducers = createSlice({
  name: 'contacts',
  intitialStore,
  extraReducers: {
    [fetchContacts.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [fetchContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [addContact.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [addContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    [addContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [removeContact.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [removeContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = store.items.filter(item => item.id !== payload);
    },
    [removeContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default contactsReducers.reducer;
