import axios, { AxiosInstance } from 'axios';

// export const KEY_API = '7DkFiJKBo9_jxN0S1wcn51CtNEv5r4oeeY_o1IXH8oM';

export const API_UNSPLASH: AxiosInstance = axios.create({
	baseURL: 'https://api.unsplash.com',
});
