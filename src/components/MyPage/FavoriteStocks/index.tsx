import WhiteContainer from '@components/common/WhiteContainer';
import { useGetFavoriteStocksQuery, useDeleteFavoriteStockMutation } from '@stores/favorite-stock';
import { useState } from 'react';
import ListedStockSearchBar from '../ListedStockSearchBar';
import * as S from './styled';

const MAX_LEN = 14;

function FavoriteStocks() {
  const [addActive, setAddActive] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const { data: favoriteStocks } = useGetFavoriteStocksQuery({});
  const [deleteFavoriteStock] = useDeleteFavoriteStockMutation();

  return (
    <>
      <S.FavoriteStockTitle>최선호종목</S.FavoriteStockTitle>
      <WhiteContainer width="30%" height="80%">
        <S.FavoriteStockItemContainer onClick={() => setAddActive(false)}>
          {new Array(MAX_LEN).fill(0).map((_, idx) => {
            if (favoriteStocks && favoriteStocks.length < MAX_LEN && favoriteStocks[idx - 1] && !favoriteStocks[idx]) {
              return (
                <S.FavoriteStockItem
                  onClick={(e) => {
                    e.stopPropagation();
                    setAddActive(true);
                  }}
                >
                  {addActive && (
                    <ListedStockSearchBar
                      searchValue={searchValue}
                      setSearchValue={setSearchValue}
                      setAddActive={setAddActive}
                    />
                  )}
                </S.FavoriteStockItem>
              );
            }
            return (
              <S.FavoriteStockItem key={`${favoriteStocks?.[idx]?.listedStock.name}-${idx}`}>
                <div>{favoriteStocks && favoriteStocks[idx] && favoriteStocks[idx].listedStock.id}</div>
                <div style={{ display: 'flex' }}>
                  <span>{favoriteStocks && favoriteStocks[idx] && favoriteStocks[idx].listedStock.name}</span>
                  {favoriteStocks && favoriteStocks[idx] && (
                    <S.DeleteBtn
                      onClick={() => {
                        deleteFavoriteStock({ id: favoriteStocks[idx].id });
                      }}
                    >
                      삭제
                    </S.DeleteBtn>
                  )}
                </div>
              </S.FavoriteStockItem>
            );
          })}

          {favoriteStocks &&
            favoriteStocks.slice(MAX_LEN).map((favoriteStock) => (
              <S.FavoriteStockItem key={favoriteStock.listedStock.id}>
                <span>{favoriteStock.listedStock.name}</span>
                <span>{favoriteStock.listedStock.id}</span>
              </S.FavoriteStockItem>
            ))}
          {favoriteStocks && favoriteStocks.length >= MAX_LEN && (
            <S.FavoriteStockItem
              onClick={(e) => {
                e.stopPropagation();
                setAddActive(true);
              }}
            >
              {addActive && (
                <ListedStockSearchBar
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  setAddActive={setAddActive}
                />
              )}
            </S.FavoriteStockItem>
          )}
        </S.FavoriteStockItemContainer>
      </WhiteContainer>
    </>
  );
}

export default FavoriteStocks;
