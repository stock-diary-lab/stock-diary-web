import { Dispatch, SetStateAction } from 'react';
import * as S from './styled';
import { ReactComponent as CalendarIcon } from '@svgs/settlement.svg';
import { useState } from 'react';
import { DateObj } from './Calendar/types';
import Calendar from './Calendar';
interface Props {
  date: DateObj;
  setDate: Dispatch<SetStateAction<DateObj>>;
}

function CalendarTab({ date, setDate }: Props) {
  const [calendarShow, setCalendarShow] = useState<boolean>(false);

  return (
    <>
      <S.FlexContainer>
        <S.DateHeading>
          {date.year}년 {date.month}월 {date.date}일 일요일
        </S.DateHeading>
        <CalendarIcon
          width="25"
          height="25"
          onClick={() => setCalendarShow(true)}
        />
      </S.FlexContainer>
      <Calendar
        show={calendarShow}
        setShow={setCalendarShow}
        date={date}
        setDate={setDate}
      />
    </>
  );
}

export default CalendarTab;
