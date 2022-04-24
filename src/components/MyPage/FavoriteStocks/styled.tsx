import styled from '@styles/theme-components';

export const FavoriteStocksContainer = styled.section`
  width: 30%;
  min-height: 900px;
  overflow-y: scroll;
  margin: 16px 32px;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FavoriteStockItemContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px 32px;
  overflow-y: scroll;

  /* -ms-overflow-style: none; IE and Edge */
  /* scrollbar-width: none; */

  /* &::-webkit-scrollbar {
    display: none;
  } */
`;

export const FavoriteStockItem = styled.div`
  padding: 16px 4px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const FavoriteStockTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 60%;
`;

export const AddBtn = styled.button`
  color: ${(props) => props.theme.colors.main};
  border-bottom: 1px solid ${(props) => props.theme.colors.main};
  padding: 0;
`;

export const DeleteBtn = styled.button`
  display: inline-block;
  margin-left: 4px;
  color: ${(props) => props.theme.colors.main};
  font-size: 0.75rem;
  cursor: pointer;
`;
