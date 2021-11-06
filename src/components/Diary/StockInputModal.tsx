import { Dispatch, SetStateAction } from 'react';
import Modal from '@components/common/Modal';
import { ReactComponent as SearchIcon } from '@svgs/search.svg';
import * as S from './styled';

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  stockType: 'buy' | 'sell';
}

const stockTypeKorean = {
  buy: '매수',
  sell: '매도',
};

function StockInputModal({ show, setShow, stockType }: Props) {
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
              <S.StockInput type="search" placeholder="종목을 검색하세요" />
              <SearchIcon width="16" />
            </S.StockSearchContainer>
          </S.StockInputSearchContainer>
          <S.StockInputContainer>
            <S.StockLabel>수량, 단가</S.StockLabel>
            <S.StockCountAndPrice>
              <S.StockCount>
                <div>
                  <S.StockInput />
                  <span style={{ display: 'inline-block' }}>개</span>
                </div>
                <S.Multiply>X</S.Multiply>
                <div>
                  <S.StockInput />
                  <span style={{ display: 'inline-block' }}>원</span>
                </div>
              </S.StockCount>
              <S.StockCount>
                + 수수료 <S.StockInput />
                <span>원</span>
              </S.StockCount>
              <S.StockCount>
                <div>
                  = 총 {stockTypeKorean[stockType]}금액{' '}
                  <S.StockTotal>원</S.StockTotal>
                </div>
              </S.StockCount>
            </S.StockCountAndPrice>
          </S.StockInputContainer>
          <S.StockInputContainer>
            <S.StockReasonLabel>
              {stockTypeKorean[stockType]}이유
            </S.StockReasonLabel>
            <S.StockTextArea rows={4} />
          </S.StockInputContainer>
        </S.StockInputForm>
      </>
    </Modal>
  );
}

export default StockInputModal;
