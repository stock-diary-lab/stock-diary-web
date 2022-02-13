import styled from '@styles/theme-components';

export const HomeContainer = styled.div`
  display: flex;
`;

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.gray};
  /* display: flex; */
  /* flex-direction: column;
  justify-content: center; */
  padding: 0 1rem;
  width: 100%;
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

export const HrLine = styled.hr`
  width: 100%;
  border-top: 1px solid #e5e5e5;
`;

export const RootContainer = styled.div`
  /* display: flex; */
  /* ${(props) => props.theme.media.desktop(`display: block;`)}
  ${(props) => props.theme.media.tablet(`display: flex;`)} */
`;
