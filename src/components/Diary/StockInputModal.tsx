import React, { Dispatch, SetStateAction, useState } from 'react';
import Modal from '@components/common/Modal';
import { ReactComponent as SearchIcon } from '@svgs/search.svg';
import * as S from './styled';
import { Stock } from './types';

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  stockType: 'buy' | 'sell';
}

const stockTypeKorean = {
  buy: '매수',
  sell: '매도',
};

const stockList = [
  {
    name: '삼성전자',
    code: '005930',
  },
  { name: 'KCC건설', code: '021320' },
  { name: 'KB금융', code: '105560' },
];

function StockInputModal({ show, setShow, stockType }: Props) {
  const [newStock, setNewStock] = useState<Stock>({
    name: '',
    quantity: 0,
    price: 0,
    type: stockType,
    reason: '',
  });
  const [fee, setFee] = useState<number>(0);

  const [stockSearchList, setStockSearchList] = useState<
    { name: string; code: string }[]
  >([]);
  const [onFocusSearch, setOnFocusSearch] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewStock({ ...newStock, [e.target.name]: e.target.value });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewStock({ ...newStock, name: e.target.value });
    setStockSearchList(
      stockList.filter(
        (stock) =>
          e.target.value !== '' && stock.name.startsWith(e.target.value)
      )
    );
  };

  return (
    <Modal show={show} setShow={setShow}>
      <>
        <S.StockModalHeader>
          <S.Title>{stockTypeKorean[stockType]}종목</S.Title>
        </S.StockModalHeader>
        <S.StockInputForm>
          <S.StockInputSearchContainer>
            <S.StockLabel>종목</S.StockLabel>
            <S.StockSearchContainer>
              <div>
                <S.StockInput
                  type="search"
                  name="name"
                  placeholder="종목을 검색하세요"
                  onChange={handleSearch}
                  value={newStock.name}
                  onBlur={() => setOnFocusSearch(false)}
                  onFocus={() => setOnFocusSearch(true)}
                />
                <SearchIcon width="16" />
              </div>
              {stockSearchList.length > 0 && onFocusSearch && (
                <S.StockSearchItemContainer>
                  {stockSearchList.map((stock) => (
                    <S.StockSearchItem
                      key={stock.name}
                      onMouseDown={() => {
                        setNewStock({ ...newStock, name: stock.name });
                      }}
                    >
                      <span>{stock.name}</span>
                      <span>{stock.code}</span>
                    </S.StockSearchItem>
                  ))}
                </S.StockSearchItemContainer>
              )}
            </S.StockSearchContainer>
          </S.StockInputSearchContainer>
          <S.StockInputContainer>
            <S.StockLabel>수량, 단가</S.StockLabel>
            <S.StockCountAndPrice>
              <S.StockCount>
                <div>
                  <S.StockInput name="quantity" onChange={handleInputChange} />
                  <span style={{ display: 'inline-block' }}>개</span>
                </div>
                <S.Multiply>X</S.Multiply>
                <div>
                  <S.StockInput name="price" onChange={handleInputChange} />
                  <span style={{ display: 'inline-block' }}>원</span>
                </div>
              </S.StockCount>
              <S.StockCount>
                + 수수료
                <S.StockInput
                  name="fee"
                  onChange={(e) => setFee(+e.target.value)}
                />
                <span>원</span>
              </S.StockCount>
              <S.StockCount>
                <div>
                  = 총 {stockTypeKorean[stockType]}금액
                  <S.StockTotal>
                    {(
                      newStock.quantity * newStock.price +
                      fee
                    ).toLocaleString()}
                    원
                  </S.StockTotal>
                </div>
              </S.StockCount>
            </S.StockCountAndPrice>
          </S.StockInputContainer>
          <S.StockInputContainer>
            <S.StockReasonLabel>
              {stockTypeKorean[stockType]}이유
            </S.StockReasonLabel>
            <S.StockTextArea
              rows={4}
              name="reason"
              onChange={handleInputChange}
            />
          </S.StockInputContainer>
        </S.StockInputForm>
        <S.Buttons>
          <button>취소</button>
          <button>저장</button>
        </S.Buttons>
      </>
    </Modal>
  );
}

export default StockInputModal;