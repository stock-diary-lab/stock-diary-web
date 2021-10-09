import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useGetUserQuery } from '../stores/user';
import NavMenu from '../components/NavMenu';
import * as S from './styled';

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

  const { isLoading, isError, data } = useGetUserQuery({});

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
        <button
          onClick={() => {
            localStorage.removeItem('token');
            window.location.href = '/';
          }}
        >
          {data && data.userName} 님 로그아웃
        </button>
      </S.Main>
    </S.RootContainer>
  );
}

export default Home;
