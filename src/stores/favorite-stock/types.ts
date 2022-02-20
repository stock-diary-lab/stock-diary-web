import { ListedStock } from '@stores/listed-stock/types';

export interface FavoriteStock {
  id: number;
  isFavorite: boolean;
  listedStock: ListedStock;
}

export interface FavoriteStockDto {
  isFavorite: boolean;
  listedStockId: string;
}
