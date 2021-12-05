import { useEffect, useRef, useState } from 'react';
import * as S from './styled';

function DiaryBoard() {
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
          {addActive ? (
            <S.AddDiaryInput
              type="text"
              placeholder="입력하세요"
              onBlur={() => {
                setAddActive(false);
              }}
              ref={inputRef}
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
