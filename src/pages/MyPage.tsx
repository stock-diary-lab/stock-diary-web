import FavoriteStocks from '@components/MyPage/FavoriteStocks';
import NavMenu from '@components/NavMenu';

import * as S from './styled';

function MyPage() {
  return (
    <S.RootContainer>
      <NavMenu />
      <S.Main>
        <FavoriteStocks />
      </S.Main>
    </S.RootContainer>
  );
}

export default MyPage;
