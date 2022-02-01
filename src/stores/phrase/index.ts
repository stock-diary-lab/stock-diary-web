import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Phrase } from './types';

export const phraseApi = createApi({
  reducerPath: 'phraseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_HOST,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
      return headers;
    },
  }),
  tagTypes: ['Phrase'],
  endpoints: (builder) => ({
    getPhrases: builder.query<Phrase[], {}>({
      query: () => ({
        url: 'phrase',
      }),
      providesTags: ['Phrase'],
    }),
  }),
});

export const { useGetPhrasesQuery } = phraseApi;

export default phraseApi.reducer;
