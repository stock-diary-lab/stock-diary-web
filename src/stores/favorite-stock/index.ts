import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FavoriteStock, FavoriteStockDto } from './types';

export const favoriteStockApi = createApi({
  reducerPath: 'favoriteStockApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_HOST,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${localStorage.getItem('token') || sessionStorage.getItem('token')}`);
      return headers;
    },
  }),
  tagTypes: ['FavoriteStock'],
  endpoints: (builder) => ({
    getFavoriteStocks: builder.query<FavoriteStock[], {}>({
      query: () => ({
        url: 'favorite-stock',
      }),
      providesTags: ['FavoriteStock'],
    }),
    addFavoriteStock: builder.mutation<{ message: string }, FavoriteStockDto>({
      query: (body) => ({
        url: 'favorite-stock',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['FavoriteStock'],
    }),
    deleteFavoriteStock: builder.mutation<{ message: string }, { id: number }>({
      query: (body) => ({
        url: `favorite-stock/${body.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['FavoriteStock'],
    }),
  }),
});

export const { useGetFavoriteStocksQuery, useAddFavoriteStockMutation, useDeleteFavoriteStockMutation } =
  favoriteStockApi;

export default favoriteStockApi.reducer;
