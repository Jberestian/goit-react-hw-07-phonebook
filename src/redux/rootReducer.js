import { combineReducers } from "@reduxjs/toolkit";
import { contactsReducer } from "./items/items-reducer";
import { filterReducer } from "./filter/filter-reducer";

const contactReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});

export const rootReducer = combineReducers({
    contacts: contactReducer
})