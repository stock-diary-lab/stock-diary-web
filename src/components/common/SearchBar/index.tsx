import { ReactComponent as SearchIcon } from '@svgs/search.svg';
import { useState, useRef } from 'react';
import * as S from './styled';

interface Props {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  searchList: any[];
  isInModal: boolean;
  value?: any;
  setValue?: (val: any) => void;
  renderItem?: () => JSX.Element | null;
  width?: string;
}

function SearchBar({ placeholder, onChange, searchList, isInModal, value, setValue, renderItem, width }: Props) {
  const [onFocus, setOnFocus] = useState<boolean>(false);
  const [isHashTag, setIsHashTag] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <S.SearchContainer isListEmpty={searchList.length === 0} isInModal={isInModal}>
      <S.SearchInputContainer>
        <S.SearchInput
          width={width}
          isInModal={isInModal}
          isNotFocused={!onFocus}
          type="search"
          value={value || ''}
          placeholder={placeholder}
          autoComplete="off"
          onChange={(e) => {
            onChange(e);
            if (e.target.value.startsWith('@')) {
              setIsHashTag(true);
            } else {
              setIsHashTag(false);
            }
          }}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          isHashTag={isHashTag}
          ref={inputRef}
        />
        <SearchIcon width={isInModal ? '16' : '20'} />
      </S.SearchInputContainer>
      {
        onFocus && searchList.length > 0 && renderItem && <S.SearchList>{renderItem()}</S.SearchList>
        // <S.SearchList>
        //   {searchList.map((searchItem, index) => (
        //     <S.SearchItem
        //       key={index}
        //       onMouseDown={() => {
        //         // if (inputRef.current) {
        //         //   inputRef.current.value = searchItem[firstKey];
        //         // }
        //         if (setValue) {
        //           setValue(searchItem);
        //         }
        //       }}
        //     >
        //       <span>{searchItem[firstKey]}</span>
        //       {secondKey && <span>{searchItem[secondKey]}</span>}
        //     </S.SearchItem>
        //   ))}
        // </S.SearchList>
      }
    </S.SearchContainer>
  );
}

export default SearchBar;
