import { Dispatch, useRef, SetStateAction } from 'react';
import * as S from './styled';
import { ReactComponent as XButton } from '@svgs/x_btn.svg';
import { createPortal } from 'react-dom';

interface ModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  children: React.ReactChild;
}

function Modal({ show, setShow, children }: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onClickOverlayClose = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (ref.current && ref.current.contains(e.target as Node)) return;
    setShow(false);
  };

  const modal = show ? (
    <S.Overlay onClick={onClickOverlayClose}>
      <S.Modal ref={ref}>
        <S.ModalHeader>
          <XButton onClick={() => setShow(false)}></XButton>
        </S.ModalHeader>

        <S.ModalBody>{children}</S.ModalBody>
      </S.Modal>
    </S.Overlay>
  ) : null;

  return createPortal(
    modal,
    document.getElementById('modal-root') as HTMLElement
  );
}

export default Modal;