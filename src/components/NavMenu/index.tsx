import * as S from './styled';
import { useHistory } from 'react-router';

function NavMenu() {
  const history = useHistory();

  const pathName = history.location.pathname;

  return (
    <S.NavBar>
      <S.LogoContainer>
        <a href="/">
          <img src="./logo.png" width="148" alt="logo" />
        </a>
      </S.LogoContainer>
      <S.NavItemContainer>
        <S.NavItem isSelected={pathName === '/'} onClick={() => history.push('/')}>
          HOME
        </S.NavItem>
        <S.NavItem isSelected={pathName === '/diary'} onClick={() => history.push('/diary')}>
          일지
        </S.NavItem>
        <S.NavItem isSelected={pathName === '/settlement'} onClick={() => history.push('/settlement')}>
          결산
        </S.NavItem>
        <S.NavItem isSelected={pathName === '/news'} onClick={() => history.push('/news')}>
          뉴스
        </S.NavItem>
        <S.NavItem isSelected={pathName === '/mypage'} onClick={() => history.push('/mypage')}>
          MY
        </S.NavItem>
        <S.NavItem isSelected={pathName === '/settings'} onClick={() => history.push('/settings')}>
          설정
        </S.NavItem>
      </S.NavItemContainer>
    </S.NavBar>
  );
}

export default NavMenu;
