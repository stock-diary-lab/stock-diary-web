import { useEffect } from 'react';
import { useLoginWithKakaoMutation } from '@stores/user';

declare global {
  interface Window {
    Kakao: any;
  }
}

const KAKAO_CLIENT_KEY = 'b7f8b28ebf19dc74de18d535c7108fc0';

function KakaoLoginButton() {
  useEffect(() => {
    window.Kakao.init(KAKAO_CLIENT_KEY);
  }, []);

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
          localStorage.setItem('token', response.data.accessToken);
          window.location.href = '/';
        });
      },
      fail: function (error: any) {
        alert(
          'login success, but failed to request user information: ' +
            JSON.stringify(error)
        );
      },
    });
  };

  return (
    <img
      src="./kakao_login_medium_narrow.png"
      alt="kakao-login-btn"
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
