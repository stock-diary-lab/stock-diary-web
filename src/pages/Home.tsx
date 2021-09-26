import NavMenu from '../components/NavMenu';
import * as S from './styled';

function Home() {
  return (
    <S.RootContainer>
      <NavMenu />
      <S.Main><div>장재석</div></S.Main>
    </S.RootContainer>
  );
}

export default Home;
