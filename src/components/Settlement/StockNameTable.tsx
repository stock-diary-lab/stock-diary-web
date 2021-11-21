import styled from '@styles/theme-components';
import * as S from './styled';

function StockNameTable() {
  return (
    <div style={{ width: '60%' }}>
      <S.TableTitle>종목별 기록</S.TableTitle>
      <Table>
        <thead>
          <tr>
            <th>종목명</th>
            <th>보유수량</th>
            <th>보유기간</th>
            <th>평균단가</th>
            <th>손익률</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>삼성전자</td>
            <td>10개</td>
            <td>21/07/02 ~ 21/10/23</td>
            <td>72,000원</td>
            <td>+2.4%</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

const Table = styled.table`
  width: 100%;
  text-align: center;

  & thead {
    background-color: ${(props) => props.theme.colors.whiteGray};
  }

  & tbody {
    background-color: white;
  }

  & tr > th,
  & tr > td {
    padding: 16px 24px;
  }

  & tr > th:nth-child(1) {
    border-top-left-radius: 8px;
  }

  & tr > th:last-child {
    border-top-right-radius: 8px;
  }

  & tr > td {
    border-right: 1px solid ${(props) => props.theme.colors.whiteGray};
  }

  & tr > td:nth-child(1) {
    border-bottom-left-radius: 8px;
  }

  & tr > td:nth-child(2),
  & tr > td:nth-child(4) {
    text-align: right;
  }

  & tr > td:last-child {
    border-bottom-right-radius: 8px;
    border-right: none;
  }
`;

export default StockNameTable;
