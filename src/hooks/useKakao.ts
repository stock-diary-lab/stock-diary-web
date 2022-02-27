import { useEffect } from 'react';
declare global {
  interface Window {
    Kakao: any;
  }
}

const KAKAO_CLIENT_KEY = 'b7f8b28ebf19dc74de18d535c7108fc0';

function useKakao() {
  useEffect(() => {
    window.Kakao.init(KAKAO_CLIENT_KEY);
  }, []);
}

export default useKakao;
