import styled from '@styles/theme-components';

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: end;
  margin-top: 1rem;
`;

export const CalendarHeading = styled.h3`
  font-size: 2.25rem;
  font-weight: 500;
`;

export const CalendarMain = styled.div`
  padding: 32px 64px;
`;

export const CalendarDayContainer = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1rem;
  font-weight: bold;
`;

export const CaledarDay = styled.div`
  width: 4rem;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
`;

export const CalendarDateContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const CalendarDateHistory = styled.div`
  border-top: 1px solid #e5e5e5;
  margin: 0 64px;
  padding: 16px 0;

  & > h3 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 16px;
  }

  & > div > p {
    margin-bottom: 4px;
  }
`;

export const CalendarDate = styled.div<{
  isOtherMonth: boolean;
  isHistoryExist: boolean;
  isSelected?: boolean;
}>`
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.isOtherMonth ? '#cbd1d2' : '#7c8a95')};
  border: 1px solid transparent;
  position: relative;

  border-radius: 50%;
  ${(props) =>
    props.isHistoryExist &&
    `&:after {
     background: #6ca4f4;
     border-radius: 50%;
     display: block;
     content: '';
     bottom: 6px;
     left: 50%;
     height: 8px;
     margin: -4px 0 0 -4px;
     position: absolute;
     width: 8px;
    }`}

  &:hover {
    border-color: ${(props) => (props.isOtherMonth ? '#cbd1d2' : '#6CA4F4')};
  }

  ${(props) =>
    props.isSelected &&
    `background: #6ca4f4; color: white; &:after{ background: white; }`}
`;

export const Buttons = styled.div`
  display: flex;
  font-size: 1.5rem;

  & > button {
    width: 50%;
    padding: 1rem 0;
    font-size: 1rem;
  }

  & > button:nth-child(1) {
    border-bottom-left-radius: 1rem;
    background-color: #e6e5e5;
  }
  & > button:nth-child(2) {
    border-bottom-right-radius: 1rem;
    background-color: ${(props) => props.theme.colors.main};
    color: white;
  }
`;
