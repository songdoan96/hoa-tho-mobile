import {configureStore} from '@reduxjs/toolkit';
// import {authSlice} from './authSlice';
import authReducer from './AuthSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
