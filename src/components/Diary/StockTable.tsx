import { useEffect, useState } from 'react';
import StockInputModal from './StockInputModal';
import * as S from './styled';

function StockTable() {
  const [modalShow, setModalShow] = useState<boolean>(false);

  return (
    <>
      <S.TableContainer>
        <S.Title>매수종목</S.Title>
        <S.Table>
          <S.THeader>
            <S.TRow>
              <S.THead>종목</S.THead>
              <S.THead>수량</S.THead>
              <S.THead>단가</S.THead>
              <S.THead>매수금액</S.THead>
              <S.THead>매수이유</S.THead>
            </S.TRow>
          </S.THeader>
          <S.TBody>
            <S.TRow>
              <S.TData textAlign="center">삼성전자</S.TData>
              <S.TData textAlign="right">10개</S.TData>
              <S.TData textAlign="right">81,000원</S.TData>
              <S.TData textAlign="right">810,000원</S.TData>
              <S.TData>반도체 잘 나갈듯</S.TData>
            </S.TRow>
            <S.TRow>
              <S.TData textAlign="center">삼성전자</S.TData>
              <S.TData textAlign="right">10개</S.TData>
              <S.TData textAlign="right">81,000원</S.TData>
              <S.TData textAlign="right">810,000원</S.TData>
              <S.TData>반도체 잘 나갈듯</S.TData>
            </S.TRow>
            <S.TRow>
              <S.TData onClick={() => setModalShow(true)}>추가</S.TData>
            </S.TRow>
          </S.TBody>
        </S.Table>
      </S.TableContainer>
      <StockInputModal show={modalShow} setShow={setModalShow} />
    </>
  );
}

export default StockTable;
