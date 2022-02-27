import * as S from './styled';

function Switch() {
  return (
    <S.SwitchLabel>
      <S.SwitchInput type="checkbox" />
      <span>
        <small></small>
      </span>
    </S.SwitchLabel>
  );
}

export default Switch;
