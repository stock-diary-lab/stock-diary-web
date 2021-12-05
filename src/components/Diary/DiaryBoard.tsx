import { useAddDiaryMutation, useGetDiariesQuery } from '@stores/diary';
import { useEffect, useRef, useState } from 'react';
import { DateObj } from './Calendar/types';
import * as S from './styled';

interface Props {
  date: DateObj;
}

function DiaryBoard({ date }: Props) {
  const [addDiary] = useAddDiaryMutation();

  const { isLoading, data: diaries } = useGetDiariesQuery({
    startDate: `${date.year}-${date.month}-${date.date}`,
    endDate: `${date.year}-${date.month}-${date.date}`,
  });

  const [addActive, setAddActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [addActive]);

  return (
    <S.TableContainer>
      <S.Title>주식일지</S.Title>
      <S.DiaryBoardContainer>
        <div>
          {diaries &&
            diaries[`${date.year}-${date.month}-${date.date}`]?.map(
              (diary: any) => (
                <S.DiaryBoardContent key={diary.id}>
                  {diary.content}
                </S.DiaryBoardContent>
              )
            )}
          {addActive ? (
            <S.AddDiaryInput
              type="text"
              placeholder="입력하세요"
              onBlur={() => {
                setAddActive(false);
              }}
              ref={inputRef}
              onKeyPress={(e) => {
                if (e.code !== 'Enter') return;
                addDiary({
                  content: inputRef.current?.value || '',
                  date: new Date(`${date.year}-${date.month}-${date.date}`),
                });
                setAddActive(false);
              }}
            />
          ) : (
            <S.AddDiaryButton
              onClick={() => {
                setAddActive(true);
              }}
            >
              추가
            </S.AddDiaryButton>
          )}
        </div>
      </S.DiaryBoardContainer>
    </S.TableContainer>
  );
}

export default DiaryBoard;
