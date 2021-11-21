import { Dispatch, SetStateAction } from 'react';
import { DateObj } from './Calendar/types';
import CalendarTab from './CalendarTab';
import SearchBar from './SearchBar';
import * as S from './styled';

interface Props {
  date: DateObj;
  setDate: Dispatch<SetStateAction<DateObj>>;
}

function TopBar({ date, setDate }: Props) {
  return (
    <S.TopBarContainer>
      <SearchBar />
      <CalendarTab date={date} setDate={setDate} />
    </S.TopBarContainer>
  );
}

export default TopBar;
