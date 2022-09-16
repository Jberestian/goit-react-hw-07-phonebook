import { createReducer } from "@reduxjs/toolkit";
import { setFilter } from "./filter-action";

const initialState = '';

export const filterReducer = createReducer(initialState, {
    [setFilter]: (_, {payload}) => payload
})