import * as S from './styled';
import PhraseBoard from './PhraseBoard';
import { ResponsiveContainer, PieChart, Pie, Label, Cell } from 'recharts';
import { useState } from 'react';
import { useGetTopSectorsQuery, useGetTopStocksQuery } from '@stores/stock-transaction';
import styled from '@styles/theme-components';

function Dashboard() {
  const colors = ['#6CA4F4', '#88B4F2', '#76CCFD', '#BAE6FF', '#D8D8D8'];

  const [sectorActiveIndex, setSectorActiveIndex] = useState<number>(0);
  const [stockActiveIndex, setStockActiveIndex] = useState<number>(0);

  // const isBigTablet = useMediaQuery({
  //   query: '(min-width: 1366px)',
  // });

  // const isSmallTablet = useMediaQuery({
  //   query: '(max-width: 1024px)',
  // });

  const { data: rankItems } = useGetTopStocksQuery({});
  const { data: sectors } = useGetTopSectorsQuery({});

  // console.log(rankItems);
  return (
    <S.DashboardContainer>
      <S.Heading>🚀 자주 들여다 보는 대시보드</S.Heading>
      <PhraseBoard />
      <S.MiddleContainer>
        <S.MiddleLeft>
          <S.Heading>보유 섹터 Top 5</S.Heading>
          <ResponsiveContainer width="100%" height={230}>
            {sectors && sectors.length !== 0 ? (
              <PieChart>
                <Pie
                  data={sectors}
                  dataKey="percent"
                  nameKey="sector"
                  activeIndex={sectorActiveIndex}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  innerRadius={60}
                  fill="#8884d8"
                  onMouseEnter={(_, index) => setSectorActiveIndex(index)}
                >
                  <Label
                    value={`${sectors[sectorActiveIndex].sector} (${sectors[sectorActiveIndex].percent}%)`}
                    position="center"
                  />
                  {colors.map((color) => (
                    <Cell fill={color} key={color} />
                  ))}
                </Pie>
              </PieChart>
            ) : (
              <BlankTextContainer>거래내역이 없습니다.</BlankTextContainer>
            )}
          </ResponsiveContainer>
        </S.MiddleLeft>
        <S.MiddleRight>
          <S.Heading>보유 주식 비중 Top 5</S.Heading>
          <ResponsiveContainer width="100%" height={230}>
            {rankItems && rankItems.length !== 0 ? (
              <PieChart>
                <Pie
                  data={rankItems}
                  dataKey="percent"
                  nameKey="name"
                  activeIndex={stockActiveIndex}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  innerRadius={60}
                  fill="#8884d8"
                  onMouseEnter={(_, index) => setStockActiveIndex(index)}
                >
                  <Label
                    value={`${rankItems[stockActiveIndex].name} (${rankItems[stockActiveIndex].percent}%)`}
                    position="center"
                  />
                  {colors.map((color) => (
                    <Cell fill={color} key={color} />
                  ))}
                </Pie>
              </PieChart>
            ) : (
              <BlankTextContainer>거래내역이 없습니다.</BlankTextContainer>
            )}
          </ResponsiveContainer>
        </S.MiddleRight>
      </S.MiddleContainer>
    </S.DashboardContainer>
  );
}

export default Dashboard;

const BlankTextContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;
