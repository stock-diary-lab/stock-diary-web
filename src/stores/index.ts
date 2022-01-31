import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import usersReducer, { userApi } from './user';
import { stockTransactionApi } from './stock-transaction';
import { diaryApi } from './diary';
import { listedStockApi } from './listed-stock';
import { phraseApi } from './phrase';

export const store = configureStore({
  reducer: {
    user: usersReducer,
    [userApi.reducerPath]: userApi.reducer,
    [stockTransactionApi.reducerPath]: stockTransactionApi.reducer,
    [diaryApi.reducerPath]: diaryApi.reducer,
    [listedStockApi.reducerPath]: listedStockApi.reducer,
    [phraseApi.reducerPath]: phraseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(stockTransactionApi.middleware)
      .concat(diaryApi.middleware)
      .concat(listedStockApi.middleware)
      .concat(phraseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
