import styled from '@styles/theme-components';

interface Props {
  data?: { [key: string]: any }[];
}

function Table({ data }: Props) {
  return (
    <StyledTable>
      <StyledTableHeader>
        <tr>
          <StyledTableHead>명칭</StyledTableHead>
          <StyledTableHead>수치</StyledTableHead>
          <StyledTableHead>등락률</StyledTableHead>
        </tr>
      </StyledTableHeader>
      <StyledTableBody>
        {data &&
          data.map((obj, idx) => (
            <StyledTableRow key={idx}>
              {Object.values(obj).map((v, colIdx) => (
                <StyledTableData
                  key={v + idx}
                  isFluc={colIdx === 2}
                  changeDirection={Number(v[0]) > 0 ? 'high' : 'low'}
                >
                  {colIdx === 1
                    ? Number(v).toLocaleString()
                    : colIdx === 2
                    ? Math.abs(Number(v)).toLocaleString() + '%'
                    : v}
                </StyledTableData>
              ))}
            </StyledTableRow>
          ))}
      </StyledTableBody>
    </StyledTable>
  );
}

const StyledTable = styled.table`
  width: 100%;
  margin: 1rem 0;
`;

const StyledTableHeader = styled.thead`
  font-size: 1.125rem;
  font-weight: bold;
`;

const StyledTableHead = styled.th`
  padding: 0.5rem 0;
  width: 33.3%;
`;

const StyledTableBody = styled.tbody``;

const StyledTableRow = styled.tr`
  text-align: center;
  line-height: 23px;
`;

const StyledTableData = styled.td<{ isFluc: boolean; changeDirection: string }>`
  padding: 0.5rem 0;
  position: relative;
  padding-left: ${(props) => props.isFluc && '16px;'};
  &::before {
    ${(props) =>
      props.isFluc &&
      `content: '';
       border-left: 4px solid transparent;
       border-right: 4px solid transparent;
       position: absolute;
       left: 20px;
       top: ${props.changeDirection === 'high' ? '15px;' : '18px;'}`}
    ${(props) =>
      props.changeDirection === 'high' ? `border-bottom: 6px solid #3B80E3;` : `border-top: 6px solid #F36874;`}
  }
`;

export default Table;
