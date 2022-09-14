import axios from 'axios';

const instance = axios.create({
  baseUrl: 'https://63218c7382f8687273b3f055.mockapi.io/contacts',
});

export const getContact = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/', data);
  return result;
};

export const removeContact = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
