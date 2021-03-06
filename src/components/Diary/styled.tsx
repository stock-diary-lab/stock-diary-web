import styled from '@styles/theme-components';

// StockTable
export const TableContainer = styled.section`
  margin-bottom: 16px;
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
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
`;

export const THeader = styled.thead`
  width: 100%;
  display: block;
  & > tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }
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
  display: block;
  height: 96px;
  overflow: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & > tr {
    display: table;
    width: 100%;
    table-layout: fixed;
    height: 32px;
    cursor: pointer;
  }

  & > tr > td {
    padding: 10px 16px;
    border-right: 1px solid ${(props) => props.theme.colors.whiteGray};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > tr > td:last-child {
    border-right: 1px transparent;
  }
`;

export const AddButton = styled.tfoot`
  & > tr > td {
    padding: 12px 16px;
  }
  padding: 12px;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.main};
  cursor: pointer;
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
  margin-bottom: 32px;
  margin-top: 32px;
`;

// DiaryBoard
export const DiaryBoardContainer = styled.div`
  padding: 32px 24px;
  border-radius: 12px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
  background-color: ${(props) => props.theme.colors.white};
  & > div {
    max-height: 165px;
    height: 165px;
    overflow-y: scroll;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
  }

  & > div::-webkit-scrollbar {
    display: none;
  }
`;

export const DiaryBoardContent = styled.div`
  padding: 8px 0;
  /* border-bottom: 1px solid #e5e5e5; */

  display: flex;
  flex-direction: row;

  & > pre {
    white-space: pre-wrap;
  }

  &::before {
    content: '???';
    display: inline-block;
    margin-right: 8px;
  }
`;

export const AddDiaryInput = styled.textarea`
  padding: 8px 0;
  border: 1px solid #e5e5e5;
  width: 100%;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;

export const AddDiaryButton = styled.button`
  display: block;
  padding: 12px 0;
  font-size: 1rem;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.main};
  cursor: pointer;
`;

export const DiaryEditContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteDiaryButton = styled.button`
  padding: 12px 0;
  font-size: 1rem;
  text-decoration: underline;
  color: ${(props) => props.theme.colors.main};
  cursor: pointer;
`;

// StockInputModal
export const StockModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StockInputForm = styled.div`
  padding: 0 4rem;
`;

export const StockInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
`;

export const StockLabel = styled.label`
  font-size: 12px;
  font-weight: bold;
  min-width: 100px;
`;

export const StockInput = styled.input`
  border-bottom: 1px solid #afafaf;
  padding-bottom: 0.25rem;
  font-size: 9px;

  &[type='search']:focus {
    border: 1px solid ${(props) => props.theme.colors.main};
    border-radius: 20px;
    padding: 0.25rem;
    width: 92.5%;
  }

  &:invalid:required {
    border-bottom: 1px solid red;
  }
`;

export const StockInputSearchContainer = styled(StockInputContainer)`
  align-items: center;
  height: 80px;
`;

export const StockSearch = styled.div``;
export const StockSearchContainer = styled.div`
  width: 100%;
  &:focus-within {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    border-radius: 1rem;
    padding: 4px;
  }

  & > div {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  & > div > input {
    width: 100%;
  }

  & > div > input[type='search']::-webkit-search-cancel-button {
    visibility: hidden;
  }
  /* 
  & > svg {
    display: none;
  } */

  & > div > input:placeholder-shown + svg {
    display: inline-block;
    position: absolute;
    right: 0;
    padding-bottom: 0.5rem;
  }

  & > div > input:focus + svg {
    padding-bottom: 0;
    right: 4px;
  }

  & > div > input:focus + svg > rect,
  & > div > input:focus + svg > path {
    fill: ${(props) => props.theme.colors.main};
  }

  & > div > svg > rect,
  & > div > svg > path {
    fill: #afafaf;
  }
`;

export const StockSearchItemContainer = styled.div`
  display: block;
  padding: 0.5rem 0;
`;

export const StockSearchItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 9px;
  color: #afafaf;
  padding: 0.5rem 0.5rem;
  padding-right: 2rem;
`;

export const StockTextArea = styled.textarea`
  border: none;
  line-height: 4ch;
  background-image: linear-gradient(transparent, transparent calc(4ch - 1px), #afafaf 0px);
  width: 80%;
  background-size: 100% 4ch;
  margin-bottom: 2rem;

  resize: none;
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
  font-size: 9px;
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

export const StockTotalDiv = styled.div<{ isZero: boolean }>`
  color: ${(props) => (props.isZero ? 'inherit' : 'black')};
`;

export const StockTotal = styled.span`
  display: inline-block;
  margin-left: 36px;
  margin-right: 2px;
`;

export const StockReasonLabel = styled(StockLabel)`
  margin-top: 8px;
`;

export const Buttons = styled.div<{ isEditMode: boolean }>`
  display: flex;
  font-size: 1.5rem;

  & > button {
    width: 50%;
    padding: 1rem 0;
    font-size: 1rem;
  }

  & > button:nth-child(1) {
    border-bottom-left-radius: 1rem;
    background-color: ${(props) => (props.isEditMode ? props.theme.colors.red : '#e6e5e5')};
    color: ${(props) => props.isEditMode && 'white'};
  }

  & > button:nth-child(2) {
    border-bottom-right-radius: 1rem;
    background-color: ${(props) => props.theme.colors.main};
    color: white;
  }
`;

export const SearchItem = styled.div`
  display: flex;
  /* justify-content: space-bet; */
  font-size: 9px;
  color: #afafaf;
  padding: 8px 16px;
  cursor: pointer;
`;

export const SearchStockItem = styled(SearchItem)`
  justify-content: space-between;
`;

export const SearchItemSpan = styled.span`
  display: inline-block;
  margin-right: 16px;
`;

export const SearchItemBlueColor = styled.span`
  color: ${(props) => props.theme.colors.main};
`;

// StockInputAlert
export const StockInputAlertBody = styled.div`
  padding: 21px 49px;
  padding-left: 185px;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
`;

export const AlertImg = styled.img`
  position: absolute;
  top: -59px;
  left: 0;
`;
