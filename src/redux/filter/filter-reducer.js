import { createReducer } from '@reduxjs/toolkit';

import { setFilter } from './filter-action';

const initialStore = '';

export const filterReducer = createReducer(initialStore, {
  [setFilter]: (_, { payload }) => payload,
});
