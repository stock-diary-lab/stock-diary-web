import styled from '@styles/theme-components';

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.gray};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;

export const LoginWrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.gray};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 100px;
`;

export const RootContainer = styled.div`
  ${(props) => props.theme.media.desktop(`display: block`)}
  ${(props) => props.theme.media.tablet(`display: flex`)}
`;
