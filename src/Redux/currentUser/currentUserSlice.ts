import { createSlice } from '@reduxjs/toolkit';

import { backendAPI } from 'Redux/services/backendAPI';

const initialState = {
  name: '',
  email: '',
  role: '',
  userExist: false,
  isPending: false,
  logining: false,
  scrollPosition: 0,
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    logined: state => {
      state.logining = false;
    },
    setScrollPosition: (state, { payload }) => {
      state.scrollPosition = payload;
    },
    resetUser: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addMatcher(backendAPI.endpoints.SignUp.matchFulfilled, state => {
        state.logining = true;
      })
      .addMatcher(backendAPI.endpoints.SignIn.matchFulfilled, state => {
        state.logining = true;
      })
      .addMatcher(backendAPI.endpoints.GetProfiles.matchPending, state => {
        state.isPending = true;
      })
      .addMatcher(backendAPI.endpoints.GetProfiles.matchFulfilled, state => {
        state.isPending = false;
      })
      .addMatcher(backendAPI.endpoints.GetProfiles.matchRejected, state => {
        state.isPending = false;
      })
      .addMatcher(backendAPI.endpoints.GetCurrentUser.matchPending, state => {
        state.isPending = true;
      })
      .addMatcher(
        backendAPI.endpoints.GetCurrentUser.matchFulfilled,
        (state, { payload }) => {
          state.name = payload.name;
          state.email = payload.email;
          state.role = payload.admin ? 'admin' : 'user';
          state.userExist = true;
          state.isPending = false;
        }
      )
      .addMatcher(backendAPI.endpoints.GetCurrentUser.matchRejected, state => {
        state.isPending = false;
      })
      .addMatcher(backendAPI.endpoints.UpdateUser.matchPending, state => {
        state.isPending = true;
      })
      .addMatcher(
        backendAPI.endpoints.UpdateUser.matchFulfilled,
        (state, { payload }) => {
          state.name = payload.name;
          state.email = payload.email;
          state.role = payload.admin ? 'admin' : 'user';
          state.isPending = false;
        }
      )
      .addMatcher(backendAPI.endpoints.UpdateUser.matchPending, state => {
        state.isPending = false;
      });
  },
});

export const { resetUser, logined, setScrollPosition } =
  currentUserSlice.actions;

export const currentUserReducer = currentUserSlice.reducer;
