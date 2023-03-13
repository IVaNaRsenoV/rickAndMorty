import { createAsyncThunk } from "@reduxjs/toolkit";
import { url } from 'constants/index';
import axios from 'axios';

export const getAllCharacters = createAsyncThunk(
  'getAllCharacters',
  async function () {
    const data = await axios.get(url);
    return data;
  },
);