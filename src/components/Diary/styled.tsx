import styled from '@styles/theme-components';

// StockTable
export const TableContainer = styled.section`
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2.5rem;
  margin-bottom: 0.5rem;
`;

export const Table = styled.table`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border-collapse: initial;
  padding: 1rem;
  border-radius: 1rem;
`;

export const THeader = styled.thead`
  & > tr > th {
    background-color: ${(props) => props.theme.colors.sky};
    padding: 0.5rem 1rem;
    font-size: 1.15rem;
    font-weight: 500;
  }
  & > tr > th:first-child {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
  & > tr > th:last-child {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`;

export const THead = styled.th``;

export const TBody = styled.tbody`
  & > tr > td {
    padding: 0.75rem 1rem;
    padding-bottom: 0.5rem;
    border-right: 1px solid ${(props) => props.theme.colors.whiteGray};
  }
  & > tr > td:last-child {
    border-right: 1px transparent;
  }
`;

export const TRow = styled.tr``;

export const TData = styled.td<{ textAlign?: string }>`
  text-align: ${(props) => props.textAlign || 'initial'};
`;

// SearchBar
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 250px;
  padding: 0.5rem 1rem;
  border: 1px solid ${(props) => props.theme.colors.main};
  border-radius: 20px;
  margin-right: 0.5rem;
`;

// CalendarTab
export const DateHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 0.5rem;
  margin-top: 4px;
`;

// TopBar
export const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

// DiaryBoard
export const DiaryBoardContainer = styled.div`
  padding: 2.5rem 1.5rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.white};
`;

export const DiaryBoardContent = styled.div`
  padding: 0.5rem 0;
  border-bottom: 1px solid #e5e5e5;
`;
