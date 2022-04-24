import styled from '@styles/theme-components';

export const WhiteContainer = styled.section<{ width?: string; height?: string }>`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  overflow-y: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
