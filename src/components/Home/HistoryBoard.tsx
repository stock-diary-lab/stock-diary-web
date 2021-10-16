import * as S from './styled';

function HistoryBoard() {
  const contents = [
    '✔  오늘 알체라가 급락함',
    '건설주가 심상치 않대',
    'ㅇ하반기에 금리 인상하지 않을까?',
    'ddddddd',
  ];

  return (
    <S.BoardContainer>
      <S.HistoryBoard>
        <S.HistoryBoardHeader>
          일주일 전의 기록 - 2021. 10.03
        </S.HistoryBoardHeader>
        <S.HistoryBoardContentContainer>
          {contents.map((content) => (
            <S.HistoryBoardContent key={content}>
              {content}
            </S.HistoryBoardContent>
          ))}
          <S.HistoryBoardInput type="text" />
        </S.HistoryBoardContentContainer>
      </S.HistoryBoard>
      <S.HistoryBoard>
        <S.HistoryBoardHeader>
          한 달 전의 기록 - 2021. 09.10
        </S.HistoryBoardHeader>
        <S.HistoryBoardContentContainer>
          {contents.map((content) => (
            <S.HistoryBoardContent key={content}>
              {content}
            </S.HistoryBoardContent>
          ))}
          <S.HistoryBoardInput type="text" />
        </S.HistoryBoardContentContainer>
      </S.HistoryBoard>
    </S.BoardContainer>
  );
}

export default HistoryBoard;
