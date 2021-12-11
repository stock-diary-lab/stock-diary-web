import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Modal from '@components/common/Modal';
import { ReactComponent as SearchIcon } from '@svgs/search.svg';
import * as S from './styled';
import { Stock } from '@stores/stock/types';
import {
  useAddStockMutation,
  useUpdateStockMutation,
  useDeleteStockMutation,
} from '@stores/stock';
import { useGetListedStocksQuery } from '@stores/listed-stock';
import { debounce } from '@utils/debounce';
import { DateObj } from './Calendar/types';
import SearchBar from '@components/common/SearchBar';

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  stockType: 'buy' | 'sell';
  date: DateObj;
  isEditMode: boolean;
  currentStock: Stock;
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

function StockInputModal({
  show,
  setShow,
  stockType,
  date,
  isEditMode,
  currentStock,
}: Props) {
  const [addStock] = useAddStockMutation();
  const [updateStock] = useUpdateStockMutation();
  const [deleteStock] = useDeleteStockMutation();

  const [newStock, setNewStock] = useState<Stock>({
    name: '',
    quantity: 0,
    price: 0,
    fee: 0,
    type: stockType,
    reason: '',
    date: new Date(`${date.year}-${date.month}-${date.date}`),
  });

  // const [stockSearchList, setStockSearchList] = useState<
  //   { name: string; code: string }[]
  // >([]);
  const [onFocusSearch, setOnFocusSearch] = useState<boolean>(false);

  const [searchValue, setSearchValue] = useState<string>('');

  const { data: stockSearchList } = useGetListedStocksQuery({
    name: searchValue,
  });

  const debouncedPrefetch = (name: string) =>
    debounce(() => setSearchValue(name), 400)();

  useEffect(() => {
    if (isEditMode) {
      setNewStock({ ...currentStock });
    }
  }, [isEditMode, currentStock]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewStock({ ...newStock, [e.target.name]: e.target.value });
  };

  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setNewStock({ ...newStock, name: e.target.value });
  //   setStockSearchList(
  //     stockList.filter(
  //       (stock) =>
  //         e.target.value !== '' && stock.name.startsWith(e.target.value)
  //     )
  //   );
  // };

  // TODO: 유효성 검증(숫자만 입력.)
  return (
    <Modal show={show} setShow={setShow}>
      <>
        <S.StockModalHeader>
          <S.Title>{stockTypeKorean[stockType]}종목</S.Title>
        </S.StockModalHeader>
        <S.StockInputForm>
          <S.StockInputSearchContainer>
            <S.StockLabel>종목</S.StockLabel>
            <SearchBar
              isInModal={true}
              placeholder="종목을 검색하세요"
              onChange={(e) => {
                debouncedPrefetch(e.target.value);
              }}
              searchList={stockSearchList || []}
              firstKey="name"
              secondKey="id"
            />
          </S.StockInputSearchContainer>
          {/* <S.StockSearchContainer>
              <div>
                <S.StockInput
                  type="search"
                  name="name"
                  placeholder="종목을 검색하세요"
                  autoComplete="off"
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
          </S.StockInputSearchContainer> */}
          <S.StockInputContainer>
            <S.StockLabel>수량, 단가</S.StockLabel>
            <S.StockCountAndPrice>
              <S.StockCount>
                <div>
                  <S.StockInput
                    name="quantity"
                    onChange={handleInputChange}
                    value={newStock.quantity}
                  />
                  <span style={{ display: 'inline-block' }}>개</span>
                </div>
                <S.Multiply>X</S.Multiply>
                <div>
                  <S.StockInput
                    name="price"
                    onChange={handleInputChange}
                    value={newStock.price}
                  />
                  <span style={{ display: 'inline-block' }}>원</span>
                </div>
              </S.StockCount>
              <S.StockCount>
                + 수수료
                <S.StockInput
                  name="fee"
                  onChange={handleInputChange}
                  value={newStock.fee}
                />
                <span>원</span>
              </S.StockCount>
              <S.StockCount>
                <div>
                  = 총 {stockTypeKorean[stockType]}금액
                  <S.StockTotal>
                    {(
                      newStock.quantity * newStock.price +
                      +(newStock.fee || 0)
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
              value={newStock.reason}
            />
          </S.StockInputContainer>
        </S.StockInputForm>
        <S.Buttons isEditMode={isEditMode}>
          <button
            onClick={() => {
              if (isEditMode) {
                deleteStock({ id: newStock.id as number });
              }
              setShow(false);
            }}
          >
            {isEditMode ? '삭제' : '취소'}
          </button>
          <button
            onClick={() => {
              if (isEditMode) {
                updateStock({
                  ...newStock,
                });
              } else {
                addStock({
                  ...newStock,
                  date: new Date(`${date.year}-${date.month}-${date.date}`),
                });
              }
              setShow(false);
            }}
          >
            {isEditMode ? '수정' : '저장'}
          </button>
        </S.Buttons>
      </>
    </Modal>
  );
}

export default StockInputModal;
