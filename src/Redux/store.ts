import storage from 'redux-persist/lib/storage';
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

import { backendAPI } from 'Redux/services/backendAPI';
import { userReducer } from 'Redux/user/userSlice';
import { profilesReducer } from 'Redux/profiles/profilesSlice';
import { currentUserReducer } from 'Redux/currentUser/currentUserSlice';
import { saveTokenMiddleware } from 'Redux/middlewares/saveToken';

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
    currentUser: currentUserReducer,
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
