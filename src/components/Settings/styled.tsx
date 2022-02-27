import styled from '@styles/theme-components';

export const SettingsContainer = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SettingsTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
`;

export const SettingItemContainer = styled.div`
  padding: 0 24px;
`;

export const SettingItem = styled.div`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 64px;
  cursor: pointer;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  font-size: 18px;
`;

export const ResignModalContent = styled.div`
  text-align: center;
  margin-bottom: 64px;
  margin-top: 32px;

  & > h3 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 32px;
  }
`;

export const Buttons = styled.div`
  display: flex;

  & > button {
    width: 50%;
    padding: 1rem 0;
    font-size: 1rem;
    cursor: pointer;
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
