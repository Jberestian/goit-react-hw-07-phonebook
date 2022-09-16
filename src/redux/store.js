import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filter-reducer';
import contactsSlice from './items/items-slice';

const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: filterReducer,
  },
});

export default store;
