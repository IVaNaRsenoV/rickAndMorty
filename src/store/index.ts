import { configureStore, combineReducers } from '@reduxjs/toolkit';
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

import authSlice from 'reducers/auth';
import getAllCharacterSlice from 'reducers/getAllCharacter';
import getInfoPersonSlice from 'reducers/getInfoPerson';

const rootReducers = combineReducers({
  getAll: getAllCharacterSlice,
  setInfoPerson: getInfoPersonSlice,
  auth: authSlice,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer( persistConfig, rootReducers );

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
        ignoredActions: [
            FLUSH,
            REHYDRATE,
            PAUSE,
            PERSIST,
            PURGE,
            REGISTER,
      ],
      },
		}),
});

export const persister = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;