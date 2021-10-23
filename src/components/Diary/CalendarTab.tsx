import * as S from './styled';
import { ReactComponent as CalendarIcon } from '@svgs/settlement.svg';

function CalendarTab() {
  return (
    <S.FlexContainer>
      <S.DateHeading>2021년 9월 12일 일요일</S.DateHeading>
      <CalendarIcon width="25" height="25" />
    </S.FlexContainer>
  );
}

export default CalendarTab;
