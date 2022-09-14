import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filter-reducer';
import { contactsReducers } from './items/items-reducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    filter: filterReducer,
  },
});

export default store;
