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
    getStocks: builder.query<Stock[], string>({
      query: (date) => ({
        url: 'stock',
        params: {
          date,
        },
      }),
      providesTags: ['Stock'],
    }),
  }),
});

export const { useAddStockMutation, useGetStocksQuery } = stockApi;

export default stockApi.reducer;
