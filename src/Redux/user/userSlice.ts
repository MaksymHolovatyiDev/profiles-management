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
    changeMainUserData: (state, { payload }) => {
      state.name = payload.name;
      state.admin = payload.admin;
    },
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
export const { changeMainUserData, logOut, changeTheme } = userSlice.actions;
