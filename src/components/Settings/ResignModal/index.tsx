import Modal from '@components/common/Modal';
import { useDeleteUserMutation } from '@stores/user';
import { Dispatch, SetStateAction } from 'react';
import useKakao from '../../../hooks/useKakao';
import * as CommonS from '../styled';

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

function ResignModal({ show, setShow }: Props) {
  const [deleteUser] = useDeleteUserMutation();

  useKakao();

  return (
    <Modal width={600} show={show} setShow={setShow}>
      <>
        <CommonS.ResignModalContent>
          <h3>정말 탈퇴하시겠습니까?</h3>
          <p>(탈퇴하시면 작성한 일지는 복구되지 않습니다.)</p>
        </CommonS.ResignModalContent>
        <CommonS.Buttons>
          <button onClick={() => setShow(false)}>취소</button>
          <button
            onClick={() => {
              deleteUser({});
              window.Kakao.API.request({
                url: '/v1/user/unlink',
                success: (res: any) => {
                  window.location.href = '/';
                },
                fail: (res: any) => {
                  console.log(res);
                },
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

export default ResignModal;
