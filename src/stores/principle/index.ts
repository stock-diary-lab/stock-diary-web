import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Principle, PrincipleDto } from './types';

export const principleApi = createApi({
  reducerPath: 'principleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_HOST,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
      return headers;
    },
  }),
  tagTypes: ['Principle'],
  endpoints: (builder) => ({
    getPrinciples: builder.query<Principle[], {}>({
      query: () => ({
        url: 'principle',
      }),
      providesTags: ['Principle'],
    }),
    addPrinciple: builder.mutation<{ message: string }, PrincipleDto>({
      query: (body) => ({
        url: 'principle',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Principle'],
    }),
    updatePrinciple: builder.mutation<{ message: string }, { id: number; content: string }>({
      query: (body) => ({
        url: `principle/${body.id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Principle'],
    }),
    deletePrinciple: builder.mutation<{ message: string }, { id: number }>({
      query: (body) => ({
        url: `principle/${body.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Principle'],
    }),
  }),
});

export const {
  useGetPrinciplesQuery,
  useAddPrincipleMutation,
  useUpdatePrincipleMutation,
  useDeletePrincipleMutation,
} = principleApi;

export default principleApi.reducer;
