import React, { useEffect, useRef } from 'react';
import styled from '@styles/theme-components';

interface Props {
  defaultValue?: string;
  placeholder?: string;
  onKeyPress?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onBlur: React.FocusEventHandler<HTMLTextAreaElement>;
  width?: string;
}

function DiaryInput({ defaultValue, placeholder, onBlur, onKeyPress, width }: Props) {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <StyledDiaryInput
      width={width}
      ref={inputRef}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onBlur={onBlur}
      onKeyPress={onKeyPress}
    />
  );
}

export default DiaryInput;

const StyledDiaryInput = styled.textarea<{ width?: string }>`
  padding: 8px 0;
  border: 1px solid #e5e5e5;
  width: ${(props) => props.width || `100%`};
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;
