import { ReactComponent as SearchIcon } from '@svgs/search.svg';
import { useState, useRef } from 'react';
import * as S from './styled';

interface Props {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  searchList: any[];
  firstKey: string;
  secondKey?: string;
  isInModal: boolean;
}

function SearchBar({
  placeholder,
  onChange,
  searchList,
  firstKey,
  secondKey,
  isInModal,
}: Props) {
  const [onFocus, setOnFocus] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <S.SearchContainer
      isListEmpty={searchList.length === 0}
      isInModal={isInModal}
    >
      <S.SearchInputContainer>
        <S.SearchInput
          isInModal={isInModal}
          isNotFocused={!onFocus}
          type="search"
          placeholder={placeholder}
          autoComplete="off"
          onChange={onChange}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          ref={inputRef}
        />
        <SearchIcon width={isInModal ? '16' : '20'} />
      </S.SearchInputContainer>
      {onFocus && searchList.length > 0 && (
        <S.SearchList>
          {searchList.map((searchItem, index) => (
            <S.SearchItem
              key={index}
              onMouseDown={() => {
                // setValue(searchItem[firstKey]);
                if (inputRef.current) {
                  inputRef.current.value = searchItem[firstKey];
                }
              }}
            >
              <span>{searchItem[firstKey]}</span>
              {secondKey && <span>{searchItem[secondKey]}</span>}
            </S.SearchItem>
          ))}
        </S.SearchList>
      )}
    </S.SearchContainer>
  );
}

export default SearchBar;
