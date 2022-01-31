import * as S from './styled';
import { useGetPhrasesQuery } from '@stores/phrase';
import { useEffect } from 'react';

function PhraseBoard() {
  const { data: phrases } = useGetPhrasesQuery({});

  // TODO: 폰트 사이즈 조절
  useEffect(() => {}, []);

  return (
    <S.BoardContainer>
      {phrases &&
        phrases.map((phrase) => (
          <S.Phrase key={phrase.id}>
            <S.PhraseHeading>{phrase.content}</S.PhraseHeading>
            <S.AlignRight>- {phrase.korName}</S.AlignRight>
          </S.Phrase>
        ))}
    </S.BoardContainer>
  );
}

export default PhraseBoard;
