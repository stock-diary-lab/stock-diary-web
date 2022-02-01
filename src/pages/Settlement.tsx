import { useState } from 'react';
import NavMenu from '@components/NavMenu';
import * as S from './styled';
import PeriodTable from '@components/Settlement/PeriodTable';
import DetailHistoryTable from '@components/Settlement/DetailHistoryTable';
import styled from '@styles/theme-components';

interface DateObj {
  year: number;
  month: number;
  date: number;
}
// 결산페이지
function Settlement() {
  const [range, setRange] = useState<{ prev: DateObj; next: DateObj }>({
    prev: {
      year: new Date().getMonth() ? new Date().getFullYear() : new Date().getFullYear() - 1,
      month: new Date().getMonth() % 12 || 12,
      date: new Date().getDate(),
    },
    next: {
      year: new Date().getFullYear(),
      month: (new Date().getMonth() + 1) % 12 || 12,
      date: new Date().getDate(),
    },
  });

  return (
    <S.RootContainer>
      <NavMenu />
      <S.Main>
        <TopContainer>
          <PeriodTable range={range} setRange={setRange} />
          {/* <StockNameTable /> */}
        </TopContainer>
        <DetailHistoryTable range={range} />
      </S.Main>
    </S.RootContainer>
  );
}

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;
export default Settlement;
