import { ReactComponent as SearchIcon } from '@svgs/search.svg';
import * as S from './styled';

function SearchBar() {
  return (
    <S.FlexContainer>
      <S.SearchInput type="search" placeholder="종목, 키워드 등을 검색하세요" />
      <SearchIcon />
    </S.FlexContainer>
  );
}

export default SearchBar;
