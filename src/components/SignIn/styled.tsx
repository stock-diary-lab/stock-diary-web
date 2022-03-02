import styled from '@styles/theme-components';

export const SignInContainer = styled.main`
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -3;
  background-color: #f9f9f9;
`;

export const GoogleLoginButtonContainer = styled.a`
  display: flex;
  align-items: center;
  padding: 8px;
  background: white;
  font-size: 15px;
  border-radius: 4px;
  margin-top: 16px;
  cursor: pointer;
`;

export const GoogleLogoImg = styled.img`
  margin-right: 20px;
`;

export const SignInModal = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignInCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 3;
`;

export const bgImage = styled.img`
  position: absolute;
  width: 100%;
  height: 60%;
  bottom: 0;
`;

export const Bg = styled.div`
  position: absolute;
  width: 100%;
  height: 60%;
  bottom: 0;
  background-image: url('./vector-2.png');
`;

export const BgImageLeft = styled(bgImage)`
  z-index: -2;
  left: 0;
`;

export const BgImageRight = styled(bgImage)`
  z-index: -1;
  left: 0;
`;
