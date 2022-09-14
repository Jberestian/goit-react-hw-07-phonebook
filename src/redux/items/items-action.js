import { nanoid } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

import axios from 'axios';

export const addContact = createAction('contacts/add', (name, number) => {
  return {
    payload: { name, number, id: nanoid() },
  };
});

export const removeContact = createAction('contacts/remove');

export const fetchContacts = createAction('contacts/fetch', () => {
  axios
    .get('https://63218c7382f8687273b3f055.mockapi.io/contacts')
    .then(({ data }) => {
      return {
        payload: {
          data,
        },
      };
    })
    .catch(error => console.log(error.message));
});
