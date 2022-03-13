import { useState } from 'react';
import { useGetUserQuery } from '@stores/user';
import Tabs from '@components/common/Tabs';
import Table from '@components/common/Table';
import * as S from './styled';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { useGetStockIndexesQuery } from '@stores/stock-index';
import { useGetBoughtStockIndexesQuery } from '@stores/stock-transaction';
import { useGetFavoriteStockIndexesQuery } from '@stores/favorite-stock';

dayjs.locale('ko');

const tabList = ['지표', '보유종목', '최선호종목'];

function IndexBoard() {
  const [currentTab, setCurrentTab] = useState<string>('지표');
  const { isLoading, data: user } = useGetUserQuery({});
  const { data: stockIndexes } = useGetStockIndexesQuery({});
  const { data: boughtStockIndexes } = useGetBoughtStockIndexesQuery({});
  const { data: favoriteStockIndexes } = useGetFavoriteStockIndexesQuery({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <S.IndexBoardContainer>
      <S.RightTextContainer>
        <S.Paragraph>{user && user.userName}님 반갑습니다!</S.Paragraph>
        <S.Paragraph>오늘은 {dayjs().format('MM월 DD일 dddd')}입니다.</S.Paragraph>
      </S.RightTextContainer>
      <S.TodayIndexHeading>📈 오늘의 주요 지표</S.TodayIndexHeading>
      <Tabs tabList={tabList} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Table
        data={
          currentTab === '지표' ? stockIndexes : currentTab === '보유종목' ? boughtStockIndexes : favoriteStockIndexes
        }
      />
    </S.IndexBoardContainer>
  );
}

export default IndexBoard;
