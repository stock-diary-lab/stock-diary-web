import * as S from './styled';
import KakaoLoginButton from '@components/SignIn/KakaoLoginButton';
import GoogleLoginButton from '@components/SignIn/GoogleLoginButton';
import { useLocation } from 'react-router';
import { useEffect } from 'react';

function SignIn() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    console.log(params.get('token'));
  }, []);

  return (
    <S.RootContainer>
      <S.LoginWrapper>
        <S.Title>자주노트</S.Title>
        <KakaoLoginButton />
        <GoogleLoginButton />
      </S.LoginWrapper>
    </S.RootContainer>
  );
}

export default SignIn;
