import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api/character';

export const controller = new AbortController();
export const config = {
  baseURL,
  signal: controller.signal,
};

export const apiClient = axios.create(config);