import NavMenu from '@components/NavMenu';
import * as S from './styled';

function MyPage() {
  return (
    <S.RootContainer>
      <NavMenu />
      <S.Main>메인</S.Main>
    </S.RootContainer>
  );
}

export default MyPage;
