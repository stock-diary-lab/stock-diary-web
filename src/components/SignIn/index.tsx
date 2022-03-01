import { WhiteContainer } from '@components/common/WhiteContainer/styled';
import GoogleLoginButton from './GoogleLoginButton';
import KakaoLoginButton from './KakaoLoginButton';
import * as S from './styled';

function SignInComponent() {
  return (
    <>
      <S.SignInContainer>
        <S.BgImageLeft src="./vector-2.png" alt="bg-left" />
        <S.BgImageRight src="./vector-3.png" alt="bg-right" />
      </S.SignInContainer>
      <S.SignInModal>
        <WhiteContainer width="850px" height="700px">
          <S.SignInCenter>
            <img src="./logo2.png" alt="logo2" width={400} />
            <KakaoLoginButton />
            <GoogleLoginButton />
          </S.SignInCenter>
        </WhiteContainer>
      </S.SignInModal>
    </>
  );
}

export default SignInComponent;
