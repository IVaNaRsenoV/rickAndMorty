import { createAsyncThunk } from "@reduxjs/toolkit";

import { url } from 'constants/index';
import { api } from 'api';

export const getAllCharacters = createAsyncThunk(
  'getAllCharacters',
  async function () {
    const data = await api(url);
    return data;
  },
);