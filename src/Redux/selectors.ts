import { RootState } from './store';

export const getAdmin = (state: RootState) => state.user.admin;
