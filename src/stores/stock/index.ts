import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Stock } from './types';

export const stockApi = createApi({
  reducerPath: 'stockApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
      return headers;
    },
  }),
  tagTypes: ['Stock'],
  endpoints: (builder) => ({
    addStock: builder.mutation<{ message: string }, Stock>({
      query: (body) => ({
        url: 'stock',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Stock'],
    }),
    getStocks: builder.query<
      { [key: string]: Stock[] },
      { startDate: string; endDate: string }
    >({
      query: ({ startDate, endDate }) => ({
        url: 'stock',
        params: {
          startDate,
          endDate,
        },
      }),
      providesTags: ['Stock'],
    }),
  }),
});

export const { useAddStockMutation, useGetStocksQuery, usePrefetch } = stockApi;

export default stockApi.reducer;
