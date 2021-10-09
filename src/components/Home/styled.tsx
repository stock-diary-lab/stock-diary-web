import styled from '@styles/theme-components';

export const MiddleContainer = styled.section`
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  border-radius: 1rem;
  padding: 2rem;
`;

export const MiddleLeft = styled.div`
  padding-right: 2rem;
  border-right: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AlignRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const Heading = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
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
  padding-left: 2rem;
  width: fit-content;
`;

export const RankView = styled.div``;

export const RankItemContainer = styled.div`
  margin-top: 2rem;
`;

export const RankItem = styled.div`
  display: flex;
  margin-bottom: 1rem;
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
  padding: 1rem;
`;

export const HistoryBoardContainer = styled.section`
  display: flex;
  margin-top: 4rem;
`;

export const HistoryBoard = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 1rem;
  width: 50%;
  padding: 0.5rem 0.5rem;
  margin: 0 0.5rem;
`;

export const HistoryBoardHeader = styled.div`
  background-color: ${(props) => props.theme.colors.sky};
  margin: 0.5rem 0;
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  font-weight: 500;
  text-align: center;
`;

export const HistoryBoardContentContainer = styled.div`
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  min-height: 200px;
`;

export const HistoryBoardContent = styled.div`
  padding: 0.5rem 0;
  border-bottom: 1px solid #e5e5e5;
`;
