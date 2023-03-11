import { createAsyncThunk } from "@reduxjs/toolkit";
import { urlSearch } from 'constants/index';
import { api } from 'api';

export const searchCharacter = createAsyncThunk(
  'search',
  async function (value: string) {
    const data = await api(urlSearch + value);
    return data;
  },
);