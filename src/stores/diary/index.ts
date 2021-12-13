import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Diary } from './types';

export const diaryApi = createApi({
  reducerPath: 'diaryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
      return headers;
    },
  }),
  tagTypes: ['Diary'],
  endpoints: (builder) => ({
    getDiaries: builder.query<any, { startDate: string; endDate: string }>({
      query: ({ startDate, endDate }) => ({
        url: 'diary',
        params: {
          startDate,
          endDate,
        },
      }),
      providesTags: ['Diary'],
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
  }),
});

export const {
  useAddDiaryMutation,
  useUpdateDiaryMutation,
  useGetDiariesQuery,
} = diaryApi;

export default diaryApi.reducer;
