import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api/contactsApi';

const isDublicate = ({ name }, items) => {
  const normalizedName = name.toLowerCase();
  const result = items.find(item => {
    return normalizedName === item.name.toLowerCase();
  });
  return Boolean(result);
};
