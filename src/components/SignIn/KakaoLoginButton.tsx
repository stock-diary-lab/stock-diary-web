import { useLoginWithKakaoMutation } from '@stores/user';
import { isAutoLogin } from '@utils/auth';

declare global {
  interface Window {
    Kakao: any;
  }
}

function KakaoLoginButton() {
  const [loginWithKakao] = useLoginWithKakaoMutation();

  const getKakaoAccount = () => {
    window.Kakao.API.request({
      url: '/v2/user/me',
      success: (res: any) => {
        const kakaoInfo = res.kakao_account;
        const reqBody = {
          providerId: res.id.toString(),
          nickname: kakaoInfo.profile.nickname,
          provider: 'kakao',
        };

        loginWithKakao(reqBody).then((response: any) => {
          const storage = isAutoLogin() ? localStorage : sessionStorage;
          storage.setItem('token', response.data.accessToken);
          window.location.href = '/';
        });
      },
      fail: function (error: any) {
        alert('login success, but failed to request user information: ' + JSON.stringify(error));
      },
    });
  };

  return (
    <img
      src="./kakao_login.png"
      alt="kakao-login-btn"
      width={450}
      style={{ cursor: 'pointer' }}
      onClick={() => {
        window.Kakao.Auth.login({
          success: getKakaoAccount,
          fail: function (err: any) {
            alert(JSON.stringify(err));
          },
        });
      }}
    />
  );
}

export default KakaoLoginButton;
