import FavoriteStocks from './FavoriteStocks';
import Principles from './Principles';
import * as S from './styled';

function MyPageComponent() {
  return (
    <S.MyPageContainer>
      <FavoriteStocks />
      <Principles />
    </S.MyPageContainer>
  );
}

export default MyPageComponent;
