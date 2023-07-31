import { createSlice } from '@reduxjs/toolkit';

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
    setUser: (state, { payload }) => {
      state.id = payload._id;
      state.name = payload.name;
      state.admin = payload.admin;
      state.token = payload.token;
    },
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
});

export const userReducer = userSlice.reducer;
export const { changeMainUserData, logOut, changeTheme, setUser } =
  userSlice.actions;
