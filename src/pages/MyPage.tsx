import MyPageComponent from '@components/MyPage';
import NavMenu from '@components/NavMenu';

import * as S from './styled';

function MyPage() {
  return (
    <S.RootContainer>
      <NavMenu />
      <S.Main>
        <MyPageComponent />
      </S.Main>
    </S.RootContainer>
  );
}

export default MyPage;
