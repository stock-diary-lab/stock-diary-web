import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import usersReducer, { userApi } from './user';
import { stockApi } from './stock';
import { diaryApi } from './diary';

export const store = configureStore({
  reducer: {
    user: usersReducer,
    [userApi.reducerPath]: userApi.reducer,
    [stockApi.reducerPath]: stockApi.reducer,
    [diaryApi.reducerPath]: diaryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(stockApi.middleware)
      .concat(diaryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
