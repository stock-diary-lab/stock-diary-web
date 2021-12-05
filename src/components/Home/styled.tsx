import styled from '@styles/theme-components';

export const MiddleContainer = styled.section`
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
`;

export const MiddleLeft = styled.div`
  padding-right: 2rem;
  border-right: 1px solid #e5e5e5;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AlignRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Heading = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  white-space: nowrap;
  align-self: flex-start;
  margin-bottom: 16px;
`;

export const RedLargeText = styled.span`
  color: ${(props) => props.theme.colors.red};
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const BlackMiddleText = styled.span`
  color: ${(props) => props.theme.colors.black};
  font-size: 1.5rem;
  font-weight: 500;
`;

export const MiddleRight = styled.div`
  padding-left: 1.5rem;
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RankView = styled.div``;

export const RankItemContainer = styled.div`
  margin-top: 2rem;
`;

export const RankItem = styled.div`
  display: flex;
  margin-bottom: 1rem;

  & > span {
    display: inline-block;
    width: 0.5rem;
  }
`;

export const Rank = styled.span`
  display: inline-block;
  margin-right: 2rem;
`;

export const RankInfo = styled.div`
  width: 100%;
  margin-left: 2rem;
  display: flex;
  justify-content: space-between;
`;

export const IndexBoardContainer = styled.section`
  background-color: ${(props) => props.theme.colors.white};
  padding: 3rem 1rem;
`;

export const BoardContainer = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 2rem 0;
`;

export const HistoryBoard = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 1rem;
  width: 49%;
  padding: 0.75rem 1rem;
`;

export const HistoryBoardHeader = styled.div`
  background-color: ${(props) => props.theme.colors.sky};
  margin-bottom: 0.75rem;
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  font-weight: 500;
  text-align: center;
`;

export const HistoryBoardContentContainer = styled.div`
  border-top: 1px solid #e5e5e5;
`;

export const HistoryBoardContent = styled.div`
  padding: 0.5rem 0;
  border-bottom: 1px solid #e5e5e5;
`;

export const HistoryBoardInput = styled.input`
  padding: 0.5rem 0;
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
`;

export const Phrase = styled.div`
  background: linear-gradient(258.38deg, #76ccfd 0%, #6ca4f4 101.43%);
  border-radius: 1rem;
  color: ${(props) => props.theme.colors.white};
  width: 49%;
  padding: 2rem;
`;

export const PhraseHeading = styled(Heading)`
  font-weight: bold;
  margin-bottom: 2rem;
  line-height: 35px;
  white-space: pre-wrap;
`;

export const DashboardHeading = styled(Heading)`
  margin-left: 1rem;
`;

export const RightTextContainer = styled(AlignRight)`
  margin-bottom: 2rem;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap;
  line-height: 23px;
`;

export const TodayIndexHeading = styled(Heading)`
  margin-bottom: 1rem;
`;
