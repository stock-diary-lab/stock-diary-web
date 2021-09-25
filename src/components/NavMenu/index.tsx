import * as S from './styled';
import { ReactComponent as HomeIcon } from '@svgs/home.svg';
import { ReactComponent as FolderIcon } from '@svgs/folder.svg';
import { ReactComponent as SettingIcon } from '@svgs/setting.svg';
import { ReactComponent as CalendarIcon } from '@svgs/calendar.svg';
import { ReactComponent as BookIcon } from '@svgs/book.svg';
import { useHistory } from 'react-router';

function NavMenu() {
  const history = useHistory();

  const pathName = history.location.pathname;

  return (
    <S.NavBar>
      <S.LogoContainer>
        <HomeIcon />
        <S.Title>자주노트</S.Title>
      </S.LogoContainer>
      <S.IconButtonContainer>
        <S.IconButton
          isSelected={pathName === '/'}
          onClick={() => history.push('/')}
        >
          <HomeIcon />
        </S.IconButton>
        <S.IconButton
          isSelected={pathName === '/diary'}
          onClick={() => history.push('/diary')}
        >
          <CalendarIcon />
        </S.IconButton>
        <S.IconButton
          isSelected={pathName === '/settlement'}
          onClick={() => history.push('/settlement')}
        >
          <FolderIcon />
        </S.IconButton>
        <S.IconButton
          isSelected={pathName === '/mypage'}
          onClick={() => history.push('/mypage')}
        >
          <BookIcon />
        </S.IconButton>
        <S.IconButton
          isSelected={pathName === '/settings'}
          onClick={() => history.push('/settings')}
        >
          <SettingIcon />
        </S.IconButton>
      </S.IconButtonContainer>
    </S.NavBar>
  );
}

export default NavMenu;
