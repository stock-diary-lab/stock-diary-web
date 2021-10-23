import DiaryBoard from '@components/Diary/DiaryBoard';
import StockTable from '@components/Diary/StockTable';
import TopBar from '@components/Diary/TopBar';
import IndexBoard from '@components/Home/IndexBoard';
import NavMenu from '@components/NavMenu';
import * as S from './styled';

function Diary() {
  return (
    <S.RootContainer>
      <NavMenu />
      <S.Main>
        <TopBar />
        <StockTable />
        <StockTable />
        <DiaryBoard />
      </S.Main>
      <IndexBoard />
    </S.RootContainer>
  );
}

export default Diary;
