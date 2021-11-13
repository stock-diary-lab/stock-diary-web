import { useGetStocksQuery } from '@stores/stock';
import { useState } from 'react';
import StockInputModal from './StockInputModal';
import * as S from './styled';

interface Props {
  stockType: 'buy' | 'sell';
}

const stockTypeKorean = {
  buy: '매수',
  sell: '매도',
};

function StockTable({ stockType }: Props) {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const { isLoading, data: stockList } = useGetStocksQuery(
    new Date().toLocaleDateString()
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <S.TableContainer>
        <S.Title>{stockTypeKorean[stockType]}종목</S.Title>
        <S.Table>
          <S.THeader>
            <S.TRow>
              <S.THead>종목</S.THead>
              <S.THead>수량</S.THead>
              <S.THead>단가</S.THead>
              <S.THead>{stockTypeKorean[stockType]}금액</S.THead>
              <S.THead>{stockTypeKorean[stockType]}이유</S.THead>
            </S.TRow>
          </S.THeader>
          <S.TBody>
            {stockList &&
              stockList
                .filter((stock) => stock.type === stockType)
                .map((stock) => (
                  <S.TRow key={stock.name}>
                    <S.TData textAlign="center">{stock.name}</S.TData>
                    <S.TData textAlign="right">{stock.quantity}개</S.TData>
                    <S.TData textAlign="right">
                      {(stock.price * 1).toLocaleString()}원
                    </S.TData>
                    <S.TData textAlign="right">
                      {(stock.quantity * stock.price).toLocaleString()}원
                    </S.TData>
                    <S.TData>{stock.reason}</S.TData>
                  </S.TRow>
                ))}
            <S.TRow>
              <S.TData onClick={() => setModalShow(true)}>추가</S.TData>
            </S.TRow>
          </S.TBody>
        </S.Table>
      </S.TableContainer>
      <StockInputModal
        show={modalShow}
        setShow={setModalShow}
        stockType={stockType}
      />
    </>
  );
}

export default StockTable;
