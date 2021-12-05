export interface Stock {
  id?: number;
  name: string;
  quantity: number;
  price: number;
  fee?: number;
  type: 'buy' | 'sell';
  reason: string;
  date: Date;
}
