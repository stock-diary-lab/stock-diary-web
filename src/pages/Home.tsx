import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useGetUserQuery } from '../stores/user';
import NavMenu from '../components/NavMenu';
import * as S from './styled';
import Dashboard from '@components/Home/Dashboard';
import IndexBoard from '@components/Home/IndexBoard';
import HistoryBoard from '@components/Home/HistoryBoard';

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
      localStorage.setItem('token', tokenFromParams);
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
        <S.HrLine />
        <HistoryBoard />
      </S.Main>
      <IndexBoard />
    </S.RootContainer>
  );
}

export default Home;
