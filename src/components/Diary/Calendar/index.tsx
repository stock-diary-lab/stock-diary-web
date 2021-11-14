import Modal from '@components/common/Modal';
import * as S from './styled';
import { SetStateAction, Dispatch, useState, useEffect } from 'react';
import { DateObj } from './types';
import { ReactComponent as CalendarPrevIcon } from '@svgs/calendar_prev_btn.svg';
import { ReactComponent as CalendarNextIcon } from '@svgs/calendar_next_btn.svg';
import { useGetStocksQuery } from '@stores/stock';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { Stock } from '@stores/stock/types';

dayjs.locale('ko');

interface Props {
  date: DateObj;
  setDate: Dispatch<SetStateAction<DateObj>>;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

type SetMonthType = 'prev' | 'next';
type YearMonth = {
  year: number;
  month: number;
};

function Calendar({ date, setDate, show, setShow }: Props) {
  const [yearMonth, setYearMonth] = useState<YearMonth>({
    year: date.year,
    month: date.month,
  });

  const [calendarDate, setCalendarDate] = useState<number>(date.date);

  useEffect(() => {
    if (!show) {
      setYearMonth({ year: date.year, month: date.month });
      setCalendarDate(date.date);
    }
  }, [show]);

  const { data: stockObj } = useGetStocksQuery({
    startDate: new Date(
      `${yearMonth.year}-${yearMonth.month}-01`
    ).toLocaleDateString(),
    endDate: new Date(
      `${yearMonth.year + (yearMonth.month === 12 ? 1 : 0)}-${
        (yearMonth.month + 1) % 12 || 12
      }-01`
    ).toLocaleDateString(),
  });

  const setMonth = (setMonthType: SetMonthType) => {
    if (setMonthType === 'prev') {
      if (yearMonth.month === 1) {
        setYearMonth({ year: yearMonth.year - 1, month: 12 });
      } else {
        setYearMonth({ ...yearMonth, month: yearMonth.month - 1 });
      }
    }
    if (setMonthType === 'next') {
      if (yearMonth.month === 12) {
        setYearMonth({ year: yearMonth.year + 1, month: 1 });
      } else {
        setYearMonth({ ...yearMonth, month: yearMonth.month + 1 });
      }
    }
  };

  const getPrevMonthDates = () => {
    // 2021. 11이면 1(월요일부터 시작)
    const firstDayOfCurMonth = new Date(
      yearMonth.year,
      yearMonth.month - 1
    ).getDay();

    // 2021. 10월이면 31
    const lastDateOfPrevMonth = new Date(
      yearMonth.year,
      yearMonth.month - 1,
      0
    ).getDate();

    const startNum = lastDateOfPrevMonth - firstDayOfCurMonth + 1;

    return new Array(firstDayOfCurMonth)
      .fill(0)
      .map((_, index) => startNum + index);
  };

  const getCurMonthDates = () => {
    const lastDateOfCurMonth = new Date(
      yearMonth.year,
      yearMonth.month,
      0
    ).getDate();

    return new Array(lastDateOfCurMonth).fill(0).map((_, index) => index + 1);
  };

  const getNextMonthDates = () => {
    // 2021.11.30일은 2 (화요일)
    const lastDayOfCurMonth = new Date(
      yearMonth.year,
      yearMonth.month,
      0
    ).getDay();

    return new Array(6 - lastDayOfCurMonth)
      .fill(0)
      .map((_, index) => index + 1);
  };

  const getStockNames = (stockList: Stock[], type: 'buy' | 'sell') =>
    stockList
      .filter((stock) => stock.type === type)
      .map((stock) => stock.name)
      .join(', ');

  return (
    <Modal show={show} setShow={setShow} width={600}>
      <>
        <S.CalendarHeader>
          <CalendarPrevIcon onClick={() => setMonth('prev')} />
          <S.CalendarHeading>
            {yearMonth.year}.
            {yearMonth.month.toLocaleString(undefined, {
              minimumIntegerDigits: 2,
            })}
          </S.CalendarHeading>
          <CalendarNextIcon onClick={() => setMonth('next')} />
        </S.CalendarHeader>
        <S.CalendarMain>
          <S.CalendarDayContainer>
            <S.CaledarDay>SU</S.CaledarDay>
            <S.CaledarDay>MO</S.CaledarDay>
            <S.CaledarDay>TU</S.CaledarDay>
            <S.CaledarDay>WE</S.CaledarDay>
            <S.CaledarDay>TH</S.CaledarDay>
            <S.CaledarDay>FR</S.CaledarDay>
            <S.CaledarDay>SA</S.CaledarDay>
          </S.CalendarDayContainer>
          <S.CalendarDateContainer>
            {getPrevMonthDates().map((el) => (
              <S.CalendarDate
                key={el}
                isOtherMonth={true}
                isHistoryExist={
                  !!stockObj &&
                  !!stockObj[
                    `${yearMonth.year}. ${yearMonth.month - 1}. ${el}.`
                  ]
                }
              >
                {el}
              </S.CalendarDate>
            ))}
            {getCurMonthDates().map((el) => (
              <S.CalendarDate
                key={el}
                isOtherMonth={false}
                isHistoryExist={
                  !!stockObj &&
                  !!stockObj[`${yearMonth.year}. ${yearMonth.month}. ${el}.`]
                }
                isSelected={el === calendarDate}
                onClick={() => {
                  if (
                    !!stockObj &&
                    !stockObj[`${yearMonth.year}. ${yearMonth.month}. ${el}.`]
                  )
                    return;
                  setCalendarDate(el);
                }}
              >
                {el}
              </S.CalendarDate>
            ))}
            {getNextMonthDates().map((el) => (
              <S.CalendarDate
                key={el}
                isOtherMonth={true}
                isHistoryExist={
                  !!stockObj &&
                  !!stockObj[
                    `${yearMonth.year}. ${yearMonth.month + 1}. ${el}. `
                  ]
                }
              >
                {el}
              </S.CalendarDate>
            ))}
          </S.CalendarDateContainer>
        </S.CalendarMain>
        <S.CalendarDateHistory>
          <h3>
            {calendarDate}일{' '}
            {dayjs(
              `${yearMonth.year}-${yearMonth.month}-${calendarDate}`
            ).format('dd')}
            요일
          </h3>
          <div>
            {stockObj &&
              stockObj[
                `${yearMonth.year}. ${yearMonth.month}. ${calendarDate}.`
              ] && (
                <>
                  {getStockNames(
                    stockObj[
                      `${yearMonth.year}. ${yearMonth.month}. ${calendarDate}.`
                    ],
                    'buy'
                  ) && (
                    <p>
                      매수종목:
                      {' ' +
                        getStockNames(
                          stockObj[
                            `${yearMonth.year}. ${yearMonth.month}. ${calendarDate}.`
                          ],
                          'buy'
                        )}
                    </p>
                  )}
                  {getStockNames(
                    stockObj[
                      `${yearMonth.year}. ${yearMonth.month}. ${calendarDate}.`
                    ],
                    'sell'
                  ) && (
                    <p>
                      매도종목:
                      {' ' +
                        getStockNames(
                          stockObj[
                            `${yearMonth.year}. ${yearMonth.month}. ${calendarDate}.`
                          ],
                          'sell'
                        )}
                    </p>
                  )}
                </>
              )}
          </div>
        </S.CalendarDateHistory>
        <S.Buttons>
          <button onClick={() => setShow(false)}>취소</button>
          <button
            onClick={() => {
              setDate({
                year: yearMonth.year,
                month: yearMonth.month,
                date: calendarDate,
              });
              setShow(false);
            }}
          >
            선택
          </button>
        </S.Buttons>
      </>
    </Modal>
  );
}

export default Calendar;
