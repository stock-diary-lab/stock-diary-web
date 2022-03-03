import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useGetUserQuery } from '../stores/user';
import NavMenu from '../components/NavMenu';
import * as S from './styled';
import Dashboard from '@components/Home/Dashboard';
import IndexBoard from '@components/Home/IndexBoard';
import HistoryBoard from '@components/Home/HistoryBoard';
import { isAutoLogin } from '@utils/auth';

declare global {
  interface Window {
    Kakao: any;
  }
}

function Home() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tokenFromParams = params.get('token');

    if (tokenFromParams) {
      const storage = isAutoLogin() ? localStorage : sessionStorage;
      storage.setItem('token', tokenFromParams);
      window.location.href = '/';
    }
  }, [location.search]);

  const { isLoading, isError } = useGetUserQuery({});

  if (isError) {
    history.replace('/signin');
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <S.RootContainer>
      <NavMenu />
      <S.HomeContainer>
        <S.Main>
          <Dashboard />
          {/* <button
          onClick={() => {
            localStorage.removeItem('token');
            window.location.href = '/';
          }}
        >
          {data && data.userName} 님 로그아웃
        </button> */}
          <HistoryBoard />
        </S.Main>
        <IndexBoard />
      </S.HomeContainer>
    </S.RootContainer>
  );
}

export default Home;
