import styled from '@styles/theme-components';

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div<{ width?: number; height?: number }>`
  position: relative;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 1rem;
  padding: 2rem 0;
  padding-bottom: 0;
  width: ${(props) => props.width + 'px' || 'auto'};
  height: ${(props) => props.height + 'px' || 'auto'};
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 2rem;
`;

export const XButton = styled.button`
  display: block;
`;

export const ModalBody = styled.div`
  position: relative;
`;
