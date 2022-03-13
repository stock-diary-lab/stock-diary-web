import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Index } from '@stores/favorite-stock/types';
import { TopSector, TopStock } from '@stores/listed-stock/types';
import { StockTransaction, StockTransactionDto } from './types';

export const stockTransactionApi = createApi({
  reducerPath: 'stockTransactionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_HOST,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${localStorage.getItem('token') || sessionStorage.getItem('token')}`);
      return headers;
    },
  }),
  tagTypes: ['StockTransaction'],
  endpoints: (builder) => ({
    addStockTransaction: builder.mutation<{ message: string }, StockTransactionDto>({
      query: (body) => ({
        url: 'stock-transaction',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['StockTransaction'],
    }),
    getStockTransactions: builder.query<{ [key: string]: StockTransaction[] }, { startDate: string; endDate: string }>({
      query: ({ startDate, endDate }) => ({
        url: 'stock-transaction',
        params: {
          startDate,
          endDate,
        },
      }),
      providesTags: ['StockTransaction'],
    }),
    searchTransactions: builder.query<StockTransaction[], { searchWord: string }>({
      query: ({ searchWord }) => ({
        url: 'stock-transaction/search',
        params: {
          searchWord,
        },
      }),
    }),
    updateStockTransaction: builder.mutation<{ message: string }, Partial<StockTransactionDto>>({
      query: (body) => ({
        url: `stock-transaction/${body.id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['StockTransaction'],
    }),
    deleteStockTransaction: builder.mutation<{ message: string }, { id: number }>({
      query: (body) => ({
        url: `stock-transaction/${body.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['StockTransaction'],
    }),
    getTopFive: builder.query<{ topFiveStocks: TopStock[]; topFiveSectors: TopSector[] }, {}>({
      query: () => ({
        url: 'bought-stock/top5',
      }),
      providesTags: ['StockTransaction'],
    }),
    getBoughtStockIndexes: builder.query<Index[], {}>({
      query: () => ({
        url: 'bought-stock/indexes',
      }),
      providesTags: ['StockTransaction'],
    }),
  }),
});

export const {
  useAddStockTransactionMutation,
  useGetStockTransactionsQuery,
  useSearchTransactionsQuery,
  useLazySearchTransactionsQuery,
  useUpdateStockTransactionMutation,
  useDeleteStockTransactionMutation,
  useGetTopFiveQuery,
  useGetBoughtStockIndexesQuery,
} = stockTransactionApi;

export default stockTransactionApi.reducer;
