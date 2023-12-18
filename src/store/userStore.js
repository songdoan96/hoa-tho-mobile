import {create} from 'zustand';
import {customAxios} from '../axios/customAxios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: null,
  loading: false,
  error: null,
};
export const userStore = create(set => ({
  initialState,
  getUser: () => {},
  authLogin: async (username, password, navigation) => {
    set(state => ({...state, loading: true}));
    try {
      const {data} = await customAxios.post('login', {username, password});
      console.log(data);
      await AsyncStorage.setItem('@ht:user', JSON.stringify(data.user));
      await AsyncStorage.setItem('@ht:token', data.token);

      set(state => ({...state, user: data.user, error: null}));
      navigation.replace('Main');
    } catch (error) {
      console.log(error.response.data.message);
      set(state => ({...state, error: error.response.data.message}));
    }
    set(state => ({...state, loading: false}));
  },
  authLogout: async navigation => {
    console.log('logout');
    // await AsyncStorage.removeItem('@ht:user');
    // await AsyncStorage.removeItem('@ht:token');
    set(state => ({...state, loading: true}));
    try {
      const token = await AsyncStorage.getItem('@ht:token');
      console.log(token);
      await customAxios.post(
        'logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      await AsyncStorage.removeItem('@ht:user');
      await AsyncStorage.removeItem('@ht:token');
      set(state => ({...state, user: null}));
      navigation.replace('Splash');
    } catch (error) {
      console.log(error);
      set(state => ({...state, error: error.response.data.message}));
    }
    set(state => ({...state, loading: false}));
  },
}));
