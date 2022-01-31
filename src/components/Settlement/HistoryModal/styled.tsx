import styled from '@styles/theme-components';

export const HistoryModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
`;

export const HistoryInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
  margin: 32px 0;
`;

export const HistoryInfoCell = styled.div`
  & > label {
    display: inline-block;
    margin-bottom: 8px;
  }
`;

export const HistoryInfoBold = styled.p`
  font-weight: 500;
  font-size: 16px;
`;

export const HistoryInfoType = styled.p<{ stockType: string }>`
  color: ${(props) => (props.stockType === 'buy' ? '#F36874' : '#3B80E3')};
  font-weight: bold;
  font-size: 16px;
`;

export const HistoryInputForm = styled.div`
  padding: 0 4rem;
`;

export const StockInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 32px;
`;

export const StockLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  min-width: 100px;
  color: black;
`;

export const StockCountAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 32px;
  color: #afafaf;
`;

export const StockCount = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  margin-bottom: 1.5rem;
  font-size: 0.75rem;
  & > div > input,
  & > input {
    text-align: right;
  }
`;

export const StockCountFirst = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.75rem;
  & > div > input,
  & > input {
    text-align: right;
  }
  width: 100%;
`;
export const Multiply = styled.span`
  color: black;
  display: inline-block;
  padding: 0 12px;
`;

export const StockTotalContainer = styled.div`
  color: black;
`;

export const StockTotal = styled.span`
  display: inline-block;
  margin-left: 36px;
  margin-right: 2px;
`;

export const StockInput = styled.input`
  border-bottom: 1px solid #afafaf;
  padding-bottom: 0.25rem;
  font-size: 0.75rem;
  margin-left: 8px;
`;

export const StockTextArea = styled.textarea`
  border: none;
  line-height: 4ch;
  background-image: linear-gradient(transparent, transparent calc(4ch - 1px), #afafaf 0px);
  width: 80%;
  background-size: 100% 4ch;
  margin-bottom: 2rem;

  &:focus-visible {
    outline: none;
  }
`;

export const StockReasonLabel = styled(StockLabel)`
  margin-top: 8px;
`;
