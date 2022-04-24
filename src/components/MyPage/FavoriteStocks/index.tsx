import WhiteContainer from '@components/common/WhiteContainer';
import { useGetFavoriteStocksQuery, useDeleteFavoriteStockMutation } from '@stores/favorite-stock';
import { useState } from 'react';
import ListedStockSearchBar from '../ListedStockSearchBar';
import * as S from './styled';
import * as CommonS from '../styled';

const MAX_LEN = 14;

function FavoriteStocks() {
  const [addActive, setAddActive] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const { data: favoriteStocks } = useGetFavoriteStocksQuery({});
  const [deleteFavoriteStock] = useDeleteFavoriteStockMutation();

  return (
    <S.FavoriteStocksContainer>
      <CommonS.MyPageTitle>최선호종목</CommonS.MyPageTitle>
      <WhiteContainer height="720px">
        <S.FavoriteStockItemContainer onClick={() => setAddActive(false)}>
          {new Array(MAX_LEN).fill(0).map((_, idx) => {
            if (
              favoriteStocks &&
              favoriteStocks.length < MAX_LEN &&
              ((favoriteStocks[idx - 1] && !favoriteStocks[idx]) || (favoriteStocks.length === 0 && idx === 0))
            ) {
              return (
                <S.FavoriteStockItem
                  onClick={(e) => {
                    e.stopPropagation();
                    setAddActive(true);
                  }}
                  key="add"
                >
                  {!addActive && <CommonS.AddBtn>추가</CommonS.AddBtn>}

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
                <S.FavoriteStockTitle>
                  {favoriteStocks && favoriteStocks[idx] && favoriteStocks[idx].listedStock.name}
                </S.FavoriteStockTitle>
                <div style={{ display: 'flex', height: '13px' }}>
                  <span>{favoriteStocks && favoriteStocks[idx] && favoriteStocks[idx].listedStock.id}</span>
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
              {!addActive && <CommonS.AddBtn>추가</CommonS.AddBtn>}
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
    </S.FavoriteStocksContainer>
  );
}

export default FavoriteStocks;
