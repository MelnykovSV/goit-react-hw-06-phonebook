import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { persistedReducer } from './slices/contactsSlice';
import { filterReducer } from './slices/filterSlice';

import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// const persistConfig = {
//   key: 'persist-contacts',
//   storage,
//   blacklist: ['filter'],
// };

// import { contactsReducer, filterReducer } from './reducers';

const rootReducer = combineReducers({
  contacts: persistedReducer,
  filter: filterReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
