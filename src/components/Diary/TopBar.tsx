import { Dispatch, SetStateAction, useState } from 'react';
import { DateObj } from './Calendar/types';
import CalendarTab from './CalendarTab';
import SearchBar from '@components/common/SearchBar';
import * as S from './styled';
import { debounce } from '../../utils/debounce';
import { useLazySearchTransactionsQuery } from '@stores/stock-transaction';

interface Props {
  date: DateObj;
  setDate: Dispatch<SetStateAction<DateObj>>;
}

function TopBar({ date, setDate }: Props) {
  const [searchValue, setSearchValue] = useState<string>('');

  const [trigger, { data: searchList }] = useLazySearchTransactionsQuery();

  const debouncedPrefetch = (searchValue: string) => debounce(() => trigger({ searchWord: searchValue }), 400)();

  const renderSearchItem = () => {
    if (!searchList) return null;
    return (
      <>
        {searchList.map((searchItem, index) => (
          <S.SearchItem key={index}>
            <S.SearchItemSpan>{new Date(searchItem.date).toLocaleDateString()}</S.SearchItemSpan>
            <span>
              {searchItem.type === 'buy' ? '매수' : '매도'} :
              <S.SearchItemBlueColor> {searchItem.listedStock.name}</S.SearchItemBlueColor>
            </span>
          </S.SearchItem>
        ))}
      </>
    );
  };

  return (
    <S.TopBarContainer>
      <SearchBar
        isInModal={false}
        value={searchValue}
        placeholder="종목, 키워드 등을 검색하세요"
        onChange={(e) => {
          setSearchValue(e.target.value);
          debouncedPrefetch(e.target.value);
        }}
        setValue={setSearchValue}
        searchList={searchList || []}
        renderItem={renderSearchItem}
      />
      <CalendarTab date={date} setDate={setDate} />
    </S.TopBarContainer>
  );
}

export default TopBar;
