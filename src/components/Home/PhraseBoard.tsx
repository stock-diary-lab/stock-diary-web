import * as S from './styled';
import { useGetPhrasesQuery } from '@stores/phrase';
import { useGetPrinciplesQuery } from '@stores/principle';
import PhraseItem from './PhraseItem';
import { useGetUserQuery } from '@stores/user';

function PhraseBoard() {
  const { data: phrases } = useGetPhrasesQuery({});
  const { data: principles } = useGetPrinciplesQuery({});
  const { data: user } = useGetUserQuery({});

  const getRandomIndex = (num: number) => Math.floor(Math.random() * num);

  return (
    <S.BoardContainer>
      {phrases && principles && principles.length === 0
        ? phrases.map((phrase) => <PhraseItem key={phrase.id} content={phrase.content} name={phrase.korName} />)
        : phrases && <PhraseItem key={phrases[0].id} content={phrases[0].content} name={phrases[0].korName} />}
      {user && principles && principles.length > 0 && (
        <PhraseItem
          key={principles[getRandomIndex(principles.length)].id}
          content={principles[getRandomIndex(principles.length)].content}
          name={user.userName}
        />
      )}
    </S.BoardContainer>
  );
}

export default PhraseBoard;
