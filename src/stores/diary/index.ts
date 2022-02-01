import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Diary } from './types';

export const diaryApi = createApi({
  reducerPath: 'diaryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_HOST,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
      return headers;
    },
  }),
  tagTypes: ['Diary'],
  endpoints: (builder) => ({
    getDiaries: builder.query<{ [key: string]: Diary[] }, { startDate: string; endDate: string }>({
      query: ({ startDate, endDate }) => ({
        url: 'diary',
        params: {
          startDate,
          endDate,
        },
      }),
      providesTags: ['Diary'],
    }),
    searchDiaries: builder.query<Diary[], { searchWord: string }>({
      query: ({ searchWord }) => ({
        url: 'diary/search',
        params: {
          searchWord,
        },
      }),
    }),
    addDiary: builder.mutation<{ message: string }, Diary>({
      query: (body) => ({
        url: 'diary',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Diary'],
    }),
    updateDiary: builder.mutation<{ message: string }, Partial<Diary>>({
      query: (body) => ({
        url: `diary/${body.id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Diary'],
    }),
    deleteDiary: builder.mutation<{ message: string }, { id: number }>({
      query: (body) => ({
        url: `diary/${body.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Diary'],
    }),
  }),
});

export const {
  useAddDiaryMutation,
  useUpdateDiaryMutation,
  useGetDiariesQuery,
  useDeleteDiaryMutation,
  useLazySearchDiariesQuery,
} = diaryApi;

export default diaryApi.reducer;
