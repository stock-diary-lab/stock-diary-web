import Modal from '@components/common/Modal';
import { Dispatch, SetStateAction } from 'react';
import * as S from './styled';

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  alertMessage: string;
}

function StockInputAlert({ show, setShow, alertMessage }: Props) {
  return (
    <Modal show={show} setShow={setShow} width={700} height={185}>
      <>
        <S.StockInputAlertBody>{alertMessage}</S.StockInputAlertBody>
        <S.AlertImg src="./alert.png" alt="alert" />
      </>
    </Modal>
  );
}

export default StockInputAlert;
