import { createAsyncThunk } from "@reduxjs/toolkit";
import { urlSearch } from 'constants/index';
import axios from 'axios';

export const searchCharacter = createAsyncThunk(
  'search',
  async function (value: string) {
    const data = await axios.get(urlSearch + value);
    return data;
  },
);