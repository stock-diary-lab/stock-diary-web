import styled from '@styles/theme-components';
import * as S from './styled';

function DetailHistoryTable() {
  return (
    <div style={{ width: '100%', marginTop: '16px' }}>
      <S.TableTitle>상세 매매기록</S.TableTitle>
      <Table>
        <thead>
          <tr>
            <th>종목명</th>
            <th>구분</th>
            <th>매매 일자</th>
            <th>실현손익</th>
            <th>손익률</th>
            <th>금액</th>
            <th>수량</th>
            <th>단가</th>
            <th>매수/매도 이유</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>삼성전자</td>
            <td>매수</td>
            <td>03/30/21</td>
            <td>03/30/21</td>
            <td>03/30/21</td>
            <td>03/30/21</td>
            <td>03/30/21</td>
            <td>03/30/21</td>
            <td>03/30/21</td>
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
    background-color: #b9d6ff;
  }

  & tbody {
    height: 576px;
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

  & tr > td:last-child {
    border-bottom-right-radius: 8px;
    border-right: none;
  }
`;

export default DetailHistoryTable;
