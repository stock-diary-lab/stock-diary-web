import styled from '@styles/theme-components';
import * as S from './styled';

function PeriodTable() {
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
            <td>2021.10.20</td>
            <td>2021.11.20</td>
          </tr>
        </tbody>
      </VerticalTable>
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
