import styled from '@styles/theme-components';

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.gray};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RootContainer = styled.div`
  ${(props) => props.theme.media.desktop(`display: block`)}
  ${(props) => props.theme.media.tablet(`display: flex`)}
`;
