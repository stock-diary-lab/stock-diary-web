import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Modal from '@components/common/Modal';
import SearchBar from '@components/common/SearchBar';
import * as S from './styled';
import { StockTransaction, StockTransactionDto } from '@stores/stock-transaction/types';
import {
  useAddStockTransactionMutation,
  useUpdateStockTransactionMutation,
  useDeleteStockTransactionMutation,
} from '@stores/stock-transaction';
import { useLazyGetListedStocksQuery } from '@stores/listed-stock';
import { debounce } from '@utils/debounce';
import { DateObj } from './Calendar/types';
import { customLocaleDateString } from '@utils/date';

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  stockType: 'buy' | 'sell';
  date: DateObj;
  isEditMode: boolean;
  currentStock: StockTransaction;
}

const stockTypeKorean = {
  buy: '매수',
  sell: '매도',
};

// TODO: 유효성 검사, 검색값 유효성 검사
function StockInputModal({ show, setShow, stockType, date, isEditMode, currentStock }: Props) {
  const [addStock] = useAddStockTransactionMutation();
  const [updateStock] = useUpdateStockTransactionMutation();
  const [deleteStock] = useDeleteStockTransactionMutation();

  const [newStock, setNewStock] = useState<StockTransactionDto>({
    listedStockId: '',
    quantity: 0,
    price: 0,
    fee: 0,
    type: stockType,
    reason: '',
    date: customLocaleDateString(date),
  });

  const [listedStock, setListedStock] = useState<{ name: string; id: string }>({ name: '', id: '' });
  const [searchValue, setSearchValue] = useState<string>('');

  const [trigger, { data: stockSearchList }] = useLazyGetListedStocksQuery();

  const debouncedPrefetch = (name: string) => debounce(() => trigger({ name }), 400)();

  useEffect(() => {
    if (isEditMode) {
      const { listedStock, ...others } = currentStock;
      setNewStock({ ...others, listedStockId: listedStock.id });
      setListedStock({ ...listedStock });
      setSearchValue(listedStock.name);
    }
  }, [isEditMode, currentStock]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewStock({ ...newStock, [e.target.name]: e.target.value });
  };

  const renderSearchItem = () => {
    if (!stockSearchList) return null;

    return (
      <>
        {stockSearchList.map((searchItem, index) => (
          <S.SearchStockItem
            key={index}
            onMouseDown={() => {
              setListedStock({ ...listedStock, name: searchItem.name, id: searchItem.id });
              setNewStock({ ...newStock, listedStockId: searchItem.id });
              setSearchValue(searchItem.name);
            }}
          >
            <span>{searchItem.name}</span>
            <span>{searchItem.id}</span>
          </S.SearchStockItem>
        ))}
      </>
    );
  };
  // <S.SearchList>
  //   {searchList.map((searchItem, index) => (
  //     <S.SearchItem
  //       key={index}
  //       onMouseDown={() => {
  //         // if (inputRef.current) {
  //         //   inputRef.current.value = searchItem[firstKey];
  //         // }
  //         if (setValue) {
  //           setValue(searchItem);
  //         }
  //       }}
  //     >
  //       <span>{searchItem[firstKey]}</span>
  //       {secondKey && <span>{searchItem[secondKey]}</span>}
  //     </S.SearchItem>
  //   ))}
  // </S.SearchList>
  // TODO: 유효성 검증(숫자만 입력.)
  return (
    <Modal
      show={show}
      setShow={setShow}
      onClickClose={() => {
        setNewStock({
          listedStockId: '',
          quantity: 0,
          price: 0,
          fee: 0,
          type: stockType,
          reason: '',
          date: customLocaleDateString(date),
        });
      }}
    >
      <>
        <S.StockModalHeader>
          <S.Title>{stockTypeKorean[stockType]}종목</S.Title>
        </S.StockModalHeader>
        <S.StockInputForm>
          <S.StockInputSearchContainer>
            <S.StockLabel>종목</S.StockLabel>
            <SearchBar
              value={searchValue}
              isInModal={true}
              placeholder="종목을 검색하세요"
              onChange={(e) => {
                // debouncedPrefetch(e.target.value);
                // setListedStock({ ...listedStock, name: e.target.value });
                setSearchValue(e.target.value);
                debouncedPrefetch(e.target.value);
              }}
              setValue={setSearchValue}
              searchList={stockSearchList || []}
              renderItem={renderSearchItem}
            />
          </S.StockInputSearchContainer>
          <S.StockInputContainer>
            <S.StockLabel>수량, 단가</S.StockLabel>
            <S.StockCountAndPrice>
              <S.StockCount>
                <div>
                  <S.StockInput
                    type="number"
                    name="quantity"
                    onChange={handleInputChange}
                    value={newStock.quantity || undefined}
                    placeholder={'0'}
                  />
                  <span style={{ display: 'inline-block' }}>개</span>
                </div>
                <S.Multiply>X</S.Multiply>
                <div>
                  <S.StockInput
                    type="number"
                    name="price"
                    onChange={handleInputChange}
                    value={newStock.price || undefined}
                    placeholder={'0'}
                  />
                  <span style={{ display: 'inline-block' }}>원</span>
                </div>
              </S.StockCount>
              <S.StockCount>
                + 수수료
                <S.StockInput
                  type="number"
                  name="fee"
                  onChange={handleInputChange}
                  value={newStock.fee || undefined}
                  placeholder={'0'}
                />
                <span>원</span>
              </S.StockCount>
              <S.StockCount>
                <S.StockTotalDiv isZero={newStock.quantity * newStock.price === 0}>
                  = 총 {stockTypeKorean[stockType]}금액
                  <S.StockTotal>
                    {(newStock.quantity * newStock.price + +(newStock.fee || 0)).toLocaleString()}원
                  </S.StockTotal>
                </S.StockTotalDiv>
              </S.StockCount>
            </S.StockCountAndPrice>
          </S.StockInputContainer>
          <S.StockInputContainer>
            <S.StockReasonLabel>{stockTypeKorean[stockType]}이유</S.StockReasonLabel>
            <S.StockTextArea rows={4} name="reason" onChange={handleInputChange} value={newStock.reason} />
          </S.StockInputContainer>
        </S.StockInputForm>
        <S.Buttons isEditMode={isEditMode}>
          <button
            onClick={() => {
              if (isEditMode) {
                deleteStock({ id: newStock.id as number });
              }
              setNewStock({
                listedStockId: '',
                quantity: 0,
                price: 0,
                fee: 0,
                type: stockType,
                reason: '',
                date: customLocaleDateString(date),
              });
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
                  listedStockId: listedStock.id,
                  date: customLocaleDateString(date),
                });
                setNewStock({
                  listedStockId: '',
                  quantity: 0,
                  price: 0,
                  fee: 0,
                  type: stockType,
                  reason: '',
                  date: customLocaleDateString(date),
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
