import { Dispatch, SetStateAction, useState } from 'react';
import { DateObj } from './Calendar/types';
import CalendarTab from './CalendarTab';
import SearchBar from '@components/common/SearchBar';
import * as S from './styled';
import { useGetListedStocksQuery } from '@stores/listed-stock';
import { debounce } from '../../utils/debounce';

interface Props {
  date: DateObj;
  setDate: Dispatch<SetStateAction<DateObj>>;
}

function TopBar({ date, setDate }: Props) {
  const [searchValue, setSearchValue] = useState<string>('');

  const { data } = useGetListedStocksQuery({
    name: searchValue,
  });

  const debouncedPrefetch = (name: string) =>
    debounce(() => setSearchValue(name), 400)();

  return (
    <S.TopBarContainer>
      <SearchBar
        isInModal={false}
        placeholder="종목, 키워드 등을 검색하세요"
        onChange={(e) => {
          debouncedPrefetch(e.target.value);
        }}
        searchList={data || []}
        firstKey="name"
        secondKey="id"
      />
      <CalendarTab date={date} setDate={setDate} />
    </S.TopBarContainer>
  );
}

export default TopBar;
