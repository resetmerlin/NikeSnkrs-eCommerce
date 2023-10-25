import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => '/products',
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

export const { useGetProductsQuery } = api;
