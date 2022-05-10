import SearchBar from '@components/common/SearchBar';
import { useAddFavoriteStockMutation } from '@stores/favorite-stock';
import { useLazyGetListedStocksQuery } from '@stores/listed-stock';
import { debounce } from '@utils/debounce';
import { Dispatch, SetStateAction } from 'react';
import * as S from './styled';

interface Props {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  setAddActive: Dispatch<SetStateAction<boolean>>;
}

function ListedStockSearchBar({ searchValue, setSearchValue, setAddActive }: Props) {
  const [trigger, { data: listedStocks }] = useLazyGetListedStocksQuery();

  const [addFavoriteStock] = useAddFavoriteStockMutation();
  const debouncedPrefetch = (name: string) => debounce(() => trigger({ name }), 400)();

  const renderItem = () => {
    if (!listedStocks) return null;

    return (
      <>
        {listedStocks.map((searchItem, index) => (
          <S.StockSearchItem
            role="presentation"
            key={index}
            onMouseDown={() => {
              addFavoriteStock({ listedStockId: searchItem.id, isFavorite: true });
              setSearchValue('');
              setAddActive(false);
              // setListedStockId(searchItem.id);
              // setSearchValue(searchItem.name);
            }}
          >
            <span>{searchItem.name}</span>
            <span>{searchItem.id}</span>
          </S.StockSearchItem>
        ))}
      </>
    );
  };

  return (
    <SearchBar
      value={searchValue}
      isInModal={false}
      width={'100%'}
      placeholder="종목을 검색하세요"
      onChange={(e) => {
        setSearchValue(e.target.value);
        debouncedPrefetch(e.target.value);
      }}
      setValue={setSearchValue}
      searchList={listedStocks || []}
      renderItem={renderItem}
    />
  );
}

export default ListedStockSearchBar;
