import { combineReducers } from '@reduxjs/toolkit';

import { contactsReducers } from './items/items-reducer';
import { filterReducer } from './filter/filter-reducer';

const contactReducer = combineReducers({
  contacts: contactsReducers,
  filter: filterReducer,
});

export const rootReducer = combineReducers({
  contacts: contactReducer,
});
