import styled from '@styles/theme-components';
import { MyPageItem } from '../styled';

export const PrinciplesContainer = styled.section`
  width: 65%;
  margin: 16px 32px;
`;

export const AddPrincipleBtn = styled.span`
  border-bottom: 1px solid ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.main};
`;

export const CheckMark = styled.span`
  content: '✔';
  display: inline-block;
  margin-right: 8px;
`;

export const PrincipleItem = styled(MyPageItem)`
  justify-content: flex-start;
  height: 46px;
`;

export const PrincipleContent = styled.pre`
  &[contenteditable] {
    outline: none;
  }
`;

export const AddPrincipleTextArea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 12px;
`;
