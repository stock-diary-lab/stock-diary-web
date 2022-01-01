import styled from '@styles/theme-components';

function Table() {
  const data = [
    { name: '코스피', value: '3202.32', flucRate: '0.91%' },
    { name: '코스닥', value: '1031.14', flucRate: '0.75%' },
    { name: '코스닥', value: '1031.14', flucRate: '0.75%' },
    { name: '코스닥', value: '1031.14', flucRate: '0.75%' },
    { name: '코스닥', value: '1031.14', flucRate: '0.75%' },
    { name: '코스닥', value: '1031.14', flucRate: '0.75%' },
    { name: '코스닥', value: '1031.14', flucRate: '0.75%' },
    { name: '코스닥', value: '1031.14', flucRate: '0.75%' },
    { name: '코스닥', value: '1031.14', flucRate: '0.75%' },
    { name: '코스닥', value: '1031.14', flucRate: '0.75%' },
    { name: '코스닥', value: '1031.14', flucRate: '0.75%' },
    { name: '코스닥', value: '1031.14', flucRate: '0.75%' },
    { name: '코스닥', value: '1031.14', flucRate: '0.75%' },
    { name: '코스닥', value: '1031.14', flucRate: '0.75%' },
  ];

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
        {data.map((obj, idx) => (
          <StyledTableRow key={idx}>
            {Object.values(obj).map((v, colIdx) => (
              <StyledTableData key={v + idx} isFluc={colIdx === 2} changeDirection={'low'}>
                {v}
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
  font-size: 1rem;
  font-weight: bold;
`;

const StyledTableHead = styled.th`
  padding: 0.5rem 0;
`;

const StyledTableBody = styled.tbody``;

const StyledTableRow = styled.tr`
  text-align: center;
  line-height: 23px;
`;

const StyledTableData = styled.td<{ isFluc: boolean; changeDirection: string }>`
  padding: 0.5rem 0;
  position: relative;
  &::before {
    ${(props) =>
      props.isFluc &&
      `content: '';
       border-left: 4px solid transparent;
       border-right: 4px solid transparent;
       position: absolute;
       left: 10px;
       top: 17px;`}
    ${(props) =>
      props.changeDirection === 'high' ? `border-bottom: 6px solid #3B80E3;` : `border-top: 6px solid #F36874;`}
  }
`;

export default Table;
