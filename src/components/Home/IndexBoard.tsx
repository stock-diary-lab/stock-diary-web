import Tabs from '@components/common/Tabs';
import { useState } from 'react';
import * as S from './styled';

const tabList = ['지표', '보유종목', '최선호종목'];

function IndexBoard() {
  const [currentTab, setCurrentTab] = useState<string>('지표');
  return (
    <S.IndexBoardContainer>
      <S.Heading>오늘의 주요 지표</S.Heading>
      <Tabs
        tabList={tabList}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <div>{currentTab} 테이블 보여주기</div>
    </S.IndexBoardContainer>
  );
}

export default IndexBoard;
