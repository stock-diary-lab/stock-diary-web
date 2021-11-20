import { DateObj } from '@components/Diary/Calendar/types';
import DiaryBoard from '@components/Diary/DiaryBoard';
import StockTable from '@components/Diary/StockTable';
import TopBar from '@components/Diary/TopBar';
import IndexBoard from '@components/Home/IndexBoard';
import NavMenu from '@components/NavMenu';
import { useState } from 'react';
import * as S from './styled';

function Diary() {
  const [date, setDate] = useState<DateObj>({
    year: new Date().getFullYear(),
    month: (new Date().getMonth() + 1) % 12 || 12,
    date: new Date().getDate(),
  });

  return (
    <S.RootContainer>
      <NavMenu />
      <S.Main>
        <TopBar date={date} setDate={setDate} />
        <StockTable stockType="buy" date={date} setDate={setDate} />
        <StockTable stockType="sell" date={date} setDate={setDate} />
        <DiaryBoard />
      </S.Main>
      <IndexBoard />
    </S.RootContainer>
  );
}

export default Diary;
