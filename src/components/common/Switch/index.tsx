import { ChangeEvent } from 'react';
import * as S from './styled';

interface Props {
  defaultChecked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Switch({ defaultChecked, onChange }: Props) {
  return (
    <S.SwitchLabel>
      <S.SwitchInput type="checkbox" defaultChecked={defaultChecked} onChange={onChange} />
      <span>
        <small></small>
      </span>
    </S.SwitchLabel>
  );
}

export default Switch;
