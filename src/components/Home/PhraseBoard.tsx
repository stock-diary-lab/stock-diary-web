import * as S from './styled';
import { useGetPhrasesQuery } from '@stores/phrase';

function PhraseBoard() {
  const { data: phrases } = useGetPhrasesQuery({});

  return (
    <S.BoardContainer>
      {phrases &&
        phrases.map((phrase, idx) => (
          <S.Phrase key={phrase.id}>
            <S.PhraseHeading
              ref={(el) => {
                if (el) {
                  if (el.clientHeight < el.scrollHeight) {
                    let originalFontSize = Number(getComputedStyle(el).fontSize.substring(0, 2));
                    while (el.scrollHeight !== el.clientHeight) {
                      el.style.fontSize = `${--originalFontSize}px`;
                    }
                  }
                }
              }}
            >
              {phrase.content}
            </S.PhraseHeading>
            <S.AlignRight>- {phrase.korName}</S.AlignRight>
          </S.Phrase>
        ))}
    </S.BoardContainer>
  );
}

export default PhraseBoard;
