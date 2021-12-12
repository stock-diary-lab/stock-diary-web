export enum MarketType {
  KOSPI = 'kospi',
  KOSDAQ = 'kosdaq',
}

export interface ListedStock {
  id: string;
  name: string;
  industry?: string | null;
  market: MarketType;
}
