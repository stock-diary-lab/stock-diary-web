import { useAddDiaryMutation, useGetDiariesQuery, useUpdateDiaryMutation, useDeleteDiaryMutation } from '@stores/diary';
import { Diary } from '@stores/diary/types';
import { customLocaleDateString } from '@utils/date';
import { useState } from 'react';
import { DateObj } from './Calendar/types';
import DiaryInput from './DiaryInput';
import * as S from './styled';

interface Props {
  date: DateObj;
}

function DiaryBoard({ date }: Props) {
  const [addDiary] = useAddDiaryMutation();
  const [updateDiary] = useUpdateDiaryMutation();
  const [deleteDiary] = useDeleteDiaryMutation();

  const { data: diaries } = useGetDiariesQuery({
    startDate: `${date.year}-${date.month}-${date.date}`,
    endDate: `${date.year}-${date.month}-${date.date}`,
  });

  const [addActive, setAddActive] = useState<boolean>(false);
  const [editActive, setEditActive] = useState<{ [key: string]: boolean }>({});

  return (
    <S.TableContainer>
      <S.Title>주식일지</S.Title>
      <S.DiaryBoardContainer>
        <div>
          {diaries &&
            diaries[customLocaleDateString(date)] &&
            (diaries[customLocaleDateString(date)] as Diary[]).map((diary: Diary) =>
              editActive[diary.id as string] ? (
                <S.DiaryEditContainer key={diary.id}>
                  <DiaryInput
                    width={'95%'}
                    key={diary.id}
                    defaultValue={diary.content}
                    onBlur={() => {
                      setEditActive({
                        ...editActive,
                        [diary.id as string]: false,
                      });
                    }}
                    onKeyPress={(e) => {
                      if (e.code === 'Enter' && !e.shiftKey) {
                        updateDiary({
                          id: diary.id,
                          content: e.currentTarget.value || '',
                        });
                        setEditActive({
                          ...editActive,
                          [diary.id as string]: false,
                        });
                      }
                    }}
                  />
                  <S.DeleteDiaryButton
                    key={`${diary.id}-${diary.content}`}
                    onMouseDown={() => {
                      deleteDiary({ id: diary.id as number });
                    }}
                  >
                    삭제
                  </S.DeleteDiaryButton>
                </S.DiaryEditContainer>
              ) : (
                <S.DiaryBoardContent
                  key={diary.id}
                  onClick={() => {
                    setEditActive({
                      ...editActive,
                      [diary.id as string]: true,
                    });
                  }}
                >
                  <pre>{diary.content}</pre>
                </S.DiaryBoardContent>
              )
            )}
          {addActive ? (
            <DiaryInput
              placeholder="입력하세요"
              onBlur={() => {
                setAddActive(false);
              }}
              onKeyPress={(e) => {
                if (e.code === 'Enter' && !e.shiftKey) {
                  addDiary({
                    content: e.currentTarget.value || '',
                    date: customLocaleDateString(date),
                  });
                  setAddActive(false);
                }
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
