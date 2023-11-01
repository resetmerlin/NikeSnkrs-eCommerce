import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct, IProductId, IProducts } from '../../types/dto';
import { cartAdded } from '../cart/cartReducers';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),

  endpoints: (build) => ({
    getProducts: build.query<IProducts, void>({
      query: () => '/products',
    }),
    getProduct: build.query<IProductId, void>({
      query: (id) => `/products/${id}`,
    }),
    addToCart: build.query<IProduct, { id: string; qty: number }>({
      query: ({ id, qty }) => `/products/${id}`,
      async onQueryStarted({ id, qty }, api) {
        if (qty && id) {
          const { dispatch, queryFulfilled } = api;
          const { data } = await queryFulfilled;

          const cartData = {
            product: data._id,
            name: data.name,
            price: data.price,
            countInStock: data.countInStock,
            qty,
          };

          dispatch(cartAdded(cartData));
        }
      },
    }),
    userAuthenticated: build.mutation<IProductId, void>({
      query: (email, password) => ({
        url: `/users/login`,
        method: 'POST',
        body: { email, password },
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      async onQueryStarted(email, password, api) {
        const { dispatch, queryFulfilled } = api;
        const { data } = await queryFulfilled;

        console.log(data);
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useAddToCartQuery,
  useUserAuthenticatedMutation,
} = api;
