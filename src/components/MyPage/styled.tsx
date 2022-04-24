import styled from '@styles/theme-components';

export const MyPageTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
`;

export const MyPageContainer = styled.section`
  display: flex;
  justify-content: center;
`;

export const MyPageItemContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px 32px;
  overflow-y: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MyPageItem = styled.div`
  padding: 16px 4px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  min-height: 44px;
  cursor: pointer;

  &[contenteditable] {
    outline: none;
  }
`;

export const DeleteBtn = styled.button`
  display: inline-block;
  margin-left: 4px;
  color: ${(props) => props.theme.colors.main};
  font-size: 0.75rem;
  cursor: pointer;
`;

export const AddBtn = styled.span`
  border-bottom: 1px solid ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.main};
`;
