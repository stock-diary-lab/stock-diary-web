import NavMenu from '@components/NavMenu';
import * as S from './styled';
import styled from '@styles/theme-components';

function News() {
  return (
    <S.RootContainer>
      <NavMenu />
      <S.Main>
        <IframeContainer>
          <iframe
            title="naver_stock_news"
            src="https://m.stock.naver.com/news/mainnews"
            height="700"
            width="100%"
          ></iframe>
        </IframeContainer>
      </S.Main>
    </S.RootContainer>
  );
}

const IframeContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export default News;
