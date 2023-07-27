import { createSlice } from '@reduxjs/toolkit';
import { backendAPI } from 'Redux/services/backendAPI';
import { profileData } from 'Redux/services/backendTypes';

const initialState: {
  profiles: profileData[];
} = { profiles: [] };

const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        backendAPI.endpoints.GetProfiles.matchFulfilled,
        (state, { payload }) => {
          state.profiles = payload.profiles;
        }
      )
      .addMatcher(
        backendAPI.endpoints.CreateProfiles.matchFulfilled,
        (state, { payload }) => {
          state.profiles = [
            ...state.profiles,
            { ...payload, birthdate: new Date(payload.birthdate).toString() },
          ];
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

export const profilesReducer = profilesSlice.reducer;
