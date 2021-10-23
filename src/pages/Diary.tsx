import StockTable from '@components/Diary/StockTable';
import IndexBoard from '@components/Home/IndexBoard';
import NavMenu from '@components/NavMenu';
import * as S from './styled';

function Diary() {
  return (
    <S.RootContainer>
      <NavMenu />
      <S.Main>
        <StockTable />
        <StockTable />
      </S.Main>
      <IndexBoard />
    </S.RootContainer>
  );
}

export default Diary;
