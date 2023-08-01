import { RootState } from 'Redux/store';

export const getCurrentUserData = (state: RootState) => state.currentUser;
export const getScrollPosition = (state: RootState) =>
  state.currentUser.scrollPosition;
