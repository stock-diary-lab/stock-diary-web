import * as S from './styled';

function GoogleLoginButton() {
  return (
    <S.GoogleLoginButtonContainer href="http://localhost:3000/google/redirect">
      <img src="./google_login.png" alt="google-login" />
    </S.GoogleLoginButtonContainer>
  );
}

export default GoogleLoginButton;
