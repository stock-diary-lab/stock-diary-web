import * as S from './styled';
import { ReactComponent as CalendarIcon } from '@svgs/settlement.svg';
import { useState } from 'react';
import { DateObj } from './Calendar/types';
import Calendar from './Calendar';

function CalendarTab() {
  const [calendarShow, setCalendarShow] = useState<boolean>(false);
  const [date, setDate] = useState<DateObj>({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
  });

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
