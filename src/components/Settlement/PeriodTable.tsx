import styled from '@styles/theme-components';
import { Dispatch, SetStateAction, useState } from 'react';
import CalendarRange from './CalendarRange';
import { DateObj } from './CalendarRange/types';
import * as S from './styled';

interface Props {
  range: {
    prev: DateObj;
    next: DateObj;
  };
  setRange: Dispatch<SetStateAction<{ prev: DateObj; next: DateObj }>>;
}

function PeriodTable({ range, setRange }: Props) {
  const [calendarRangeShow, setCalendarRangeShow] = useState<boolean>(false);

  const [clickedType, setClickedType] = useState<'prev' | 'next'>('prev');

  return (
    <div>
      <S.TableTitle>총 손익률 / 기간 선택</S.TableTitle>
      <VerticalTable>
        <tbody>
          <tr>
            <td>손익률</td>
            <td colSpan={2}>11.09%</td>
          </tr>
          <tr>
            <td>기간</td>
            <td
              onClick={() => {
                setClickedType('prev');
                setCalendarRangeShow(true);
              }}
            >
              {`${range.prev.year}.${range.prev.month}.${range.prev.date}`}
            </td>
            <td
              onClick={() => {
                setCalendarRangeShow(true);
                setClickedType('next');
              }}
            >
              {`${range.next.year}.${range.next.month}.${range.next.date}`}
            </td>
          </tr>
        </tbody>
      </VerticalTable>
      <CalendarRange
        clickedType={clickedType}
        show={calendarRangeShow}
        setShow={setCalendarRangeShow}
        rangeProps={range}
        setRangeProps={setRange}
      />
    </div>
  );
}

const VerticalTable = styled.table`
  border-radius: 16px;
  border-collapse: initial;

  text-align: center;
  & tr > td {
    padding: 12px;
  }

  & tbody > tr:nth-child(2) > td {
    padding: 12px 24px;
  }

  & tbody > tr:nth-child(1) > td:nth-child(1) {
    background-color: #b9d6ff;
    border-top-left-radius: 8px;
  }

  & tbody > tr:nth-child(1) > td:nth-child(2) {
    background-color: white;
    color: #f36874;
    border-top-right-radius: 8px;
  }

  & tbody > tr:nth-child(2) > td:nth-child(1) {
    background-color: #b9d6ff;
    border-bottom-left-radius: 8px;
  }

  & tbody > tr:nth-child(2) > td {
    background-color: white;
    border-top: 1px solid ${(props) => props.theme.colors.whiteGray};
  }

  & tbody > tr:nth-child(2) > td:nth-child(2) {
    border-right: 1px solid ${(props) => props.theme.colors.whiteGray};
    border-bottom-right-radius: 8px;
  }
`;

export default PeriodTable;
