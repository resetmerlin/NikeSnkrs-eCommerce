import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProductId, IProducts } from '../../types/dto';

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
    addOrders: build.mutation({
      query: (body) => ({
        url: `/orders`,
        method: 'POST',
        body,
        headers: { 'Content-Type': 'application/json' },
      }),
    }),
    getOrders: build.query({
      query: (id) => `/api/orders/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = api;
