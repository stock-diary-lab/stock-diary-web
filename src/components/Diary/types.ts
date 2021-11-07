export interface Stock {
  name: string;
  quantity: number;
  price: number;
  type: 'buy' | 'sell';
  reason: string;
}
