import * as S from './styled';
import PhraseBoard from './PhraseBoard';
import { PieChart, Pie, Label, Cell } from 'recharts';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

function Dashboard() {
  const rankItems = [
    { name: '삼성전자', value: 34 },
    { name: '현대자동차', value: 26 },
    { name: '카카오뱅크', value: 18 },
    { name: 'IBM', value: 13 },
    { name: '엑슨모빌', value: 9 },
  ];

  const colors = ['#6CA4F4', '#88B4F2', '#76CCFD', '#BAE6FF', '#D8D8D8'];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const isBigTablet = useMediaQuery({
    query: '(min-width: 1366px)',
  });

  const isSmallTablet = useMediaQuery({
    query: '(max-width: 1024px)',
  });

  return (
    <>
      <S.Heading>🚀 자주 들여다 보는 대시보드</S.Heading>
      <PhraseBoard />
      <S.MiddleContainer>
        <S.MiddleLeft>
          <S.Heading>오늘 삼성전자의 주가는 </S.Heading>
          <S.AlignRight>
            <S.RedLargeText>76,300</S.RedLargeText>
            <S.Heading>1,000 (1.33%)</S.Heading>
          </S.AlignRight>
        </S.MiddleLeft>
        <S.MiddleRight>
          <S.RankView>
            <S.Heading>보유 주식 비중 Top 5</S.Heading>
            <S.RankItemContainer>
              {rankItems.map(({ name, value }, id) => (
                <S.RankItem key={name}>
                  <span>{id + 1}</span>
                  <S.RankInfo>
                    <span>{name}</span>
                    <span>{value}%</span>
                  </S.RankInfo>
                </S.RankItem>
              ))}
            </S.RankItemContainer>
          </S.RankView>
          {isBigTablet && (
            <PieChart width={200} height={200}>
              <Pie
                data={rankItems}
                dataKey="value"
                nameKey="name"
                activeIndex={activeIndex}
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={60}
                fill="#8884d8"
                onMouseEnter={(_, index) => setActiveIndex(index)}
              >
                <Label
                  value={`${rankItems[activeIndex].name} (${rankItems[activeIndex].value}%)`}
                  position="center"
                />
                {colors.map((color) => (
                  <Cell fill={color} key={color} />
                ))}
              </Pie>
            </PieChart>
          )}
          {isSmallTablet && (
            <PieChart width={150} height={150}>
              <Pie
                data={rankItems}
                dataKey="value"
                nameKey="name"
                activeIndex={activeIndex}
                cx="50%"
                cy="50%"
                outerRadius={60}
                innerRadius={40}
                fill="#8884d8"
                onMouseEnter={(_, index) => setActiveIndex(index)}
              >
                <Label
                  value={`${rankItems[activeIndex].name} (${rankItems[activeIndex].value}%)`}
                  position="center"
                />
                {colors.map((color) => (
                  <Cell fill={color} key={color} />
                ))}
              </Pie>
            </PieChart>
          )}
        </S.MiddleRight>
      </S.MiddleContainer>
    </>
  );
}

export default Dashboard;
