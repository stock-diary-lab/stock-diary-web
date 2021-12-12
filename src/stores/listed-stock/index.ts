import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ListedStock } from './types';

export const listedStockApi = createApi({
  reducerPath: 'listedStockApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
      return headers;
    },
  }),
  tagTypes: ['ListedStock'],
  endpoints: (builder) => ({
    getListedStocks: builder.query<ListedStock[], { name: string }>({
      query: ({ name }) => ({
        url: 'listed-stock',
        params: {
          name,
        },
      }),
      providesTags: ['ListedStock'],
    }),
  }),
});

export const { useGetListedStocksQuery, usePrefetch } = listedStockApi;

export default listedStockApi.reducer;