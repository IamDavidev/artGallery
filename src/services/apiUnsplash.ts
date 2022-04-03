import axios, { AxiosInstance } from 'axios';

export const KEY_API = '6t-ZtDGcWoOMOHDoJ8mAoPQAt4hUSgTrE4dJQx3wdj4';

interface propsQueryUnsplash {
  query: string;
}

export const API_UNSPLASH: AxiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com',
});
