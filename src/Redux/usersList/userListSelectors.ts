import { RootState } from '../store';

export const getUserListData = (state: RootState) => state.usersList;
export const getLogining = (state: RootState) => state.usersList.logining;
