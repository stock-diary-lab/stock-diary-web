import { Dispatch, SetStateAction } from 'react';
import { useGetStocksQuery } from '@stores/stock';
import { useState } from 'react';
import StockInputModal from './StockInputModal';
import * as S from './styled';
import { DateObj } from './Calendar/types';

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

  const { isLoading, data: stockObj } = useGetStocksQuery({
    startDate: `${date.year}-${date.month}-${date.date}`,
    endDate: `${date.year}-${date.month}-${date.date}`,
  });

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
            {stockObj &&
              stockObj[`${date.year}. ${date.month}. ${date.date}.`]
                ?.filter((stock) => stock.type === stockType)
                .map((stock, id) => (
                  <S.TRow key={`${stock.name}-${id}`}>
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
          </S.TBody>
          <S.AddButton onClick={() => setModalShow(true)}>
            <tr>
              <td>추가</td>
            </tr>
          </S.AddButton>
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
