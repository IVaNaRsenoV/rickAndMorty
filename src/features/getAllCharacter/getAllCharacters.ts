import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from 'api/apiClient';

export const getAllCharacters = createAsyncThunk(
  'getAllCharacters',
  async function () {
    const { data } = await apiClient.get(`?page=${Math.floor(Math.random() * 42) + 1}}`);
    return data;
  },
);