import { ListedStock } from '@stores/listed-stock/types';

export interface StockTransaction {
  id?: number;
  quantity: number;
  price: number;
  fee?: number;
  type: 'buy' | 'sell';
  reason: string;
  date: string;
  income?: number;
  incomeRatio?: number;
  listedStock: ListedStock;
}

export interface StockTransactionDto {
  id?: number;
  listedStockId: string;
  quantity: number;
  price: number;
  fee?: number;
  type: 'buy' | 'sell';
  reason: string;
  date: string;
}
