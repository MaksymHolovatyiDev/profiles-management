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

const usersListSlice = createSlice({
  name: 'usersList',
  initialState,
  reducers: {
    logined: state => {
      state.logining = false;
    },
    setScrollPosition: (state, { payload }) => {
      state.scrollPosition = payload;
    },
    updateUser: (state, { payload }) => ({ ...state, ...payload }),
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
        (state, { payload }) => {
          state.name = payload.name;
          state.email = payload.email;
          state.role = payload.admin ? 'admin' : 'user';
          state.userExist = true;
          state.isPending = false;
          state.logining = false;
        }
      );
  },
});

export const { updateUser, resetUser, logined, setScrollPosition } =
  usersListSlice.actions;

export const usersListReducer = usersListSlice.reducer;
