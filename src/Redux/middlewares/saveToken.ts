import { logOut } from 'Redux/user/userSlice';

export const saveTokenMiddleware =
  (store: any) => (next: any) => (action: any) => {
    if (action.type === 'user/setUser' && action?.payload?.token) {
      localStorage.setItem('user', JSON.stringify(action.payload));
    }

    if (
      action.type === 'backendAPI/executeQuery/rejected' &&
      (action?.payload?.status === 401 ||
        action?.payload?.originalStatus === 401)
    ) {
      store.dispatch(logOut());
      localStorage.removeItem('user');
    }

    return next(action);
  };
