import { useEffect, useState } from 'react';
import styled from '@styles/theme-components';
import * as S from './styled';
import { DateObj } from './CalendarRange/types';
import { useGetStockTransactionsQuery } from '@stores/stock-transaction';
import { StockTransaction } from '@stores/stock-transaction/types';
import HistoryModal from './HistoryModal';
import { MarketType } from '@stores/listed-stock/types';
interface Props {
  range: {
    prev: DateObj;
    next: DateObj;
  };
}

function DetailHistoryTable({ range }: Props) {
  const { data: stockObj } = useGetStockTransactionsQuery({
    startDate: `${range.prev.year}-${range.prev.month}-${range.prev.date}`,
    endDate: `${range.next.year}-${range.next.month}-${range.next.date}`,
  });

  const [stockTransactionSorted, setStockTransactionSorted] = useState<StockTransaction[]>([]);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [stockTransaction, setStockTransaction] = useState<StockTransaction>({
    listedStock: { name: '', id: '', industry: '', market: MarketType.KOSPI },
    quantity: 0,
    price: 0,
    fee: 0,
    type: 'buy',
    reason: '',
    income: 0,
    incomeRatio: 0,
    date: new Date(),
  });

  useEffect(() => {
    if (stockObj) {
      setStockTransactionSorted(Object.values(stockObj).flat());
    }
  }, [stockObj]);

  const [filters, setFilters] = useState<{ [key: string]: 'descend' | 'ascend' }>({
    name: 'descend',
    type: 'descend',
    date: 'descend',
    revenue: 'descend',
    rate: 'descend',
  });

  const setFilterByName = (name: string) => {
    setFilters({ ...filters, [name]: filters[name] === 'ascend' ? 'descend' : 'ascend' });
    setStockTransactionSorted(
      [...stockTransactionSorted].sort((a, b) => {
        if (filters[name] === 'ascend') {
          if ((a[name as keyof StockTransaction] as any) - (b[name as keyof StockTransaction] as any)) {
            return 1;
          } else return -1;
        } else {
          if ((b[name as keyof StockTransaction] as any) - (a[name as keyof StockTransaction] as any)) {
            return 1;
          } else return -1;
        }
      })
    );
  };

  return (
    <>
      <div style={{ width: '100%', marginTop: '16px' }}>
        <S.TableTitle>상세 매매기록</S.TableTitle>
        <Table>
          <thead>
            <tr>
              <TableHeader direction={filters['name']} onClick={() => setFilterByName('name')}>
                종목명
              </TableHeader>
              <TableHeader direction={filters['type']} onClick={() => setFilterByName('type')}>
                구분
              </TableHeader>
              <TableHeader direction={filters['date']} onClick={() => setFilterByName('date')}>
                매매 일자
              </TableHeader>
              <TableHeader direction={filters['revenue']} onClick={() => setFilterByName('revenue')}>
                실현손익
              </TableHeader>
              <TableHeader direction={filters['rate']} onClick={() => setFilterByName('rate')}>
                손익률
              </TableHeader>
              <TableHeader>금액</TableHeader>
              <TableHeader>수량</TableHeader>
              <TableHeader>단가</TableHeader>
              <TableHeader>매수/매도 이유</TableHeader>
            </tr>
          </thead>
          <tbody>
            {stockTransactionSorted.map((stock, id) => (
              <tr
                key={stock.listedStock.name + stock.reason + id}
                onClick={() => {
                  setModalShow(true);
                  setStockTransaction(stock);
                }}
              >
                <td>{stock.listedStock.name}</td>
                <TableData isBuy={stock.type === 'buy'}>{stock.type === 'buy' ? '매수' : '매도'}</TableData>
                <td>{new Date(stock.date).toLocaleDateString()}</td>
                <TableData isBuy={stock.type === 'buy'}>
                  {stock.type === 'sell' ? stock.income?.toLocaleString() : ''}
                </TableData>
                <TableData isBuy={stock.type === 'buy'}>
                  {stock.type === 'sell' ? stock.incomeRatio?.toLocaleString() : ''}
                </TableData>
                <td>{(stock.price * stock.quantity).toLocaleString()}</td>
                <td>{stock.quantity.toLocaleString()}</td>
                <td>{stock.price.toLocaleString()}</td>
                <td>{stock.reason}</td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </Table>
      </div>
      <HistoryModal show={modalShow} setShow={setModalShow} stockTransaction={stockTransaction} />
    </>
  );
}

const Table = styled.table`
  width: 100%;
  text-align: center;

  & thead {
    background-color: #b9d6ff;
  }

  & tbody {
    height: 576px;
    background-color: white;
  }

  & tr {
  }
  & tr > th,
  & tr > td {
    vertical-align: middle;
    height: 32px;
    padding: 16px 24px;
  }

  & tr > th:nth-child(1) {
    border-top-left-radius: 8px;
  }

  & tr > th:last-child {
    border-top-right-radius: 8px;
  }

  & tr > td {
    border-right: 1px solid ${(props) => props.theme.colors.whiteGray};
  }

  & tr > td:nth-child(1) {
    border-bottom-left-radius: 8px;
  }

  & tr > td:last-child {
    border-bottom-right-radius: 8px;
    border-right: none;
  }
`;

const TableHeader = styled.th<{ direction?: 'ascend' | 'descend' }>`
  position: relative;
  &::after {
    ${(props) =>
      props.direction &&
      `content: '';
       border-left: 4px solid transparent;
       border-right: 4px solid transparent;
       position: absolute;
       right: 20px;
       top: 20px;`}
    ${(props) =>
      props.direction === 'descend' &&
      `border-bottom: 6px solid #3B80E3;
       `}
       ${(props) =>
      props.direction === 'ascend' &&
      `border-top: 6px solid #3B80E3;
       `}
  }
`;

const TableData = styled.td<{ isBuy: boolean }>`
  ${(props) => (props.isBuy ? `color: #f36874;` : `color: #3B80E3;`)}
`;
export default DetailHistoryTable;
