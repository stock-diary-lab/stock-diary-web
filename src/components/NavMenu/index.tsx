import * as S from './styled';
import { ReactComponent as HomeIcon } from '@svgs/home.svg';
import { ReactComponent as DiaryIcon } from '@svgs/diary.svg';
import { ReactComponent as SettlementIcon } from '@svgs/settlement.svg';
import { ReactComponent as NewsIcon } from '@svgs/news.svg';
import { ReactComponent as MyPageIcon } from '@svgs/mypage.svg';
import { ReactComponent as SettingIcon } from '@svgs/setting.svg';
import { useHistory } from 'react-router';

function NavMenu() {
  const history = useHistory();

  const pathName = history.location.pathname;

  return (
    <S.NavBar>
      <S.LogoContainer>
        <img src="./logo.png" width="60" alt="logo" />
        <S.Title>자주노트</S.Title>
      </S.LogoContainer>
      <S.IconButtonContainer>
        <S.IconButton
          isSelected={pathName === '/'}
          onClick={() => history.push('/')}
          pageName="HOME"
        >
          <HomeIcon />
        </S.IconButton>
        <S.IconButton
          isSelected={pathName === '/diary'}
          onClick={() => history.push('/diary')}
          pageName="일지"
        >
          <DiaryIcon />
        </S.IconButton>
        <S.IconButton
          isSelected={pathName === '/settlement'}
          onClick={() => history.push('/settlement')}
          pageName="결산"
        >
          <SettlementIcon />
        </S.IconButton>
        <S.IconButton
          isSelected={pathName === '/news'}
          onClick={() => history.push('/news')}
          pageName="뉴스"
        >
          <NewsIcon />
        </S.IconButton>
        <S.IconButton
          isSelected={pathName === '/mypage'}
          onClick={() => history.push('/mypage')}
          pageName="MY"
        >
          <MyPageIcon />
        </S.IconButton>
        <S.IconButton
          isSelected={pathName === '/settings'}
          onClick={() => history.push('/settings')}
          pageName="설정"
        >
          <SettingIcon />
        </S.IconButton>
      </S.IconButtonContainer>
    </S.NavBar>
  );
}

export default NavMenu;
