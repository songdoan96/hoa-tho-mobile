import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  error: null,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
});

export const {increment, decrement} = authSlice.actions;

export default authSlice.reducer;
