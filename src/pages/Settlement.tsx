import NavMenu from '@components/NavMenu';
import * as S from './styled';
import PeriodTable from '@components/Settlement/PeriodTable';
import StockNameTable from '@components/Settlement/StockNameTable';
import DetailHistoryTable from '@components/Settlement/DetailHistoryTable';
import styled from '@styles/theme-components';

// 결산페이지
function Settlement() {
  return (
    <S.RootContainer>
      <NavMenu />
      <S.Main>
        <TopContainer>
          <PeriodTable />
          <StockNameTable />
        </TopContainer>
        <DetailHistoryTable />
      </S.Main>
    </S.RootContainer>
  );
}

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default Settlement;
