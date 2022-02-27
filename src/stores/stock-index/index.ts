import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { StockIndex } from './types';

export const stockIndexApi = createApi({
  reducerPath: 'stockIndexApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_HOST,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${localStorage.getItem('token') || sessionStorage.getItem('token')}`);
      return headers;
    },
  }),
  tagTypes: ['StockIndex'],
  endpoints: (builder) => ({
    getStockIndexes: builder.query<StockIndex[], {}>({
      query: () => ({
        url: 'stock-index',
      }),
      providesTags: ['StockIndex'],
    }),
  }),
});

export const { useGetStockIndexesQuery } = stockIndexApi;

export default stockIndexApi.reducer;
