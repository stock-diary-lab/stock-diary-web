import * as S from './styled';

interface Props {
  content: string;
  name: string;
}

function PhraseItem({ content, name }: Props) {
  return (
    <S.Phrase>
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
        {content}
      </S.PhraseHeading>
      <S.AlignRight>- {name}</S.AlignRight>
    </S.Phrase>
  );
}

export default PhraseItem;
