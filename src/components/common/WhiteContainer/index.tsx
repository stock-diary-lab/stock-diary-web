import * as S from './styled';

interface Props {
  width?: string;
  height?: string;
  children: React.ReactChild;
}

function WhiteContainer({ width, height, children }: Props) {
  return (
    <S.WhiteContainer width={width} height={height}>
      {children}
    </S.WhiteContainer>
  );
}

export default WhiteContainer;
