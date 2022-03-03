import * as S from './styled';

function GoogleLoginButton() {
  return (
    <S.GoogleLoginButtonContainer href={`${process.env.REACT_APP_SERVER_HOST}/google/redirect`}>
      <img src="./google_login.png" alt="google-login" />
    </S.GoogleLoginButtonContainer>
  );
}

export default GoogleLoginButton;
