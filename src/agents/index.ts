import axios, {
  AxiosRequestHeaders,
  AxiosResponse,
  AxiosRequestConfig,
} from 'axios';

const authHeader = (): AxiosRequestHeaders => {
  const token = '';
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const axiosInstance = axios.create({
  headers: authHeader(),
});

const response = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string, options?: AxiosRequestConfig) =>
    axiosInstance.get(url, options).then(response),
  post: (url: string, data: any, options?: AxiosRequestConfig) =>
    axiosInstance.post(url, data, options).then(response),
  put: (url: string, data: any, options?: AxiosRequestConfig) =>
    axiosInstance.put(url, data, options).then(response),
  patch: (url: string, data: any, options?: AxiosRequestConfig) =>
    axiosInstance.patch(url, data, options).then(response),
  delete: (url: string, options?: AxiosRequestConfig) =>
    axiosInstance.delete(url, options).then(response),
};

export const Store = {
  getProducts: () => requests.get('https://fakestoreapi.com/products'),
};

export const User = {
  getUsers: () => console.log('hello'),
};
