import NavMenu from '@components/NavMenu';
import * as S from './styled';

function News() {
  return (
    <S.RootContainer>
      <NavMenu />
      <S.Main>메인</S.Main>
    </S.RootContainer>
  );
}

export default News;
