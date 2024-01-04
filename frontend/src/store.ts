import {
  PreloadedState,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { api } from './features/api/apiSlice';
import { productSlice } from './features/product/productSlice';
import { cartSlice } from './features/cart/cartSlice';
import { userInfoSlice } from './features/user/userInfoSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { addressSlice } from './features/address/addressSlice';
import { orderSlice } from './features/order/orderSlice';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  products: productSlice.reducer,
  carts: cartSlice.reducer,
  userInfo: userInfoSlice.reducer,
  address: addressSlice.reducer,
  orders: orderSlice.reducer,
});

// Persist configuration
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['userInfo', 'carts', 'address'], // Add the slice names you want to persist
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState,
  });
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
const persistor = persistStore(store);

export { store, persistor, setupStore };
