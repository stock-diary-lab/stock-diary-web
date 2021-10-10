import * as S from './styled';

function Dashboard() {
  const rankItems = [
    { name: '삼성전자', percent: 34 },
    { name: '현대자동차', percent: 26 },
    { name: '카카오뱅크', percent: 18 },
    { name: 'IBM', percent: 13 },
    { name: '엑슨모빌', percent: 9 },
  ];

  return (
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
            {rankItems.map(({ name, percent }, id) => (
              <S.RankItem key={name}>
                <span>{id + 1}</span>
                <S.RankInfo>
                  <span>{name}</span>
                  <span>{percent}%</span>
                </S.RankInfo>
              </S.RankItem>
            ))}
          </S.RankItemContainer>
        </S.RankView>
      </S.MiddleRight>
    </S.MiddleContainer>
  );
}

export default Dashboard;
