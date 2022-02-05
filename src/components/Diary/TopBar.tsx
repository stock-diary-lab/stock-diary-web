import { Dispatch, SetStateAction, useState } from 'react';
import { DateObj } from './Calendar/types';
import CalendarTab from './CalendarTab';
import SearchBar from '@components/common/SearchBar';
import * as S from './styled';
import { debounce } from '../../utils/debounce';
import { useLazySearchTransactionsQuery } from '@stores/stock-transaction';
import { useLazySearchDiariesQuery } from '@stores/diary';
interface Props {
  date: DateObj;
  setDate: Dispatch<SetStateAction<DateObj>>;
}

function TopBar({ date, setDate }: Props) {
  const [searchValue, setSearchValue] = useState<string>('');

  const [triggerSearchTransactions, { data: transactions }] = useLazySearchTransactionsQuery();
  const [triggerSearchDiaries, { data: diaries }] = useLazySearchDiariesQuery();

  const debouncedPrefetch = (searchValue: string) =>
    debounce(() => {
      triggerSearchDiaries({ searchWord: searchValue });
      triggerSearchTransactions({ searchWord: searchValue });
    }, 400)();

  const handleClickSearchItem = (date: string) => {
    setDate({
      year: new Date(date).getFullYear(),
      month: new Date(date).getMonth() + 1,
      date: new Date(date).getDate(),
    });
  };
  // TODO: 검색어만 색깔 입히기
  const renderSearchItem = () => {
    if (!transactions || !diaries) return null;
    return (
      <>
        {transactions.map((transaction, index) => (
          <S.SearchItem key={index} onMouseDown={() => handleClickSearchItem(transaction.date)}>
            <S.SearchItemSpan>{new Date(transaction.date).toLocaleDateString()} </S.SearchItemSpan>
            <S.SearchItemSpan>
              {transaction.type === 'buy' ? '매수' : '매도'} : {transaction.listedStock.name}
            </S.SearchItemSpan>
          </S.SearchItem>
        ))}
        {diaries.map((diary, index) => (
          <S.SearchItem
            key={index}
            onMouseDown={() => {
              handleClickSearchItem(diary.date);
            }}
          >
            <S.SearchItemSpan>{new Date(diary.date).toLocaleDateString()}</S.SearchItemSpan>
            일지내용 <S.SearchItemSpan> : {diary.content}</S.SearchItemSpan>
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
        searchList={(transactions || []).concat((diaries as any[]) || [])}
        renderItem={renderSearchItem}
      />
      <CalendarTab date={date} setDate={setDate} />
    </S.TopBarContainer>
  );
}

export default TopBar;
