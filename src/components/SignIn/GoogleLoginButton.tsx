import * as S from './styled';

function GoogleLoginButton() {
  return (
    <S.GoogleLoginButtonContainer href="http://localhost:3000/google/redirect">
      <S.GoogleLogoImg src="./g-normal.png" alt="google-btn" />
      <span>구글로 로그인</span>
    </S.GoogleLoginButtonContainer>
  );
}

export default GoogleLoginButton;
