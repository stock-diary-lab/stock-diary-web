import Switch from '@components/common/Switch';
import WhiteContainer from '@components/common/WhiteContainer';
import { useState } from 'react';
import LogoutModal from './LogoutModal';
import ResignModal from './ResignModal';
import * as S from './styled';

function SettingsComponent() {
  const [resignModalShow, setResignModalShow] = useState<boolean>(false);
  const [logoutModalShow, setLogoutModalShow] = useState<boolean>(false);

  return (
    <>
      <S.SettingsContainer>
        <div>
          <S.SettingsTitle>⚙ 설정</S.SettingsTitle>
          <WhiteContainer width="800px">
            <S.SettingItemContainer>
              <S.SettingItem>
                <h4>자동 로그인</h4>
                <Switch
                  defaultChecked={true}
                  onChange={(e) => {
                    const token = localStorage.getItem('token') || sessionStorage.getItem('token');

                    if (e.currentTarget.checked) {
                      if (localStorage.getItem('token')) return;
                      localStorage.setItem('token', token as string);
                      sessionStorage.removeItem('token');
                    } else if (!e.currentTarget.checked) {
                      if (sessionStorage.getItem('token')) return;
                      sessionStorage.setItem('token', token as string);
                      localStorage.removeItem('token');
                    }
                  }}
                />
              </S.SettingItem>
              <S.SettingItem
                onClick={() => {
                  setResignModalShow(true);
                }}
              >
                <h4>회원 탈퇴</h4>
              </S.SettingItem>
              <S.SettingItem
                onClick={() => {
                  setLogoutModalShow(true);
                }}
              >
                <h4>로그아웃</h4>
              </S.SettingItem>
            </S.SettingItemContainer>
          </WhiteContainer>
          <S.SettingsBottom>
            <a href="https://pf.kakao.com/_cyvbb" target={'_blank'} rel={'noreferrer'}>
              카카오톡 문의하기
            </a>
            <span>Ver 1.0.0</span>
          </S.SettingsBottom>
        </div>
      </S.SettingsContainer>
      <ResignModal show={resignModalShow} setShow={setResignModalShow} />
      <LogoutModal show={logoutModalShow} setShow={setLogoutModalShow} />
    </>
  );
}

export default SettingsComponent;
