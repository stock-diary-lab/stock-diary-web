import CalendarTab from './CalendarTab';
import SearchBar from './SearchBar';
import * as S from './styled';

function TopBar() {
  return (
    <S.TopBarContainer>
      <SearchBar />
      <CalendarTab />
    </S.TopBarContainer>
  );
}

export default TopBar;
