import { Dispatch, SetStateAction, useMemo } from 'react';
import { useGetStockTransactionsQuery } from '@stores/stock-transaction';
import { useState } from 'react';
import StockInputModal from './StockInputModal';
import * as S from './styled';
import { DateObj } from './Calendar/types';
import { StockTransaction } from '@stores/stock-transaction/types';
import { MarketType } from '@stores/listed-stock/types';
import { customLocaleDateString } from '@utils/date';

interface Props {
  stockType: 'buy' | 'sell';
  date: DateObj;
  setDate: Dispatch<SetStateAction<DateObj>>;
}

const stockTypeKorean = {
  buy: '매수',
  sell: '매도',
};

function StockTable({ stockType, date, setDate }: Props) {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [currentStock, setCurrentStock] = useState<StockTransaction>({
    id: 0,
    listedStock: { id: '', industry: '', name: '', market: MarketType.KOSPI },
    quantity: 0,
    price: 0,
    fee: 0,
    type: 'buy',
    reason: '',
    date: customLocaleDateString(date),
  });

  const { isLoading, data: stockObj } = useGetStockTransactionsQuery({
    startDate: `${date.year}-${date.month}-${date.date}`,
    endDate: `${date.year}-${date.month}-${date.date}`,
  });

  const stockTransactions = useMemo(() => {
    if (!stockObj) return null;
    return stockObj[customLocaleDateString(date)]?.filter((stock) => stock.type === stockType);
  }, [stockObj, date, stockType]);

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
            {new Array(3).fill(0).map((_, idx) => (
              <S.TRow
                key={`${stockTransactions?.[idx]?.listedStock.name}-${idx}`}
                onClick={() => {
                  if (!stockTransactions) return;
                  setIsEditMode(true);
                  setCurrentStock({ ...stockTransactions[idx] });
                  setModalShow(true);
                }}
              >
                <S.TData textAlign="center">{stockTransactions?.[idx]?.listedStock.name}</S.TData>
                <S.TData textAlign="right">
                  {stockTransactions &&
                    stockTransactions[idx] &&
                    Number(stockTransactions?.[idx]?.quantity).toLocaleString() + '개'}
                </S.TData>
                <S.TData textAlign="right">
                  {stockTransactions &&
                    stockTransactions[idx] &&
                    Number(stockTransactions?.[idx]?.price).toLocaleString() + '원'}
                </S.TData>
                <S.TData textAlign="right">
                  {stockTransactions &&
                    stockTransactions[idx] &&
                    (
                      Number(stockTransactions?.[idx]?.quantity) * Number(stockTransactions?.[idx]?.price)
                    ).toLocaleString() + '원'}
                </S.TData>
                <S.TData>{stockTransactions?.[idx]?.reason}</S.TData>
              </S.TRow>
            ))}
            {stockTransactions &&
              stockTransactions.slice(4).map((stock, id) => (
                <S.TRow
                  key={`${stock.listedStock.name}-${id}`}
                  onClick={() => {
                    setIsEditMode(true);
                    setCurrentStock({ ...stock });
                    setModalShow(true);
                  }}
                >
                  <S.TData textAlign="center">{stock.listedStock.name}</S.TData>
                  <S.TData textAlign="right">{stock.quantity}개</S.TData>
                  <S.TData textAlign="right">{(stock.price * 1).toLocaleString()}원</S.TData>
                  <S.TData textAlign="right">{(stock.quantity * stock.price).toLocaleString()}원</S.TData>
                  <S.TData>{stock.reason}</S.TData>
                </S.TRow>
              ))}
          </S.TBody>
          <S.AddButton
            onClick={() => {
              setModalShow(true);
              setIsEditMode(false);
            }}
          >
            <tr>
              <td>추가</td>
            </tr>
          </S.AddButton>
        </S.Table>
      </S.TableContainer>
      <StockInputModal
        show={modalShow}
        setShow={setModalShow}
        isEditMode={isEditMode}
        currentStock={currentStock}
        stockType={stockType}
        date={date}
      />
    </>
  );
}

export default StockTable;
