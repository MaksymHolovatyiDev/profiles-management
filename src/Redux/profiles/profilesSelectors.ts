import { RootState } from 'Redux/store';

export const getAllProfiles = (state: RootState) => state.profiles.profiles;
