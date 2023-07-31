import { createSlice } from '@reduxjs/toolkit';

import { backendAPI } from 'Redux/services/backendAPI';
import { ProfileDataRes } from 'Redux/services/backendTypes';

const initialState: {
  profiles: ProfileDataRes[];
} = { profiles: [] };

const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    profilesReset: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        backendAPI.endpoints.GetProfiles.matchFulfilled,
        (state, { payload }) => {
          state.profiles = payload;
        }
      )
      .addMatcher(
        backendAPI.endpoints.CreateProfiles.matchFulfilled,
        (state, { payload }) => {
          state.profiles = [...state.profiles, payload];
        }
      )
      .addMatcher(
        backendAPI.endpoints.UpdateProfile.matchFulfilled,
        (state, { payload }) => {
          state.profiles = state.profiles.map((el: ProfileDataRes) => {
            if (el._id !== payload._id) {
              return el;
            }
            return payload;
          });
        }
      )
      .addMatcher(
        backendAPI.endpoints.DeleteProfile.matchFulfilled,
        (state, { payload }) => {
          state.profiles = state.profiles.filter(el => el._id !== payload._id);
        }
      );
  },
});

export const { profilesReset } = profilesSlice.actions;

export const profilesReducer = profilesSlice.reducer;
