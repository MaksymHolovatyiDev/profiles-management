import { createSlice } from '@reduxjs/toolkit';
import { backendAPI } from 'Redux/services/backendAPI';

const initialState = {
  name: '',
  email: '',
  role: '',
  userExist: false,
  isPending: false,
  logining: false,
};

const usersListSlice = createSlice({
  name: 'usersList',
  initialState,
  reducers: {
    logined: state => {
      state.logining = false;
    },
    updateUser: (_, { payload }) => payload,
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
      .addMatcher(
        backendAPI.endpoints.UpdateUser.matchFulfilled,
        (_, { payload }) => ({
          name: payload.name,
          email: payload.email,
          role: payload.admin ? 'admin' : 'user',
          userExist: true,
          isPending: false,
          logining: false,
        })
      );
  },
});

export const { updateUser, resetUser, logined } = usersListSlice.actions;

export const usersListReducer = usersListSlice.reducer;
