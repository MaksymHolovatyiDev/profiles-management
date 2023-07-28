import { createSlice } from '@reduxjs/toolkit';
import { backendAPI } from 'Redux/services/backendAPI';

const initialState = {
  id: '',
  name: '',
  admin: false,
  token: '',
  theme: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeTheme: (state, { payload }) => {
      state.theme = payload;
    },
    logOut() {
      return { ...initialState };
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        backendAPI.endpoints.SignUp.matchFulfilled,
        (state, { payload }) => {
          state.id = payload._id;
          state.name = payload.name;
          state.admin = payload.admin;
          state.token = payload.token;
        }
      )
      .addMatcher(
        backendAPI.endpoints.SignIn.matchFulfilled,
        (state, { payload }) => {
          state.id = payload._id;
          state.name = payload.name;
          state.admin = payload.admin;
          state.token = payload.token;
        }
      );
  },
});

export const userReducer = userSlice.reducer;
export const { logOut, changeTheme } = userSlice.actions;
