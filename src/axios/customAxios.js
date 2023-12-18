import axios from 'axios';
import {Alert, BackHandler} from 'react-native';
import {userStore} from '../store/userStore';

axios.defaults.baseURL = 'http://192.168.1.12:8000/api';
axios.defaults.timeout = 5000;

// axios.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     const {loading} = userStore();
//     console.log('axios', error);
//     Alert.alert(
//       'Thoát ứng dụng',
//       'Bạn có chắc chắn muốn thoát khỏi ứng dụng?',
//       [
//         {text: 'Hủy', onPress: () => {}, style: 'cancel'},
//         {text: 'Đồng ý', onPress: () => BackHandler.exitApp()},
//       ],
//       {cancelable: false},
//     );
//     return Promise.reject(error);
//   },
// );
export const customAxios = axios;
