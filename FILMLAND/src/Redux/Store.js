import { combineReducers, configureStore } from '@reduxjs/toolkit'
import MovieReducer from './MovieSlice.js'
import CastReducer from './CastSlice.js'
import GetLatestReducer from './GetLastestSlice.js'
import HeaderReducer from './HeaderSlice.js'


import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'



const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }



const rootReducer = combineReducers(
    {
      Header:HeaderReducer,
      Latest: GetLatestReducer,
      Movies:MovieReducer,
      Casts: CastReducer
    })

    const persistedReducer = persistReducer(persistConfig, rootReducer)

    export const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
    })
    

    export const persistor = persistStore(store)