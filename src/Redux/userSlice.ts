import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    name: 'Test',
    admin: true,
    token: null,
  },
  reducers: {},
});

export const userReducer = userSlice.reducer;
