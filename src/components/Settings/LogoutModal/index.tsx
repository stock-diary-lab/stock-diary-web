import Modal from '@components/common/Modal';
import { Dispatch, SetStateAction } from 'react';
import * as CommonS from '../styled';

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

function LogoutModal({ show, setShow }: Props) {
  return (
    <Modal width={600} show={show} setShow={setShow}>
      <>
        <CommonS.ResignModalContent>
          <h3>정말 로그아웃하시겠습니까?</h3>
        </CommonS.ResignModalContent>
        <CommonS.Buttons>
          <button onClick={() => setShow(false)}>취소</button>
          <button
            onClick={() => {
              if (!window.Kakao.Auth.getAccessToken()) {
                localStorage.removeItem('token');
                sessionStorage.removeItem('token');
                window.location.href = '/';
                return;
              }

              window.Kakao.Auth.logout(function () {
                localStorage.removeItem('token');
                sessionStorage.removeItem('token');
                window.location.href = '/';
              });
            }}
          >
            확인
          </button>
        </CommonS.Buttons>
      </>
    </Modal>
  );
}

export default LogoutModal;
