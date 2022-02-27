import styled from '@styles/theme-components';

export const SwitchLabel = styled.label`
  padding: 0;
`;

export const SwitchInput = styled.input`
  display: none;
  & + span {
    position: relative;
    display: inline-block;
    margin-right: 10px;
    width: 56px;
    height: 28px;
    background-color: #d8d8d8;
    border: 1px solid #eee;
    border-radius: 50px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    small {
      position: absolute;
      display: block;
      width: 50%;
      height: 100%;
      background: #fff;
      border-radius: 50%;
      transition: all 0.3s ease-in-out;
      left: 0;
    }
  }
  &:checked + span {
    background: #6ca4f4;
    border-color: #6ca4f4;
    small {
      left: 50%;
    }
  }
`;
