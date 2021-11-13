export interface Stock {
  name: string;
  quantity: number;
  price: number;
  fee?: number;
  type: 'buy' | 'sell';
  reason: string;
}
