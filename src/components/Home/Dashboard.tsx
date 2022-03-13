import * as S from './styled';
import PhraseBoard from './PhraseBoard';
import { ResponsiveContainer, PieChart, Pie, Label, Cell, Sector, Text } from 'recharts';
import { useState } from 'react';
import { useGetTopFiveQuery } from '@stores/stock-transaction';
import styled from '@styles/theme-components';

function Dashboard() {
  const colors = ['#6CA4F4', '#88B4F2', '#76CCFD', '#BAE6FF', '#D8D8D8'];

  const [sectorActiveIndex, setSectorActiveIndex] = useState<number>(0);
  const [stockActiveIndex, setStockActiveIndex] = useState<number>(0);

  const { data: rankItems } = useGetTopFiveQuery({});

  const renderActiveShape = (props: any) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 5}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };

  return (
    <S.DashboardContainer>
      <S.Heading>🚀 자주 들여다 보는 대시보드</S.Heading>
      <PhraseBoard />
      <S.MiddleContainer>
        <S.MiddleLeft>
          <S.Heading>보유 섹터 Top 5</S.Heading>
          <ResponsiveContainer width="100%" height={230}>
            {rankItems && rankItems.topFiveSectors.length !== 0 ? (
              <PieChart>
                <Pie
                  data={rankItems.topFiveSectors}
                  dataKey="percent"
                  nameKey="sector"
                  activeIndex={sectorActiveIndex}
                  activeShape={renderActiveShape}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  innerRadius={60}
                  fill="#8884d8"
                  onMouseEnter={(e, index) => {
                    setSectorActiveIndex(index);
                  }}
                >
                  <Label
                    position="center"
                    color="#3B80E3"
                    content={(props) => {
                      const {
                        viewBox: { cx, cy },
                      } = props;
                      return (
                        <g>
                          <Text
                            x={cx}
                            y={cy - 10}
                            textAnchor="middle"
                            verticalAnchor="middle"
                            fill="#3B80E3"
                            fontSize={'16'}
                          >
                            {rankItems.topFiveSectors[sectorActiveIndex].sector}
                          </Text>
                          <Text
                            x={cx}
                            y={cy + 20}
                            textAnchor="middle"
                            verticalAnchor="end"
                            fill="#939393"
                            fontSize={'16'}
                          >
                            {rankItems.topFiveSectors[sectorActiveIndex].percent + '%'}
                          </Text>
                        </g>
                      );
                    }}
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
            {rankItems && rankItems.topFiveStocks.length !== 0 ? (
              <PieChart>
                <Pie
                  data={rankItems.topFiveStocks}
                  dataKey="percent"
                  nameKey="name"
                  activeIndex={stockActiveIndex}
                  activeShape={renderActiveShape}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  innerRadius={60}
                  fill="#8884d8"
                  onMouseEnter={(_, index) => setStockActiveIndex(index)}
                >
                  <Label
                    position="center"
                    content={(props) => {
                      const {
                        viewBox: { cx, cy },
                      } = props;
                      return (
                        <g>
                          <Text
                            x={cx}
                            y={cy - 10}
                            textAnchor="middle"
                            verticalAnchor="middle"
                            fill="#3B80E3"
                            fontSize={'16'}
                          >
                            {rankItems.topFiveStocks[stockActiveIndex].name}
                          </Text>
                          <Text
                            x={cx}
                            y={cy + 20}
                            textAnchor="middle"
                            verticalAnchor="end"
                            fill="#939393"
                            fontSize={'16'}
                          >
                            {rankItems.topFiveStocks[stockActiveIndex].percent + '%'}
                          </Text>
                        </g>
                      );
                    }}
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
