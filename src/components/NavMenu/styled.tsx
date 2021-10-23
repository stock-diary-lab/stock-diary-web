import styled from '@styles/theme-components';

export const IconButton = styled.button<{
  isSelected?: boolean;
  pageName?: string;
}>`
  background-color: ${(props) =>
    props.isSelected ? props.theme.colors.main : props.theme.colors.white};
  ${(props) => {
    if (props.pageName === '일지' || props.pageName === '뉴스') {
      return (
        props.isSelected &&
        `& > svg > path, & > svg > rect, & > svg > line {
          stroke: ${props.theme.colors.white};
          fill: ${props.theme.colors.main};
        }
        `
      );
    }
    return (
      props.isSelected &&
      `& > svg > path, & > svg > g > path {
      fill: ${props.theme.colors.white};
    } 
    & > svg > circle, & > svg > rect {
      stroke: ${props.theme.colors.white};
      fill: ${props.theme.colors.main};
    }
  `
    );
  }}
  margin: 1rem 0;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  cursor: pointer;

  &::after {
    display: block;
    content: ${(props) => `'${props.pageName}'`};
    color: white;
    font-size: 12px;
    ${(props) => props.pageName === '일지' && `margin-right: 6px;`}
  }
`;

export const Text = styled.span``;

export const LogoContainer = styled.div`
  position: absolute;
  top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const Title = styled.h3`
  font-size: 28px;
  line-height: 31px;
  margin-top: 1rem;
`;

export const IconButtonContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  ${({ theme }) =>
    theme.media.desktop(`
      flex-direction: row;
  `)}
  ${({ theme }) =>
    theme.media.tablet(`
      flex-direction: column;
  `)}
`;

export const NavBar = styled.nav`
  ${({ theme }) =>
    theme.media.desktop(`
      width: 100%;
  `)}
  ${({ theme }) =>
    theme.media.tablet(`
      height: 100vh;
      width: fit-content;
      justify-content: center;
  `)}
`;
