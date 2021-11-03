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

// StockInputModal
export const StockModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StockInputForm = styled.div`
  padding: 0 2rem;
`;

export const StockInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`;

export const StockLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  min-width: 100px;
`;

export const StockInput = styled.input`
  border-bottom: 1px solid #afafaf;
  padding-bottom: 0.25rem;
  font-size: 0.75rem;
`;

export const StockInputSearchContainer = styled(StockInputContainer)`
  align-items: center;
`;
export const StockSearchContainer = styled.div`
  position: relative;
  width: 80%;

  & > input {
    width: 100%;
  }

  & > input[type='search']::-webkit-search-cancel-button {
  }

  & > svg {
    display: none;
  }

  & > input:placeholder-shown + svg {
    display: inline-block;
    position: absolute;
    right: 0;
    padding-bottom: 0.5rem;
  }

  & > svg > rect,
  & > svg > path {
    fill: #afafaf;
  }
`;

export const StockTextArea = styled.textarea`
  border: none;
  line-height: 4ch;
  background-image: linear-gradient(
    transparent,
    transparent calc(4ch - 1px),
    #afafaf 0px
  );
  width: 80%;
  background-size: 100% 4ch;

  &:focus-visible {
    outline: none;
  }
`;

export const StockCountAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #afafaf;
`;

export const StockCount = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.75rem;
  & > div > input,
  & > input {
    text-align: right;
  }
`;

export const Multiply = styled.span`
  color: black;
  display: inline-block;
  padding: 0 0.75rem;
`;

export const StockTotal = styled.span`
  display: inline-block;
  margin-left: 36px;
  margin-right: 2px;
`;

export const StockReasonLabel = styled(StockLabel)`
  margin-top: 8px;
`;
