import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://632448ec5c1b435727a4d9f7.mockapi.io/contacts',
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
