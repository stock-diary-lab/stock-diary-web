import Modal from '@components/common/Modal';
import { StockTransaction } from '@stores/stock-transaction/types';
import { Dispatch, SetStateAction } from 'react';
import * as S from './styled';

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  stockTransaction: StockTransaction;
}

function HistoryModal({ show, setShow, stockTransaction }: Props) {
  return (
    <Modal show={show} setShow={setShow}>
      <>
        <S.HistoryModalHeader>상세 매매기록</S.HistoryModalHeader>
        <S.HistoryInfoRow>
          <S.HistoryInfoCell>
            <label>종목명</label>
            <S.HistoryInfoBold>{stockTransaction.listedStock.name}</S.HistoryInfoBold>
          </S.HistoryInfoCell>
          <S.HistoryInfoCell>
            <label>구분</label>
            <S.HistoryInfoType stockType={stockTransaction.type}>
              {stockTransaction.type === 'buy' ? '매수' : '매도'}
            </S.HistoryInfoType>
          </S.HistoryInfoCell>
          <S.HistoryInfoCell>
            <label>매매 일자</label>
            <S.HistoryInfoBold>{new Date(stockTransaction.date).toLocaleDateString()}</S.HistoryInfoBold>
          </S.HistoryInfoCell>
        </S.HistoryInfoRow>
        <S.StockCountAndPrice>
          <S.StockCountFirst>
            <div>
              <S.StockLabel>수량, 단가</S.StockLabel>
              <S.StockInput readOnly type="number" name="quantity" defaultValue={stockTransaction.quantity} />
              <span style={{ display: 'inline-block' }}>개</span>
            </div>
            <S.Multiply>X</S.Multiply>
            <div>
              <S.StockInput readOnly type="number" name="price" defaultValue={stockTransaction.price} />
              <span style={{ display: 'inline-block' }}>원</span>
            </div>
          </S.StockCountFirst>
          <S.StockCount>
            + 수수료
            <S.StockInput readOnly type="number" name="fee" defaultValue={stockTransaction.fee} />
            <span>원</span>
          </S.StockCount>
          <S.StockCount>
            <S.StockTotalContainer>
              = 총 금액
              <S.StockTotal>
                {(stockTransaction.quantity * stockTransaction.price + (stockTransaction.fee || 0)).toLocaleString()}원
              </S.StockTotal>
            </S.StockTotalContainer>
          </S.StockCount>
        </S.StockCountAndPrice>
        <S.StockInputContainer>
          <S.StockReasonLabel>이유</S.StockReasonLabel>
          <S.StockTextArea rows={4} name="reason" readOnly defaultValue={stockTransaction.reason} />
        </S.StockInputContainer>
      </>
    </Modal>
  );
}

export default HistoryModal;
