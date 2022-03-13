import styled from '@styles/theme-components';
import { SetStateAction, Dispatch } from 'react';

interface Props {
  tabList: string[];
  currentTab: string;
  setCurrentTab: Dispatch<SetStateAction<string>>;
}

function Tabs({ tabList, currentTab, setCurrentTab }: Props) {
  return (
    <StyledTabs>
      {tabList.map((tab) => (
        <StyledTab key={tab} isSelected={currentTab === tab} onClick={() => setCurrentTab(tab)}>
          <span>{tab}</span>
        </StyledTab>
      ))}
    </StyledTabs>
  );
}

const StyledTabs = styled.section`
  display: flex;
  background-color: ${(props) => props.theme.secondaryColors.gray};
  border-radius: 1rem;
`;

const StyledTab = styled.div<{ isSelected: boolean }>`
  background-color: ${(props) => props.isSelected && props.theme.colors.main};
  color: ${(props) => props.isSelected && props.theme.colors.white};
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 1rem;
  white-space: nowrap;
  width: 100px;
  text-align: center;
  cursor: pointer;
`;

export default Tabs;
