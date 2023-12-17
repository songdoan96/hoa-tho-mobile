import {createSlice} from '@reduxjs/toolkit';
import axios from '../axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLogin: async (state, action) => {
      const {username, password} = action.payload;
      state.loading = true;
      state.error = null;
      try {
        const {data} = await axios.post('login', {username, password});
        await AsyncStorage.setItem('@ht:user', JSON.stringify(data.user));
        state.user = data.user;
        console.log(data);
        // navigation.replace('Home');
        state.loading = false;
        state.error = null;
      } catch (error) {
        state.loading = false;
        console.log(error.response.data.message);
        state.error = error.response.data.message;
      }
    },
  },
});

export const {authLogin} = authSlice.actions;

export default authSlice.reducer;
