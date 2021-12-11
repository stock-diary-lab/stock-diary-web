import styled from '@styles/theme-components';

export const SearchContainer = styled.div<{
  isListEmpty: boolean;
  isInModal: boolean;
}>`
  z-index: 2;
  position: relative;
  padding: 4px;
  &:focus-within {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    background-color: white;
  }
  ${(props) =>
    props.isListEmpty &&
    `border-bottom-left-radius: 16px; border-bottom-right-radius: 16px;`}
  ${(props) => props.isInModal && `width: 100%;`}
`;

export const SearchInputContainer = styled.div`
  z-index: 3;
  position: relative;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input<{
  isInModal: boolean;
  isNotFocused: boolean;
}>`
  ${(props) =>
    props.isInModal && props.isNotFocused
      ? `width: 100%; border-bottom: 1px solid #afafaf;
  padding-bottom: 0.25rem;
  font-size: 0.75rem;`
      : `width: 300px;
  padding: 0.5rem 1rem;
  border: 1px solid ${props.theme.colors.main};
  border-radius: 20px;
  margin-right: 0.5rem;
`}

  &[type='search']::-webkit-search-cancel-button {
    visibility: hidden;
  }
`;

export const SearchList = styled.div`
  max-height: 156px;
  overflow-y: scroll;
  z-index: 4;
  position: absolute;
  left: 0;
  padding: 8px 0;
  width: 100%;
  background-color: white;
  box-shadow: 6px 4px 12px rgba(0, 0, 0, 0.15);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

export const SearchItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #afafaf;
  padding: 8px;
`;
