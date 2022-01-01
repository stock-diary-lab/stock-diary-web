import * as S from './styled';
import { useGetPhrasesQuery } from '@stores/phrase';

function PhraseBoard() {
  const { data: phrases } = useGetPhrasesQuery({});

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
