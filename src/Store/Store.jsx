import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import { setupListeners } from '@reduxjs/toolkit/query'
import storage from 'redux-persist/lib/storage'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  
   
const persistConfig = {
  key: 'root',
  storage: storage,
}
const persistedReducer = persistReducer(persistConfig, CartSlice)


const store = configureStore({
  reducer: {cart: persistedReducer},
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })


setupListeners(store.dispatch)


export default store