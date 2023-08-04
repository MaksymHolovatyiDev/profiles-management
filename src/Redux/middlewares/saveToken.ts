import { logOut } from 'Redux/user/userSlice';

export const saveTokenMiddleware =
  (store: any) => (next: any) => (action: any) => {
    console.log(action);
    if (action.type === 'user/setUser' && action?.payload?.token) {
      localStorage.setItem('user', JSON.stringify(action.payload));
    }

    if (
      action.type === 'backendAPI/executeQuery/rejected' &&
      (action?.payload?.status === 403 ||
        action?.payload?.originalStatus === 403)
    ) {
      store.dispatch(logOut());
      localStorage.removeItem('user');
    }

    return next(action);
  };
