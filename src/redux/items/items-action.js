import { nanoid } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', (name, number) => {
  return {
    payload: { name, number, id: nanoid() },
  };
});

export const removeContact = createAction('contacts/remove');
