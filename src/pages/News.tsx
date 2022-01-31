import NavMenu from '@components/NavMenu';
import * as S from './styled';

function News() {
  return (
    <S.RootContainer>
      <NavMenu />
      <S.Main>
        <iframe title="naver_stock_news" src="https://m.stock.naver.com/news/mainnews" height="700"></iframe>
      </S.Main>
    </S.RootContainer>
  );
}

export default News;
