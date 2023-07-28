import { RootState } from '../store';

export const getUserId = (state: RootState) => state.user.id;
export const getUserName = (state: RootState) => state.user.name;
export const getAdmin = (state: RootState) => state.user.admin;
export const getToken = (state: RootState) => state.user.token;
export const getTheme = (state: RootState) => state.user.theme;
