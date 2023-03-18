import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from 'api/apiClient';

export const searchCharacter = createAsyncThunk(
  'search',
  async function (value: string) {
    const { data } = await apiClient.get(`?name=${value}`);
    return data;
  },
);