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
        <StyledTab
          isSelected={currentTab === tab}
          onClick={() => setCurrentTab(tab)}
        >
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
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  font-size: 12px;
`;

export default Tabs;
