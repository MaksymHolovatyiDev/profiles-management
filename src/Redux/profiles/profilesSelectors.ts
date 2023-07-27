import { RootState } from '../store';

export const getAllProfiles = (state: RootState) => state.profiles.profiles;
