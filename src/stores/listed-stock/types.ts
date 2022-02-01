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

export interface TopStock {
  name: string;
  percent: number;
  largeSector?: string;
  mediumSector?: string;
}

export interface TopSector {
  sector: string;
  percent: number;
  amount: number;
}
