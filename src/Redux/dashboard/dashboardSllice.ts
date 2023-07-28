import { createSlice } from '@reduxjs/toolkit';
import { backendAPI } from 'Redux/services/backendAPI';
import { IDashboard } from 'Redux/services/backendTypes';

const initialState: IDashboard = { users: 0, profiles: 0, adult: 0 };

const dashboardSlice = createSlice({
  name: 'dasboard',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      backendAPI.endpoints.GetDashboardInfo.matchFulfilled,
      (_, { payload }) => payload
    );
  },
});

export const dashboardReducer = dashboardSlice.reducer;
