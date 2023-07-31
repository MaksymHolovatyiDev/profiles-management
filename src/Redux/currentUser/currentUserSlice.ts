import { createSlice } from '@reduxjs/toolkit';

import { backendAPI } from 'Redux/services/backendAPI';

const initialState = {
  name: '',
  email: '',
  role: '',
  scrollPosition: 0,
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }) => {
      state.scrollPosition = payload;
    },
    resetUser: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        backendAPI.endpoints.GetCurrentUser.matchFulfilled,
        (state, { payload }) => {
          state.name = payload.name;
          state.email = payload.email;
          state.role = payload.admin ? 'admin' : 'user';
        }
      )
      .addMatcher(
        backendAPI.endpoints.UpdateUser.matchFulfilled,
        (state, { payload }) => {
          state.name = payload.name;
          state.email = payload.email;
          state.role = payload.admin ? 'admin' : 'user';
        }
      );
  },
});

export const { resetUser, setScrollPosition } = currentUserSlice.actions;

export const currentUserReducer = currentUserSlice.reducer;
