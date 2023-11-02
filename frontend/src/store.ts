import { configureStore } from '@reduxjs/toolkit';
import { api } from './features/api/apiSlice';
import { productsSlice } from './features/product/productReducers';
import authReducers from './features/auth/authReducers';
import { cartSlice } from './features/cart/cartReducers';
import { userInfoSlice } from './features/user/userReducers';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    products: productsSlice.reducer,
    carts: cartSlice.reducer,
    auth: authReducers,
    userInfo: userInfoSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
