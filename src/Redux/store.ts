import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { backendAPI } from './services/backendAPI';
import { userReducer } from './user/userSlice';
import { profilesReducer } from './profiles/profilesSlice';
import { saveTokenMiddleware } from './middlewares/saveToken';
import { dashboardReducer } from './dashboard/dashboardSllice';
import { usersListReducer } from './usersList/usersListSlice';

const persistConfig = {
  key: 'user',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);
const ignoreActions: any = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

export const store = configureStore({
  reducer: {
    [backendAPI.reducerPath]: backendAPI.reducer,
    user: persistedReducer,
    profiles: profilesReducer,
    dashboard: dashboardReducer,
    usersList: usersListReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions,
      },
    })
      .concat(backendAPI.middleware)
      .concat(saveTokenMiddleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
