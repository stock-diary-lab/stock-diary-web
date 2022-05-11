import { useGetDiariesQuery } from '@stores/diary';
import dayjs from 'dayjs';
import * as S from './styled';

function HistoryBoard() {
  // TODO: query 개선(한달치 말고 한달전, 일주일 전꺼만 받아오기)

  const getPrevWeekDate = (today: Date) =>
    new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7).toLocaleDateString();

  const getPrevMonthDate = (today: Date) =>
    new Date(today.getFullYear(), today.getMonth() - 1, today.getDate()).toLocaleDateString();

  const dashToDot = (dateStr: string) => dayjs(dateStr).format('YYYY-MM-DD');

  const { data: diaries } = useGetDiariesQuery({
    startDate: dashToDot(getPrevMonthDate(new Date())),
    endDate: dashToDot(getPrevWeekDate(new Date())),
  });

  return (
    <S.BoardContainer>
      <S.HistoryBoard>
        <S.HistoryBoardHeader>일주일 전의 기록 - {getPrevWeekDate(new Date())}</S.HistoryBoardHeader>
        <S.HistoryBoardContentContainer>
          {Array(5)
            .fill(0)
            .map((_, idx) => (
              <S.HistoryBoardContent
                key={`${idx}-prevWeek`}
                isExistContent={
                  !!diaries &&
                  !!diaries[dashToDot(getPrevWeekDate(new Date()))] &&
                  !!diaries[dashToDot(getPrevWeekDate(new Date()))][idx]
                }
              >
                <pre>
                  {diaries &&
                    diaries[dashToDot(getPrevWeekDate(new Date()))] &&
                    diaries[dashToDot(getPrevWeekDate(new Date()))][idx]?.content}
                </pre>
              </S.HistoryBoardContent>
            ))}
          {diaries &&
            diaries[dashToDot(getPrevWeekDate(new Date()))]
              ?.filter((_, idx) => idx >= 5)
              .map((diary) => (
                <S.HistoryBoardContent key={diary.content}>
                  <pre>{diary.content}</pre>
                </S.HistoryBoardContent>
              ))}
        </S.HistoryBoardContentContainer>
      </S.HistoryBoard>
      <S.HistoryBoard>
        <S.HistoryBoardHeader>한 달 전의 기록 - {getPrevMonthDate(new Date())}</S.HistoryBoardHeader>
        <S.HistoryBoardContentContainer>
          {Array(5)
            .fill(0)
            .map((_, idx) => (
              <S.HistoryBoardContent
                key={`${idx}-prevMonth`}
                isExistContent={
                  !!diaries &&
                  !!diaries[dashToDot(getPrevMonthDate(new Date()))] &&
                  !!diaries[dashToDot(getPrevMonthDate(new Date()))][idx]
                }
              >
                <pre>
                  {diaries &&
                    diaries[dashToDot(getPrevMonthDate(new Date()))] &&
                    diaries[dashToDot(getPrevMonthDate(new Date()))][idx]?.content}
                </pre>
              </S.HistoryBoardContent>
            ))}
          {diaries &&
            diaries[dashToDot(getPrevMonthDate(new Date()))]
              ?.filter((_, idx) => idx >= 5)
              .map((diary) => (
                <S.HistoryBoardContent key={diary.content}>
                  <pre>{diary.content}</pre>
                </S.HistoryBoardContent>
              ))}
        </S.HistoryBoardContentContainer>
      </S.HistoryBoard>
    </S.BoardContainer>
  );
}

export default HistoryBoard;
