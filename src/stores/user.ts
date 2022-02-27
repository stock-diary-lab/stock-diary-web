import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from './index';

interface UserState {
  nickname: string;
}

const initialState: UserState = {
  nickname: '',
};

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_HOST,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    loginWithKakao: builder.mutation({
      query: (body) => ({
        url: 'login/kakao',
        method: 'POST',
        body,
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: 'user/me',
      }),
    }),
  }),
});

export const { useLoginWithKakaoMutation, useGetUserQuery } = userApi;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.nickname = action.payload;
    },
  },
});

export const { setName } = userSlice.actions;

export const selectUserName = (state: RootState) => state.user.nickname;

export default userSlice.reducer;
