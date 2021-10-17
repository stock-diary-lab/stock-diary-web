import * as S from './styled';

function PhraseBoard() {
  return (
    <S.BoardContainer>
      <S.Phrase>
        <S.PhraseHeading>
          10년 이상을 볼 것이 아니면 10분도 주식을 갖고 있지 말라.
        </S.PhraseHeading>
        <S.AlignRight>- 워렌 버핏</S.AlignRight>
      </S.Phrase>
      <S.Phrase>
        <S.PhraseHeading>
          10년 이상을 볼 것이 아니면 10분도 주식을 갖고 있지 말라.
        </S.PhraseHeading>
        <S.AlignRight>- 워렌 버핏</S.AlignRight>
      </S.Phrase>
    </S.BoardContainer>
  );
}

export default PhraseBoard;
