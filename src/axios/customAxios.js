import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.1.12:8000/api';
axios.defaults.timeout = 5000;

// axios.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     console.log('axios', error);
//     return Promise.reject(error);
//   },
// );
export const customAxios = axios;
